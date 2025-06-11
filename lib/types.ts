/**
 * @convoType
 */
export interface TodoItem
{
    /**
     * Unique Id of the item
     */
    id:string;

    /**
     * What to do
     */
    todo:string;

    /**
     * The date and time in ISO format the item is due or scheduled. Leave undefined if no date is specified.
     */
    date?:string;

    complete?:boolean;
}