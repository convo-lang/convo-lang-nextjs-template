import { ConvoComponentRendererContext, ConvoMessageComponent } from "@convo-lang/convo-lang";
import { SuggestionMsg } from '../components/message-views/SuggestionMsg';
import { WeatherMsg } from '../components/message-views/WeatherMsg';
import { YouTubeVideoMsg } from '../components/message-views/YouTubeVideoMsg';

// Components are generated using the convo-lang CLI which looks for components marked with the @convoComponent JSDoc tag

export const convoCompReg={
    SuggestionMsg:(comp:ConvoMessageComponent,ctx:ConvoComponentRendererContext)=><SuggestionMsg {...({comp,ctx,ctrl:ctx.ctrl,convo:ctx.ctrl.convo,...comp.atts} as any)} />,
    WeatherMsg:(comp:ConvoMessageComponent,ctx:ConvoComponentRendererContext)=><WeatherMsg {...({comp,ctx,ctrl:ctx.ctrl,convo:ctx.ctrl.convo,...comp.atts} as any)} />,
    YouTubeVideoMsg:(comp:ConvoMessageComponent,ctx:ConvoComponentRendererContext)=><YouTubeVideoMsg {...({comp,ctx,ctrl:ctx.ctrl,convo:ctx.ctrl.convo,...comp.atts} as any)} />,
} as const
