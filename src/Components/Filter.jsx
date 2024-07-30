import { useState } from 'react'
import style from './Filter.module.css'
import Select from './Layout/Select'
import Button from './Layout/Button'

const Filter = ({selectFilter, setSelectFilter, setOrderBy}) =>{
    
    const selectOptions = [{
        id: 'todos',
        text: 'Todos'
    },
    {
        id: 'completo', 
        text: 'Completas'
    }, 
    {
        id: 'incompleto',
        text: "Incompletas"
    }];


    return (
        <div>
            <h2>Filtrar</h2>

            <div className={style.filters}>
                <div>
                    <p>Status:</p>

                    <Select 
                        selectOptions={selectOptions} 
                        select={selectFilter} 
                        setSelect={setSelectFilter}/>
                </div>

                <div>
                    <p>Ordem Alfabetica:</p>

                    <Button type='button' text='ASC' 
                            classes="violet_button" 
                            setOrderBy={setOrderBy}   />

                    <Button type='button' text='DESC' 
                        classes="violet_button" 
                        setOrderBy={setOrderBy}  />
                </div>
            </div>

        </div>
    )
}

export default Filter