import style from './Button.module.css'

const Button = ({type, text, classes, removeTodo, completeTodo, sorted, id}) =>{

    const final_classes = (classes.split(' ').map((classe) => style[classe])).join(' ');

    return (
        <button 
            type={type ? type : 'button'} 

            onClick={ ()=> { 
                removeTodo ? removeTodo(id) : null;

                completeTodo ? completeTodo(id) : null; 

                sorted ? sorted(text) : null;
            } }

            className={ `${final_classes} ${style.button}` }>
                
                {text}
        </button>
    )
}

export default Button