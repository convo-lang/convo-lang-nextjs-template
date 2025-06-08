import { cn } from "@iyio/common";

export interface MessageContainerProps
{
    children?:any;
    maxWidth?:string;
    unstyled?:boolean;
    className?:string;
    noPadding?:boolean;
}

export function MessageContainer({
    className,
    children,
    maxWidth='500px',
    unstyled,
    noPadding=unstyled,
}:MessageContainerProps){

    return (
        <div
            className={cn(
                className,
                unstyled?null:'flex flex-col bg-[#1B1E22] border border-[#ffffff15] rounded-sm',
                noPadding?null:'p-3'
            )}
            style={{maxWidth}}
        >
            {children}
        </div>
    )

}

