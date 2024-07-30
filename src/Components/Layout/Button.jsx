import style from './Button.module.css'

const Button = ({type, text, classes, removeTodo, completeTodo, setOrderBy, id}) =>{

    const final_classes = (classes.split(' ').map((classe) => style[classe])).join(' ');

    return (
        <button 
            type={type ? type : 'button'} 

            onClick={ ()=> { 
                removeTodo ? removeTodo(id) : null;

                completeTodo ? completeTodo(id) : null; 

                setOrderBy ? setOrderBy(text) : null;
            } }

            className={ `${final_classes} ${style.button}` }>
                
                {text}
        </button>
    )
}

export default Button