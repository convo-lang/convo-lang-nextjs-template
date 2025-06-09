import { convoComps, convoTypes } from "@/convo-generated/convo";
import { convoCompReg } from "@/convo-generated/convo-comp-reg";
import { ConvoComponentRenderer } from "@convo-lang/convo-lang";
import { ConversationView, ConversationViewProps, ConvoLangTheme, defaultDarkConvoLangTheme } from "@convo-lang/convo-lang-react";
import { BaseLayoutOuterProps, asArray } from "@iyio/common";
import { NextJsBaseLayoutView } from "@iyio/nextjs-common";
import { useMemo } from "react";

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
    includeTypes?:boolean;
    includeComponents?:boolean|(keyof typeof convoCompReg)|(keyof typeof convoCompReg)[];
}

export function ConvoView({
    theme=defaultTheme,
    showInputWithSource=true,
    enabledSlashCommands=true,
    httpEndpoint="/api/convo-lang",
    template,
    inputProps,
    includeComponents,
    includeTypes=includeComponents?true:false,
    ...props
}:ConvoViewProps & BaseLayoutOuterProps){

    const reg=useMemo(()=>{
        if(!includeComponents){
            return undefined;
        }
        if(typeof includeComponents === 'boolean'){
            return convoCompReg;
        }
        const reg:Record<string,ConvoComponentRenderer>={};
        const ary=asArray(includeComponents);
        for(const name of ary){
            const c=convoCompReg[name];
            if(c){
                reg[name]=c;
            }
        }
        return reg;
    },[includeComponents])

    return (
        <NextJsBaseLayoutView flex1 col>
            <ConversationView
                theme={theme}
                showInputWithSource={showInputWithSource}
                enabledSlashCommands={enabledSlashCommands}
                componentRenderers={reg}
                enableMarkdown
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
