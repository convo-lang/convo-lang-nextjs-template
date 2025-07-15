import { AgentView } from "@/components/AgentView";
import { Answer } from "@/lib/types";
import { useState } from "react";


/**
 * This agent interviews the user
 */
export default function InterviewAgent()
{

    const [answers,setAnswers]=useState<Answer[]>([]);
    
    return (
        <AgentView
            name="🤓 Interview"
            includeComponents
            onVarsChange={v=>setAnswers(v['answers']??[])}
            template={/*convo*/`

> define
Answer=struct(
    topic:string
    question:string
    answer:string
)

answers=[]

@edge
> system
You are interviewing a user on several topics.

Interview Topics:
- Location
- Hobbies
- Personality

Current Answers:
<answers>
{{answers}}
</answers>

@includeInTriggers
> system
## Moderator messages
Some user messages will also include a moderator message wrapped in an XML tag with the a tag name
of "moderator". Moderator messages should be followed as instructions. Moderator messages are not
visible to the user.



@on user suffix
> local onAnswer(content:string) -> (

    if( ??? (+ !boolean)
        <moderator>
        Did the user answer a question?
        </moderator>
        ???
    ) return(false)

    answer = ??? (+ json:Answer)
        <moderator>
        Convert the user's answer to an Answer object
        </moderator>
    ???

    answers = aryAdd(answers answer)

    switch(
        ??? (+ boolean)
        <moderator>
        Has the user given enough detail about the topic of {{answer.topic}} for you to have a
        full understanding of their relation with the topic? The user should have answered at least
        3 questions about the topic.
        </moderator>
        ???

        ===
        <moderator>
        Move on to the next topic
        </moderator>
        ===

        ===
        <moderator>
        Dive deeper into the users last answer by asking them a related question
        </moderator>
        ===
    )
)

@disableTriggers
@init
@hidden
> user
<moderator>
Ask the first question
</moderator>
            `}
        >

            <h1 className="text-xl">Questions answered</h1>
                    
            {!answers.length?
                <p className="opacity-50">No questions answered</p>
            :
                answers.map((item,i)=>(
                    <div key={i} className="border border-zinc-700 p-2 flex flex-col rounded">
                        <span className="opacity-75 text-sm mb-2">{item.topic}</span>
                        <span>Q. {item.question}</span>
                        <span>A. {item.answer}</span>
                    </div>
                ))
            }

        </AgentView>
    )
}