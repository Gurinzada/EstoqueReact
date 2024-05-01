import { useEffect, useState } from "react"
import { runningOutItens, diversity, isRecent, outItens} from "../Functions/HomeFunctions"
import { Link } from "react-router-dom"
import "../styles/Home.css"

function Home(){
    const [myInfos, setMyInfos] = useState([])

    const getInfos = async () => {
        const response = await fetch(`http://localhost:3000/storage`)
        const data = response.json()
        return data
    }

    useEffect(() => {
        getInfos().then((res) => setMyInfos(() => res))
    },[])

    const recentItemsCount = myInfos.filter((item) => isRecent(item.DataAtual)).length
    const diversityCount = diversity(myInfos)
    const runningOut = runningOutItens(myInfos)
    const recentItems = myInfos.filter((item) => isRecent(item.DataAtual));
    const check = outItens(myInfos)

    return(
        <>
            <div className="Title"><h1>Dashboard</h1></div>
            <div className="ContainerForItens">
                <div className="Content">
                    <div className="ContainerP">
                        <p>Diversidade de itens</p>
                    </div>
                    <span className="Value" id="Divesity">{diversityCount}</span>
                </div>
                <div className="Content">
                    <div className="ContainerP">
                        <p>Inventário total</p>
                    </div>
                    <span className="Value" id="Total">{myInfos.length}</span>
                </div>
                <div className="Content">
                    <div className="ContainerP">
                        <p>Itens recentes</p>
                    </div>
                    <span className="Value" id="RecentItens">{recentItemsCount}</span>
                </div>
                <div className="Content">
                    <div className="ContainerP">
                        <p>Itens acabando</p>
                    </div>
                    <span className="Value" id="runningOutItens">{runningOut}</span>
                </div>
            </div>
            <div className="ContainerForActions">
                <div>
                    <div className="TitleRecent">
                        <h5>Itens Recentes</h5>
                        <h5>Ações</h5>
                    </div>
                        {recentItems.length > 0 ? recentItems.map((item) => (
                        <div className="TitleRecentItens">
                            <div>
                                {item.Nome}
                            </div>
                            <div>
                                <Link to={`/itens/${item.id}`}><button>Ver</button></Link>
                            </div>
                        </div>
                    )): null}
                    </div>
                

                <div>
                    <div className="TitlesOverItens">
                        <h5>Itens Acabando</h5>
                        <h5>Qtd.</h5>
                        <h5>Ações</h5>
                    </div>
                    {check.length > 0 ? check.map((item) => (
                    <div className="OverItens">
                        <div>
                            <p>{item.Nome}</p>
                        </div>
                        <div>
                            <p>{item.Quantidade}</p>
                        </div>
                        <div>
                            <Link to={`/itens/${item.id}`}><button>Ver</button></Link>
                        </div>
                    </div>
                    )):null}
                </div>
            </div>
        </>
    )
}


export default Home