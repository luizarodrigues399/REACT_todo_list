import style from './Select.module.css'

const Select = ({selectOptions, select, setSelect, selectText, setSelectText}) =>{

    return (
            <select className={style.todo_select} onChange = {
                (event) =>{
                    setSelect(event.target.value)

                   setSelectText ?  
                    setSelectText(event.target.options[event.target.selectedIndex].text) : null
                }
            } value = {select}>
                <option key='' value='-'>Selecione um valor</option>
                {
                    selectOptions.map((option) => (
                        <option key={option.id} value={option.id}>{option.text}</option>
                    ))  
                }
            </select>
        )
}

export default Select