export const convoTypes=/*convo*/`
> define

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
)

TodoItem=struct(
    # Unique Id of the item
    id:string
    # What to do
    todo:string
    # The date and time in ISO format the item is due or scheduled. Leave undefined if no date is specified.
    date?:string
    complete?:boolean
)

`;

export const convoComps=/*convo*/`
@transformComponent SuggestionMsg SuggestionMsg SuggestionMsgProps
@convoDescription Displays a set of suggestions
> system
Generate props for the comp

@transformComponent WeatherMsg WeatherMsg WeatherMsgProps
@convoDescription Displays the weather
> system
Generates props for a component based on the following description:
<description>Displays the weather</description>

@transformComponent YouTubeVideoMsg YouTubeVideoMsg YouTubeVideoMsgProps
@convoDescription Shows a cool mystery youtube video
> system
Generates props for a component based on the following description:
<description>Shows a cool mystery youtube video</description>`;
