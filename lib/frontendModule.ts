import { convoHttpRelayModule } from "@convo-lang/convo-lang";
//import { convoPdfDocReaderFactory } from "@convo-lang/convo-lang-pdf";
import { ScopeRegistration, initRootScope, isServerSide } from "@iyio/common";
//import { nextJsModule } from "@iyio/nextjs-common";

let inited=false;
export const initFrontend=()=>{
    if(inited){
        return;
    }
    inited=true;
    initRootScope(frontendModule);
}

export const frontendModule=(reg:ScopeRegistration)=>{

    if(isServerSide){
        return;
    }
    reg.use(convoHttpRelayModule);

}

