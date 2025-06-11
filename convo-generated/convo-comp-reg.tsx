import { ConvoComponentRendererContext, ConvoMessageComponent } from "@convo-lang/convo-lang";
import { SuggestionMsg } from '../components/message-views/SuggestionMsg';
import { WeatherMsg } from '../components/message-views/WeatherMsg';
import { YouTubeVideoMsg } from '../components/message-views/YouTubeVideoMsg';

// Components are generated using the convo-lang CLI which looks for components marked with the @convoComponent JSDoc tag

export const convoCompReg={
    SuggestionMsg:{
        render:(comp:ConvoMessageComponent,ctx:ConvoComponentRendererContext)=><SuggestionMsg {...({comp,ctx,ctrl:ctx.ctrl,convo:ctx.ctrl.convo,...comp.atts} as any)} />,
        convo:/*convo*/`
@transformComponent SuggestionMsg SuggestionMsgProps
@transformDescription Displays a set of suggestions
@transformOptional
> system
Generate props for the comp
`
    },
    WeatherMsg:{
        render:(comp:ConvoMessageComponent,ctx:ConvoComponentRendererContext)=><WeatherMsg {...({comp,ctx,ctrl:ctx.ctrl,convo:ctx.ctrl.convo,...comp.atts} as any)} />,
        convo:/*convo*/`
@transformComponent WeatherMsg WeatherMsgProps
@transformDescription Displays the weather
@transformOptional
> system
Generates props for a component based on the following description:
<description>Displays the weather</description>
`
    },
    YouTubeVideoMsg:{
        render:(comp:ConvoMessageComponent,ctx:ConvoComponentRendererContext)=><YouTubeVideoMsg {...({comp,ctx,ctrl:ctx.ctrl,convo:ctx.ctrl.convo,...comp.atts} as any)} />,
        convo:/*convo*/`
@transformComponent YouTubeVideoMsg YouTubeVideoMsgProps
@transformDescription Shows a cool mystery youtube video
@transformOptional
> system
Generates props for a component based on the following description:
<description>Shows a cool mystery youtube video</description>
`
    },
} as const
