import { AgentView } from "@/components/AgentView";
import { TodoItem } from "@/lib/types";
import { useState } from "react";

/**
 * This agent help the user create a todo list
 */
export default function TodoListAgent()
{

    const [todoList,setTodoList]=useState<TodoItem[]>([]);
    
    return (
        <AgentView
            name="🧐 Todo"
            includeComponents="SuggestionMsg"
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





> system
You are helping a user create a todo list. After adding an item to the list suggest a related
item to add to the list.

Current todo List
<todo-list>
{{todoList}}
</todo-list>

Todays date and time is: {{dateTime()}}

# Adds an item to the todo list
> addTodoItem(item:TodoItem) -> (
    // _addTodo is defined as an extern function and defined in TypeScript
    addToList(item)
    return("Added to users list of todo items")
)

# Clears all items from the list
> extern clearTodoList()

> extern removeTodoItem(id:string)

> assistant
Do you have anything you would like to add to your todo list?

@suggestionTitle Todo suggestions
@suggestion
> assistant
Pick up dog food

@suggestion
> assistant
Order new keyboard

@suggestion
> assistant
Pick up kids from boot camp





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