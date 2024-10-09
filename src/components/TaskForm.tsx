import { PlusCircle} from "@phosphor-icons/react";
import './TaskForm.css';
import { ChangeEvent, FormEvent, useState } from "react";
import { ITask } from "../interfaces/ITask";

interface PropsForm{
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
    taskList:ITask[];
    
}

export function TaskForm(props: PropsForm){

    const [descricao, setDescricao] = useState<string>('')
    const [check] = useState<boolean>(false)



    const addTask = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if(descricao){
            const id = Math.floor(Math.random() * 1000);
            const newTask: ITask = {id, descricao, check}
    
            props.setTaskList!([...props.taskList, newTask])
        }
        else{
           alert('Nome da tarefa obrigatório')
        
        }

       setDescricao('');


    }


    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name === 'descricao'){
          setDescricao(e.target.value);
        }
        
    }



    return(
        <>
        
        <div className="form_container">
            
        <form onSubmit={addTask} >
        
            <input  type="text" placeholder="adicione uma nova tarefa" name="descricao" onChange={handleChange} value={descricao} />
            <button type="submit">Criar <PlusCircle/></button>
        </form>
        </div>

        </>

    )

}