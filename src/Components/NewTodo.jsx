import { useState } from 'react'
import style from './NewTodo.module.css'
import Input from './Layout/Input'
import Button from './Layout/Button'
import Select from './Layout/Select'


const NewTodo = ({selectOptions, addTodo}) => {

    const [todo, setTodo] = useState("");

    const [select, setSelect] = useState("-");
    const [selectText, setSelectText] = useState("");

    const formSubmit = (event) => {
        
        event.preventDefault()

        if (todo == "" || select == "-"){
            return;
        }
    
        addTodo(todo, selectText);

        setTodo("");

        setSelect("");
    }


    return (
        <div className={style.new_todo}>
            <h2>Criar Tarefa</h2>
            
            <form onSubmit={formSubmit} method='post'>
                <Input type='text' placeholder='Digite uma tarefa ...' setInput = {setTodo} value = {todo}/>
                
                <Select selectOptions = {selectOptions} 
                        select = {select} 
                        setSelect = {setSelect}
                        selectText = {selectText}
                        setSelectText = {setSelectText} />

                <Button type='submit' text='Criar Todo' classes='violet_button btn_big text_center'/>
            </form>
        </div>
    )
}

export default NewTodo