import { convoComps, convoTypes } from "@/convo-generated/convo";
import { convoCompReg } from "@/convo-generated/convo-comp-reg";
import { ConversationUiCtrl } from "@convo-lang/convo-lang";
import { ConversationView, ConversationViewProps, ConvoLangTheme, defaultDarkConvoLangTheme } from "@convo-lang/convo-lang-react";
import { BaseLayoutOuterProps } from "@iyio/common";
import { NextJsBaseLayoutView } from "@iyio/nextjs-common";
import { useSubject } from "@iyio/react-common";
import { useEffect, useState } from "react";

const defaultTheme:ConvoLangTheme={
    ...defaultDarkConvoLangTheme,
    borderColor:'#fff',
    inputBorder:'1px solid #aaaaaa',
    agentColor:'#ffffff',
    agentBackground:'#1B1E22',
    userBackground:'#1B1E22',
    userColor:'#ffffff',
    borderRadius:'4px',
    messageBorderRadius:'4px',
    userBorder:'1px solid rgba(255, 255, 255, 0.11)'
}

export interface ConvoViewProps extends ConversationViewProps
{
    onStateChange?:(state:Record<string,any>)=>void;
    includeTypes?:boolean;
    includeComponents?:boolean;
}

export function ConvoView({
    theme=defaultTheme,
    showInputWithSource=true,
    enabledSlashCommands=true,
    httpEndpoint="/api/convo-lang",
    template,
    inputProps,
    onStateChange,
    getCtrl,
    includeTypes,
    includeComponents,
    ...props
}:ConvoViewProps & BaseLayoutOuterProps){

    const [ctrl,setCtrl]=useState<ConversationUiCtrl|null>(null);
    const convo=useSubject(ctrl?.convoSubject);
    const flat=useSubject(convo?.flatSubject);

    useEffect(()=>{
        if(flat && onStateChange){
            onStateChange({...flat.vars});
        }
    },[flat,onStateChange]);

    useEffect(()=>{
        if(ctrl && getCtrl){
            getCtrl(ctrl);
        }
    },[ctrl,getCtrl]);

    return (
        <NextJsBaseLayoutView flex1 col>
            <ConversationView
                theme={theme}
                getCtrl={setCtrl}
                showInputWithSource={showInputWithSource}
                enabledSlashCommands={enabledSlashCommands}
                componentRenderers={includeComponents?convoCompReg:undefined}
                template={globalThis.window/*only render convo client side*/?(
                    (includeTypes?convoTypes+'\n':'')+
                    (includeComponents?convoComps+'\n':'')+
                    template
                ):undefined}
                httpEndpoint={httpEndpoint}
                inputProps={{
                    unstyled:true,
                    className:'convo-inputContainer',
                    inputClassName:'convo-input',
                }}
                {...props}
            />
        </NextJsBaseLayoutView>
    )

}
