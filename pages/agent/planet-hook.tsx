import { Input } from "@/components/Input";
import { SplitLayout } from "@/components/SplitLayout";
import { convo } from "@convo-lang/convo-lang";
import { useConvo } from "@convo-lang/convo-lang-react";
import { JsonView, LoadingDots } from "@iyio/react-common";
import { useState } from "react";

export default function PlanetHookExample()
{

    const [hint,setHint]=useState('');

    const planet=useConvo(convo`
        > define
        Planet=struct(
            name:string
            distanceFromSunMiles:number
            description:string
            # A funny comment about the user's hint
            commentAboutHint:string
            # The sentiment of the hint
            hintSentiment:enum("happy" "sad" "mad" "neutral")
        )

        @json Planet
        > user
        Guess the planet based on the following hint:

        <hint>${hint}</hint>

    `,{disable:!hint})

    return (
        <SplitLayout name="Planet Hook">
            What planet are you thinking of? Give me a hint.
            <Input value={hint} onChange={setHint} placeholder="Enter hint"/>
            Planet Guess
            {planet.busy?<LoadingDots/>:<JsonView value={planet.value} />}
        </SplitLayout>
    )
}