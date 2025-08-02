import { ConvoView, ConvoViewProps } from "./ConvoView";
import { SplitLayout } from "./SplitLayout";

export interface AgentViewProps extends ConvoViewProps
{
    name:string;
    children?:any;
}

export function AgentView({
    name,
    children,
    ...props
}:AgentViewProps){

    return (
        <SplitLayout name={name} right={
            <ConvoView className="flex-1 border border-zinc-700 rounded-md" {...props}/>
        }>
            {children}
        </SplitLayout>
    )

}