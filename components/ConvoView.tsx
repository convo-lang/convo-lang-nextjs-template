import { ConvoPackagePath } from "@/convo-generated/convoPackage";
import { convoPackageComponentModules } from "@/convo-generated/convoPackageComponentModules";
import { convoPackageModules } from "@/convo-generated/convoPackageModules";
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

export interface ConvoViewProps extends Omit<ConversationViewProps,'imports'>
{
    includeTypes?:boolean;
    includeComponents?:boolean;
    imports?:ConvoPackagePath|ConvoPackagePath[];
}

export function ConvoView({
    theme=defaultTheme,
    showInputWithSource=true,
    enabledSlashCommands=true,
    httpEndpoint="/api/convo-lang",
    template,
    inputProps,
    ...props
}:ConvoViewProps & BaseLayoutOuterProps){

    return (
        <NextJsBaseLayoutView flex1 col>
            <ConversationView
                theme={theme}
                showInputWithSource={showInputWithSource}
                enabledSlashCommands={enabledSlashCommands}
                modules={[...convoPackageModules,...convoPackageComponentModules]}
                enabledInitMessage
                enableMarkdown
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
