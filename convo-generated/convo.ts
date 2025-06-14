export const convoTypes=/*convo*/`
> define

TodoItem=struct(
    # Unique Id of the item
    id:string
    # What to do
    todo:string
    # The date and time in ISO format the item is due or scheduled. Leave undefined if no date is specified.
    date?:string
    complete?:boolean
)

SuggestionMsgProps=struct(
    # Full message from user
    message:string
    suggestions:array(string)
)

WeatherMsgProps=struct(
    # Original user message
    message:string
    condition:enum("raining" "sunny" "cloudy" "cold" "snowing" "storming" "other")
    location:string
    # Temperature in Fahrenheit
    temperature:number
)

YouTubeVideoMsgProps=struct(
    # Original user message.
    message:string
    # Id of video to play
    videoId:string
)

`;
