import { MessageContainer } from "./MessageContainer";

export interface YouTubeVideoMsgProps
{
    /**
     * Original user message.
     */
    message:string;
}

/**
 * Shows a cool mystery youtube video
 * @convoComponent
 */
export function YouTubeVideoMsg({
    message
}:YouTubeVideoMsgProps){

    return (
        <>
            <MessageContainer>
                {message}
            </MessageContainer>

            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=FjcNlqcV5dtb20Tu&autoplay=1"
                title="Cool video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{border:'none'}}
                allowFullScreen>
            </iframe>
        </>
    )

}