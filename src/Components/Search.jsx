import Input from './Layout/Input.jsx'

const Search = ({setInputSearch}) =>{
    return (
        <div>
            <h2>Pesquisar:</h2>
            
            <Input type='text' placeholder = 'Digite a pesquisa ...' 
                setInput={setInputSearch}/>
        </div>
    )
}

export default Search