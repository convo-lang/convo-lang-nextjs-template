import { ConvoComponent, ConvoComponentRendererContext, ConvoModule } from "@convo-lang/convo-lang";
import { SuggestionMsg } from '../components/message-views/SuggestionMsg';
import { WeatherMsg } from '../components/message-views/WeatherMsg';
import { YouTubeVideoMsg } from '../components/message-views/YouTubeVideoMsg';
import { z } from "zod";

export const convoPackageComponentModules:ConvoModule[]=[
    {
        name:"@/components/message-views/SuggestionMsg.tsx",
        components:{
            SuggestionMsg:{
                name:"SuggestionMsg",
                propsScheme:z.object({
                    message:z.string().describe("Full message from user"),
                    suggestions:z.string().array(),
                }),
                renderer:(comp:ConvoComponent,ctx:ConvoComponentRendererContext)=><SuggestionMsg {...({comp,ctx,ctrl:ctx.ctrl,convo:ctx.ctrl.convo,...comp.atts} as any)} />,
            },
        },
        convo:/*convo*/`


> define

SuggestionMsgProps=struct(
    # Full message from user
    message:string
    suggestions:array(string)
)



@transformComponent SuggestionMsg SuggestionMsgProps
@transformDescription Displays a set of suggestions
> system
Generate props for the comp
        `,
    },


    {
        name:"@/components/message-views/WeatherMsg.tsx",
        components:{
            WeatherMsg:{
                name:"WeatherMsg",
                propsScheme:z.object({
                    message:z.string().describe("Original user message"),
                    condition:z.union([z.literal("raining"),z.literal("sunny"),z.literal("cloudy"),z.literal("cold"),z.literal("snowing"),z.literal("storming"),z.literal("other")]),
                    location:z.string(),
                    temperature:z.number().describe("Temperature in Fahrenheit"),
                }),
                renderer:(comp:ConvoComponent,ctx:ConvoComponentRendererContext)=><WeatherMsg {...({comp,ctx,ctrl:ctx.ctrl,convo:ctx.ctrl.convo,...comp.atts} as any)} />,
            },
        },
        convo:/*convo*/`


> define

WeatherMsgProps=struct(
    # Original user message
    message:string
    condition:enum("raining" "sunny" "cloudy" "cold" "snowing" "storming" "other")
    location:string
    # Temperature in Fahrenheit
    temperature:number
)



@transformComponent WeatherMsg WeatherMsgProps
@transformDescription Displays the weather
> system
Generates props for a component based on the following description:
<description>Displays the weather</description>
        `,
    },


    {
        name:"@/components/message-views/YouTubeVideoMsg.tsx",
        components:{
            YouTubeVideoMsg:{
                name:"YouTubeVideoMsg",
                propsScheme:z.object({
                    message:z.string().describe("Original user message."),
                    videoId:z.string().describe("Id of video to play"),
                }),
                renderer:(comp:ConvoComponent,ctx:ConvoComponentRendererContext)=><YouTubeVideoMsg {...({comp,ctx,ctrl:ctx.ctrl,convo:ctx.ctrl.convo,...comp.atts} as any)} />,
            },
        },
        convo:/*convo*/`


> define

YouTubeVideoMsgProps=struct(
    # Original user message.
    message:string
    # Id of video to play
    videoId:string
)



@transformComponent YouTubeVideoMsg YouTubeVideoMsgProps
@transformDescription Shows a cool mystery youtube video
> system
Generates props for a component based on the following description:
<description>Shows a cool mystery youtube video</description>
        `,
    },


];