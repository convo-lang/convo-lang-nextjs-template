import { ConversationUiCtrl } from "@convo-lang/convo-lang";
import { Button } from "./Button";
import { MessageContainer } from "./MessageContainer";

export interface SuggestionMsgProps
{
    /**
     * Full message from user
     */
    message:string;
    suggestions:string[];

    ctrl?:ConversationUiCtrl;
}

/**
 * Displays a set of suggestions
 * @convoComponent Generate props for the comp
 */
export function SuggestionMsg({
    message,
    suggestions,
    ctrl
}:SuggestionMsgProps){

    return (
        <>

            <MessageContainer>{message}</MessageContainer>

            <MessageContainer unstyled className="flex flex-row gap-4 flex-wrap">
                {suggestions.map(s=><Button key={s} onClick={()=>{
                    ctrl?.appendUiMessageAsync(`Add "${s}" to the list`);
                }}>{s}</Button>)}
            </MessageContainer>

        </>
    )

}
