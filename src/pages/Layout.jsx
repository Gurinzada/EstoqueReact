import { Outlet, Link } from "react-router-dom";
import "../styles/Layout.css"

export default function Layout(){
    return(
        <div className="Layout">
            <header className="ContainerHeader">
                <h3>React Stock</h3>
                <nav>
                    <Link to="/"><li>Início</li></Link>
                    <Link to="/itens"><li>Itens</li></Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>

            <footer>Feito com React and React-Router</footer>
        </div>
        
    )
}