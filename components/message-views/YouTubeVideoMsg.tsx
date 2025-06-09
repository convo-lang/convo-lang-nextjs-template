import { MessageContainer } from "../MessageContainer";

export interface YouTubeVideoMsgProps
{
    /**
     * Original user message.
     */
    message:string;

    /**
     * Id of video to play
     */
    videoId:string;
}

/**
 * Shows a cool mystery youtube video
 * @convoComponent
 */
export function YouTubeVideoMsg({
    message,
    videoId
}:YouTubeVideoMsgProps){

    return (
        <>
            <MessageContainer>
                {message}
            </MessageContainer>

            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Cool video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{border:'none'}}
                allowFullScreen>
            </iframe>
        </>
    )

}