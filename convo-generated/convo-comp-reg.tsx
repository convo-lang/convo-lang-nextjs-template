import { ConvoComponentRenderer } from "@convo-lang/convo-lang";
import { SuggestionMsg } from '../components/SuggestionMsg';
import { WeatherMsg } from '../components/WeatherMsg';
import { YouTubeVideoMsg } from '../components/YouTubeVideoMsg';

// Components are generated using the convo-lang CLI which looks for components marked with the @convoComponent JSDoc tag

export const convoCompReg:Record<string,ConvoComponentRenderer>={
    SuggestionMsg:(comp,ctx)=><SuggestionMsg {...({comp,ctx,ctrl:ctx.ctrl,convo:ctx.ctrl.convo,...comp.atts} as any)} />,
    WeatherMsg:(comp,ctx)=><WeatherMsg {...({comp,ctx,ctrl:ctx.ctrl,convo:ctx.ctrl.convo,...comp.atts} as any)} />,
    YouTubeVideoMsg:(comp,ctx)=><YouTubeVideoMsg {...({comp,ctx,ctrl:ctx.ctrl,convo:ctx.ctrl.convo,...comp.atts} as any)} />,
}
