import { AgentView } from "@/components/AgentView";

export default function CryptoMan()
{
    
    return (
        <AgentView
            name="🤑 Crypto Man"
            includeComponents
            template={/*convo*/`

@import @/lib/example-functions/crypto.ts

> system
You are help the user find information about crypto coins

> assistant
Do you need to know the price of any crypto coins?

@suggestion
> assistant
What is the price of Bitcoin

@suggestion
> assistant
What is the price of Ethereum

@suggestion
> assistant
Whats the price of DOGE sitting at


            `}
        />
    )
}