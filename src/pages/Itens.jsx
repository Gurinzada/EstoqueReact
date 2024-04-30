import "../styles/Itens.css"
import ItensStart from "../components/ItensStart"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const getMyItens = async () => {
    const response = await fetch('http://localhost:3000/storage')
    const data = await response.json()
    return data
}


export default function Itens(){

    const [loadMyItens, setItens] = useState([])

   

    useEffect(() => {
        getMyItens().then(res => {
            setItens(res)
        })
    },[])

    return(
        <>
           <ItensStart/>
                <div className="InfosOpc">
                    <span>ID</span>
                    <span>Nome</span>
                    <span>Em estoque</span>
                    <span>Categoria</span>
                    <span>Ações</span>
                </div>
                {loadMyItens.length > 0 ? loadMyItens.map((item) => (
                    <div className="Infos" key={item.id}>
                        <span id="ID">{item.id}</span>
                        <span id="NameItem">{item.Nome}</span>
                        <span id="Storage">{item.Quantidade}</span>
                        <span id="Categoria">{item.Categoria}</span>
                        <div className="Actions">
                            <Link to={`/itens/${item.id}`}><button className="Bnt blue">Ver</button></Link>
                            <button className="Bnt white">Atualizar</button>
                            <button className="Bnt red" onClick={async () => {
                    await fetch(`http://localhost:3000/storage/${item.id}`,{
                        method: "DELETE"
                    })
                    setItens(prevItens => prevItens.filter((prevItem) => prevItem.id !== item.id ))
                    
                }}>Excluir</button>
                        </div>
                    </div>
                )): null}
        </>
    )
}