import { cn } from "@iyio/common";

export interface ButtonProps
{
    className?:string;
    children?:any;
    onClick?:()=>void;
    secondary?:boolean;
}

export function Button({
    className,
    children,
    onClick,
    secondary,
}:ButtonProps){

    return (
        <button className={cn(
            className,
            'border rounded-sm p-2 text-center cursor-pointer',
            secondary?
                'border-[#ffffff] text-white':
                'border-[#ffffff15] text-black bg-white'
        )} onClick={()=>onClick?.()}>
            {children}
        </button>
    )

}