import { AgentView } from "@/components/AgentView";
import { Answer } from "@/lib/types";
import { MarkdownViewer } from "@convo-lang/convo-lang-react";
import { useState } from "react";


/**
 * This agent interviews the user
 */
export default function InterviewAgent()
{

    const [state,setState]=useState<Record<string,any>>({});

    const answers:Answer[]|undefined=state['answers'];
    const interviewSummary:string|null=state['interviewSummary'];
    
    return (
        <AgentView
            name="🤓 Interview"
            includeComponents
            onVarsChange={setState}
            template={/*convo*/`



> define
Answer=struct(
    topic:string
    question:string
    answer:string
)

answers=[]
interviewDone=false
interviewSummary=null

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


# Call when all interview topics have been covered
> finishInterview(
    # The summary of the interview in markdown format. Start the summary with an h1 header.
    summary:string
) -> (
    interviewSummary=summary
    interviewDone=true
    ===
        The interview is complete. Tell the user thank you for their time then complement them on 
        one of the topics and ask a question about one of their answers to start a side bar conversation.
        Act very interested in the user.
    ===
)


@on user = not(interviewDone)
> local onAnswer(content:string) -> (

    if( ??? (+boolean /m)
        Did the user answer a question?
    ??? ) then(
        
        ??? (+ answer=json:Answer /m task:Saving answer)
            Convert the user's answer to an Answer object
        ???

        answers = aryAdd(answers answer)

        switch(
            ??? (+ boolean /m task:Reviewing)
                Has the user given enough detail about the topic of {{answer.topic}} for you to have a
                full understanding of their relation with the topic? The user should have answered at least
                3 questions about the topic.
            ???

            === (suffix /m)
                Move on to the next topic
            ===

            === (suffix /m)
                Dive deeper into the users last answer by asking them a related question
            ===
        )
    ) else (

        switch(

            ??? (+ boolean /m task:Reviewing)
                Have all topics been completed?
            ???

            === (suffix /m)
                Call the finishInterview function
            ===

            === (suffix /m)
                Continue the interview
            ===

        )
    )
)

@disableTriggers
@init
@hidden
> user
Ask the first question


            `}
        >

            {!!interviewSummary && <MarkdownViewer markdown={interviewSummary} />}

            <h1 className="text-xl">Questions answered</h1>
                    
            {!answers?.length?
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