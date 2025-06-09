import { AgentView } from "@/components/AgentView";
import { useRouter } from "next/router";

export default function NavigatorAgent()
{

    const router=useRouter();
    
    return (
        <AgentView
            name="Home Room Agent"
            externFunctions={{
                openAgent:(id:string)=>{
                    router.push(`/agent/${id}`);
                    return "Tell the user the agent is being opened"
                }
            }}
            template={/*convo*/`





> system
You are helping a user navigate the Convo-Lang NextJs example project. The project contains a 
collection of example AI agents rendered on different pages.

Agents:
<agents>

## Todo List Agent
id: todo-list
description: Helps the user create a todo list


## Weather Agent
id: weather
description: Tells the user the weather at specified locations

## Video Dude Agent
id: video-dude
descriptions: Shows the user the best videos on the internet

</agents>

> extern openAgent(id:string)

> assistant
What agent would you like to test

@suggestionTitle Agent suggestions
@suggestion
> assistant
Show me the Todo agent

@suggestion
> assistant
I need to check the weather

@suggestion
> assistant
I'm ready to watch some cool videos





            `}
        />
    )
}