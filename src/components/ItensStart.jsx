import { Link } from "react-router-dom"

export default function ItensStart(){
    return(
        <>
        <div className="Title"><h1>Stock Itens</h1></div>

        <div className="Divider">
            <nav className="Opcs">
                <Link to="/itens">Todos os itens</Link>
                <Link to="/newItem">Novo Item</Link>
            </nav>
        </div>
        </>
    )
}