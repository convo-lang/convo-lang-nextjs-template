import { cn } from "@iyio/common";
import Link from "next/link";
import { ConvoView, ConvoViewProps } from "./ConvoView";
import { GitHubIcon, HomeIcon, NpmIcon } from "./Icons";

export interface AgentViewProps extends ConvoViewProps
{
    name:string;
    children?:any;
}

export function AgentView({
    name,
    children,
    ...props
}:AgentViewProps){

    return (
        <div className="w-full h-[100vh] flex flex-col p-4 gap-4 text-white">

            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2 items-center">
                    <Link href="/"><HomeIcon/></Link>
                    <Link href="/agent/todo-list" className="!underline">todo</Link>
                    <Link href="/agent/weather" className="!underline">weather</Link>
                    <Link href="/agent/video-dude" className="!underline">video</Link>
                </div>
                    <h1 className="text-lg !ml-2">
                        {name}
                    </h1>
                <div className="flex flex-row gap-2 items-center">
                    <p className="opacity-50">Try typing "/source"</p>
                    <a href="https://learn.convo-lang.ai" target="_blank"><img src="/logo.png" className="h-6"/></a>
                    <a href="https://github.com/convo-lang/convo-lang" target="_blank"><GitHubIcon/></a>
                    <a href="https://www.npmjs.com/package/@convo-lang/convo-lang" target="_blank"><NpmIcon/></a>
                </div>
            </div>

            <div className={cn("flex flex-row flex-1 gap-4",!children&&'mx-auto w-full max-w-[800px]')}>
                {!!children &&
                    <div className="flex-1 border border-zinc-700 rounded-md p-4 gap-2 flex flex-col">
                        {children}
                    </div>
                }

                <ConvoView
                    className="flex-1 border border-zinc-700 rounded-md"
                    {...props}
                />
            </div>
        </div>
    )

}