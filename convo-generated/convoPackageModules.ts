import { ConvoModule } from "@convo-lang/convo-lang";
import { getCryptoTokenInfo } from '../lib/example-functions/crypto';
import { z } from "zod";

export const convoPackageModules:ConvoModule[]=[
    {
        name:"@/lib/types.ts",
        typeSchemes:{
            TodoItem:z.object({
    id:z.string().describe("Unique Id of the item"),
    todo:z.string().describe("What to do"),
    date:z.string().optional().describe("The date and time in ISO format the item is due or scheduled. Leave undefined if no date is specified."),
    complete:z.boolean().optional(),

            }),
        },
        convo:/*convo*/`


> define

TodoItem=struct(
    # Unique Id of the item
    id:string
    # What to do
    todo:string
    # The date and time in ISO format the item is due or scheduled. Leave undefined if no date is specified.
    date?:string
    complete?:boolean
)

Answer=struct(
    topic:string
    question:string
    answer:string
)


        `,
    },


    {
        name:"@/lib/example-functions/crypto.ts",
        externFunctions:{
            getCryptoTokenInfo,
        },
        functionParamSchemes:{
            getCryptoTokenInfo:[
                z.string(),
            ],
        },
        convo:/*convo*/`


> define



# Returns information about crypto coins by their symbol.
> extern getCryptoTokenInfo(
    # The symbol of the coin to get information about. For example BitCoin's symbol is BTC and Ethereum's is ETH
    symbol:string
)
        `,
    },


];