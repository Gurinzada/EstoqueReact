import { useEffect, useState } from "react"
import { runningOutItens, diversity, isRecent } from "../Functions/HomeFunctions"
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
                    <div className="TitleTables">
                        <h5>Itens Recentes</h5>
                        <h5>Ações</h5>
                    </div>
                    <div id="LastItens"></div>
                </div>

                <div>
                    <div className="TitleTables">
                        <h5>Itens Acabando</h5>
                        <h5>Qtd.</h5>
                        <h5>Ações</h5>
                    </div>
                    <div id="OffItens"></div>
                </div>
            </div>
        </>
    )
}


export default Home