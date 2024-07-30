import style from './Todos.module.css'
import Button from './Layout/Button'

const Todos = ({data, removeTodo, completeTodo}) => {

    return (
        <div className={style.todos}>
            <div className={ data.isCompleted ? style.complete : null }>
                <p>{ data.text }</p>
                
                <p className={style.small}> ({ data.category })</p>
            </div>

            <div>
                <Button text='Completar' 
                    classes='green_button'
                    completeTodo = {completeTodo} id = {data.id}/>

                <Button text='X' 
                    classes='red_button' 
                    removeTodo = {removeTodo} id = {data.id}/>
            </div>
        </div>
    )
}

export default Todos