import { ITask } from '../interfaces/ITask'
import './TaskList.css'
import logoTaskNull from '../assets/nenhumatask.svg'
import { Trash} from "@phosphor-icons/react";

interface PropsTaskList{
    taskList:ITask[]
    deleteTask(id:number):void
    checkTask(id:number, check:boolean):void
   
}

export function TaskList(props:PropsTaskList){
    return(
        <div className="container_list">
           {
            props.taskList.length > 0?(
                <div className='container_task'>
                
                    {
                        props.taskList.map((task)=>{

                            if(!task.check){
                                return(
                                    <div key={task.id} className="wrap_tasks">
                                    <div onClick={() => (props.checkTask(task.id,true))} className='task_title_check'> <div></div><p>{task.descricao}</p></div> 
                                     <button onClick={ () =>{props.deleteTask(task.id)}}><Trash/></button>
             
                                 </div>
                                )
                            }
                            else{
                                return(
                                    <div key={task.id} className="wrap_tasks">
                                    <div onClick={() => (props.checkTask(task.id,false))} className='task_title_check'> <div className='bullet_check'></div><p className='line-title'>{task.descricao}</p></div> 
                                     <button onClick={ () =>{props.deleteTask(task.id)}}><Trash/></button>
             
                                 </div>
                                )
                            }
                           
                        })
                    }

                </div>
            ):(
                <div className="nenhuma_task">
                    <img src={logoTaskNull} alt="" />
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            )
           }
        </div>
    )
}