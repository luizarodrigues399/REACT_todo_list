import style from './Input.module.css'

const Input = ({type, placeholder, setInput, value}) => {

    return (
        <input 
            type={type} 

            placeholder={placeholder} 

            className={style.input_layout} 

            value={value}
            
            onChange={
                (event) => {
                    setInput(event.target.value);
            }
        } />
    )
}

export default Input