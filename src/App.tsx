import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";

import './App.css'
import { TaskList } from "./components/TaskList";
import { useEffect, useState } from "react";
import { ITask } from "./interfaces/ITask";


export function App(){

    const [taskList, setTaskList] = useState<ITask[]>([])
    const [qtdetasks, setQtdeTasks] = useState<number>(0);
    const [qtdetasksCheck, setQtdeTasksCheck] = useState<number>(0);


    useEffect(()=>{

        let i:number;
        let contadorCheck:number =0;
        let contador:number = 0;
        for(i = 0; i < taskList.length; i++){  
            if(taskList[i].check){
                contadorCheck++;
            }

           contador = taskList.length;
        
        }

        setQtdeTasksCheck(contadorCheck);
        setQtdeTasks(contador)
    })
  
    const deleteTask = (id: number) =>{
        setTaskList(
            taskList.filter(task =>{
                return task.id !== id
            })
        )
    }

    const checkTask = (id: number,check:boolean) =>{
        let newTasks = taskList.filter((val)=>{
            if(val.id === id){
                val.check = check
            }
            return val
        })

        setTaskList(newTasks)
    }



    return(
        <main>
            
            <Header/>

            <TaskForm setTaskList={setTaskList} taskList={taskList}/>

         
            <div className="main_container">
                <div className="header_list">
                    <p>terefas criadas <div>{qtdetasks}</div></p>
                    {
                        qtdetasksCheck == 0?(
                            <p>concluídas <div>0</div></p>
                        ):(
                            <p>concluídas <div>{qtdetasksCheck} de {qtdetasks}</div></p>
                        )
                    }
                    
               </div>
                
                <TaskList deleteTask={deleteTask} checkTask={checkTask}  taskList={taskList}/>

            </div>
            
        </main>

      
        

    )
}