export interface TodoItemConvoBinding{
    /**
     * Unique Id of the item
     */
    id:string;
    /**
     * What to do
     */
    todo:string;
    /**
     * The date and time in ISO format the item is due or scheduled. Leave undefined if no date is specified.
     */
    date?:string;
    complete?:boolean;
}

export interface SuggestionMsgPropsConvoBinding{
    /**
     * Full message from user
     */
    message:string;
    suggestions:(string)[];
}

export interface WeatherMsgPropsConvoBinding{
    /**
     * Original user message
     */
    message:string;
    condition:"raining"|"sunny"|"cloudy"|"cold"|"snowing"|"storming"|"other";
    location:string;
    /**
     * Temperature in Fahrenheit
     */
    temperature:number;
}

export interface YouTubeVideoMsgPropsConvoBinding{
    /**
     * Original user message.
     */
    message:string;
    /**
     * Id of video to play
     */
    videoId:string;
}

