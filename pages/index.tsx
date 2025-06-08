import { ConvoView } from "@/components/ConvoView";
import { TodoItem } from "@/lib/types";
import { useState } from "react";



export default function IndexPage()
{

    const [todoList,setTodoList]=useState<TodoItem[]>([]);

    return (
        <div className="w-full h-[100vh] flex flex-col p-4 gap-4 text-white">

            <div className="flex flex-row justify-between">
                <div>
                    <a className="!underline" href="https://learn.convo-lang.ai" target="_blank">Learn Convo-Lang</a>
                </div>
                <div>
                    <p className="opacity-50">Try typing "/source"</p>
                </div>
            </div>

            <div className="flex flex-row flex-1 gap-4">
                <div className="flex-1 border border-zinc-700 rounded-md p-4 gap-2 flex flex-col">
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
                </div>

                <ConvoView
                    className="flex-1 border border-zinc-700 rounded-md"
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
                    defaultVars={{todoList}}
                    includeComponents
                    includeTypes
                    template={/*convo*/`

> system
You are helping a user create a todo list. After adding an item to the list suggest a related
item to add to the list.

Current todo List
<todo-list>
{{todoList}}
</todo-list>

Todays date and time is: {{dateTime()}}

If the user ask to watch a video tell them: "Here is a cool YouTube video you will like"


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

@suggestionTitle Todo suggestions
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
                />
            </div>
        </div>
    )
}