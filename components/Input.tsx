import { cn } from "@iyio/common";

export interface InputProps
{
    value?:string;
    onChange?:(value:string)=>void;
    placeholder?:string;
    className?:string;
}

export function Input({
    value,
    onChange,
    placeholder,
    className,
}:InputProps){

    return (
        <input
            className={cn('border border-zinc-700 rounded-md p-2',className)}
            value={value??''}
            onChange={e=>onChange?.(e.target.value)}
            placeholder={placeholder}
        />
    )

}