import { AgentView } from "@/components/AgentView";
import { TodoItem } from "@/lib/types";
import { useState } from "react";

/**
 * This agent is a combination of all the other agents combined in a single convo script and enables
 * all tagged components
 */
export default function ComboAgent()
{

    const [todoList,setTodoList]=useState<TodoItem[]>([]);
    
    return (
        <AgentView
            name="🤷 All the Things"
            includeComponents
            externFunctions={{
                addToList:(item:TodoItem)=>{
                    setTodoList([...todoList,item]);
                },
                clearTodoList:()=>{
                    setTodoList([]);
                },
                removeTodoItem:(id:string)=>{
                    setTodoList(todoList.filter(i=>i.id!==id))
                }
            }}
            template={/*convo*/`


@import @/*

> system
You are helping a user create a todo list. After adding an item to the list suggest a related
item to add to the list.

Current todo List
<todo-list>
{{todoList}}
</todo-list>

Todays date and time is: {{dateTime()}}

If ask to play a video pick one from the following list. If there is no video with a matching type
play the Rick Roll video and tell the user this is all you got and they better like it.

<video-list>

## Rick Roll
type: cool
id: dQw4w9WgXcQ

## Bob Ross
type: educational
id: mT0RNrTDHkI

## Dumb and Dumber
type: funny
id: nFTRwD85AQ4

## About Convo-Lang
type: coding
id: wY5UJyTtysw

</video-list>


# Adds an item to the todo list
> addTodoItem(item:TodoItem) -> (
    // _addTodo is defined as an extern function and defined in TypeScript
    addToList(item)
    return("Added to users list of todo items")
)

# Clears all items from the list
> extern clearTodoList()

> extern removeTodoItem(id:string)

# Checks the weather for the user based on location
> checkWeather(location:string) -> (
    weather=httpGet('https://6tnpcnzjbtwa5z4qorusxrfaqu0sqqhs.lambda-url.us-east-1.on.aws/?location={{
        encodeURIComponent(location)
    }}')

    return(weather)
)

> assistant
Do you have anything you would like to add to your todo list?

@suggestionTitle Suggestions
@suggestion
> assistant
Add "Pick up dog food" to my list

@suggestion
> assistant
Add "Order new keyboard" to my list

@suggestion
> assistant
Whats the weather like in Paris

@suggestion
> assistant
Show me a cool video





            `}
        >

            <h1 className="text-xl">Todo List</h1>
                    
            {!todoList.length?
                <p className="opacity-50">Todo list is empty</p>
            :
                todoList.map(item=>(
                    <div key={item.id} className="border border-zinc-700 p-2 flex flex-row justify-between">
                        <span>{item.todo}</span>
                        {!!item.date && <span className="opacity-50">{item.date}</span>}
                    </div>
                ))
            }
        
        </AgentView>
    )
}