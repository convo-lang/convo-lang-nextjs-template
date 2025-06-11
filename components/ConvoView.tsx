import { convoTypes } from "@/convo-generated/convo";
import { convoCompReg } from "@/convo-generated/convo-comp-reg";
import { ConversationView, ConversationViewProps, ConvoLangTheme, defaultDarkConvoLangTheme } from "@convo-lang/convo-lang-react";
import { BaseLayoutOuterProps } from "@iyio/common";
import { NextJsBaseLayoutView } from "@iyio/nextjs-common";

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
    includeComponents?:boolean;
}

export function ConvoView({
    theme=defaultTheme,
    showInputWithSource=true,
    enabledSlashCommands=true,
    httpEndpoint="/api/convo-lang",
    template,
    inputProps,
    includeComponents,
    includeTypes=includeComponents,
    ...props
}:ConvoViewProps & BaseLayoutOuterProps){

    return (
        <NextJsBaseLayoutView flex1 col>
            <ConversationView
                theme={theme}
                showInputWithSource={showInputWithSource}
                enabledSlashCommands={enabledSlashCommands}
                componentRenderers={convoCompReg}
                enableMarkdown
                templatePrefix={includeTypes?convoTypes:undefined}
                template={globalThis.window/*only render convo client side*/?template:undefined}
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
