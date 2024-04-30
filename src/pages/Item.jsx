import { Link, useParams } from "react-router-dom"
import ItensStart from "../components/ItensStart"
import { useEffect, useState } from "react"

export default function Item(){

    const [myAnswer, setMyAnswer] = useState([])
    const {ItemID} = useParams()

    const getInfos = async () => {
        const response = await fetch(`http://localhost:3000/storage/${ItemID}`)
        const data = await response.json()
        return data
    }

    useEffect(() => {
        getInfos().then((res) => setMyAnswer(() => [res] ))
    },[])


    return(
        <>
        <ItensStart/>
        {myAnswer.length > 0 ? myAnswer.map((item) => (
            <>
            <div>
                <h3>{item.Nome}</h3>
                <Link><button>Atualizar</button></Link>
                <button onClick={async () => {
                    await fetch(`http://localhost:3000/storage/${ItemID}`,{
                        method: "DELETE"
                    })
                    setMyAnswer([])
                }}>Remover</button>
            </div>
            <div>
                <div>Categoria: {item.Categoria}</div>
                <div>Quantidade em estoque: {item.Quantidade}</div>
                <div>Preço: {item.Preco}</div>
            </div>
            <div>
                <p>{item.Descricao}</p>
            </div>
            <div>
                <span>Cadastrado em: {item.DataAtual}</span>
                <span>Atualizado em: {item.Att}</span>
            </div>
            </>
        )):<h1>Item não achado!</h1>}
        </>
    )
}