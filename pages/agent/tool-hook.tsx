import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { SplitLayout } from "@/components/SplitLayout";
import { convo } from "@convo-lang/convo-lang";
import { useConvo } from "@convo-lang/convo-lang-react";
import { LoadingDots } from "@iyio/react-common";
import { useState } from "react";

const gridSize=40;

export default function ToolHookExample()
{

    const [command,setCommand]=useState('');
    const [committedCommand,setCommittedCommand]=useState('');

    const status=useConvo(convo`
        
        # Moves the users position by the give number of blocks.
        # To move up pass a negative as yDirection.
        # To move left pass a negative value as xDirection.
        > move(xDirection:number yDirection:number) -> ${(x:number,y:number)=>{
            setState({
                ...state,
                x:state.x+x,
                y:state.y+y,
            })
        }}

        > setColor(cssColorValue:string) -> ${(color:string)=>{
            setState({
                ...state,
                color
            })
        }}

        > rotate(deg:number) -> ${(deg:number)=>{
            setState({
                ...state,
                rotation:`${deg}deg`,
            })
        }}

        @call
        > user
        Execute the following command:
        <command>${committedCommand}</command>


    `,{disable:!committedCommand,initDelayMs:0,updateDelayMs:0});

    const [state,setState]=useState({
        x:3,
        y:3,
        color:'blue',
        rotation:'0deg',
    });

    return (
        <SplitLayout name="Tool Hook">
            
            <form className="flex flex-row gap-4" onSubmit={(e)=>{
                e.preventDefault();
                setCommittedCommand(command);
                setCommand('');
            }}>
                <Input className="flex-1" value={command} onChange={setCommand} placeholder="Enter a command"/>
                <Button type="submit">Submit</Button>
            </form>

            <div className="flex flex-row gap-4 my-4 items-center">
                {JSON.stringify(state)}
                {status.busy && <LoadingDots/>}
            </div>

            <div className="grid-background flex-1 relative">
                <div
                    style={{
                        position:'absolute',
                        top:0,
                        left:0,
                        transform:`translate(${(state.x-1)*gridSize+3}px,${(state.y-1)*gridSize+3}px) rotate(${state.rotation})`,
                        backgroundColor:state.color,
                        width:`${gridSize-6}px`,
                        height:`${gridSize-6}px`,
                        borderRadius:'4px',
                        transition:'all 0.5s ease-in-out',
                        
                    }}
                >
                    {status.busy && <LoadingDots absCenter/>}
                </div>
            </div>

        </SplitLayout>
    )
}