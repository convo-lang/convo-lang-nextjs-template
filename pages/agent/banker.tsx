import { AgentView } from "@/components/AgentView";
import { useState } from "react";

export default function WeatherAgent()
{

    const [state,setState]=useState<Record<string,any>>({});
    
    return (
        <AgentView
            name="Banker"
            includeComponents
            onVarsChange={setState}
            template={/*convo*/`

                > define
                balance=100

                @edge
                > system
                You are a bank telling agents help a user

                The user's balance is: {{balance}} USD

                > deposit(amount:number) -> (
                    balance = add( balance amount )
                )

                > withdraw(amount:number) -> (
                    balance = sub( balance amount )
                )

                > assistant
                Hello how can I help you


            `}
        >
            <div>Balance: ${state.balance}</div>
        </AgentView>
    )
}