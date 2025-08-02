import { cn } from "@iyio/common";
import { NextJsBaseLayoutView } from "@iyio/nextjs-common";
import { SlimButton } from "@iyio/react-common";
import Link from "next/link";
import { useState } from "react";
import { BarsIcon, GitHubIcon, NpmIcon } from "./Icons";

export interface SplitViewProps
{
    name:string;
    children?:any;
    right?:any;
}

export function SplitLayout({
    name,
    children,
    right,
}:SplitViewProps){

    const [menuOpen,setMenuOpen]=useState(false);

    return (
        <NextJsBaseLayoutView flex1 col>
            <div className="w-full h-[100vh] flex flex-col p-4 gap-4 text-white">

                <div className="flex flex-row justify-between">
                    <SlimButton onClick={()=>setMenuOpen(!menuOpen)}>
                        <BarsIcon/>
                    </SlimButton>
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

                <div className="flex flex-row flex-1 gap-4">

                    {menuOpen && <div className={cn("flex flex-col gap-2 border border-zinc-700 rounded-md p-4")}>
                        <Link href="/">Home</Link>
                        <Link href="/agent/todo-list">todo</Link>
                        <Link href="/agent/weather">weather</Link>
                        <Link href="/agent/video-dude">video</Link>
                        <Link href="/agent/crypto-man">crypto</Link>
                        <Link href="/agent/interview">interview</Link>
                        <Link href="/agent/planet-hook">planet-hook</Link>
                        <Link href="/agent/tool-hook">tool-hook</Link>
                    </div>}

                    <div className={cn("flex flex-row flex-1 gap-4",!children&&'mx-auto w-full max-w-[800px]')}>

                        {!!children &&
                            <div className="flex-1 border border-zinc-700 rounded-md p-4 gap-2 flex flex-col">
                                {children}
                            </div>
                        }

                        {right}
                    </div>
                </div>
            </div>
        </NextJsBaseLayoutView>
    )

}