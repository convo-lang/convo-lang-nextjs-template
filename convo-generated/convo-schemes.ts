import { z } from "zod";

export const TodoItemConvoBindingScheme=z.object({
    id:z.string().describe("Unique Id of the item"),
    todo:z.string().describe("What to do"),
    date:z.string().optional().describe("The date and time in ISO format the item is due or scheduled. Leave undefined if no date is specified."),
    complete:z.boolean().optional(),
});

export const SuggestionMsgPropsConvoBindingScheme=z.object({
    message:z.string().describe("Full message from user"),
    suggestions:z.string().array(),
});

export const WeatherMsgPropsConvoBindingScheme=z.object({
    message:z.string().describe("Original user message"),
    condition:z.union([z.literal("raining"),z.literal("sunny"),z.literal("cloudy"),z.literal("cold"),z.literal("snowing"),z.literal("storming"),z.literal("other")]),
    location:z.string(),
    temperature:z.number().describe("Temperature in Fahrenheit"),
});

export const YouTubeVideoMsgPropsConvoBindingScheme=z.object({
    message:z.string().describe("Original user message."),
    videoId:z.string().describe("Id of video to play"),
});

