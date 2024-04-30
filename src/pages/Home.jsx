import { useEffect, useState } from "react"
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

    const diversity = () => {
        let numbo = 0
        const foundNames = []
        myInfos.forEach((dif) => {
            if (!foundNames.includes(dif.Nome)) {
                foundNames.push(dif.Nome)
                numbo++
            }
        })
        return numbo
    }

    const runningOutItens = () => {
        let numbo = 0
        myInfos.forEach((item) => {
            if(item.Quantidade <= 10 ){
                numbo++
            }
        })
        return numbo
    }

    const isRecent = (itemDate) => {
        const currentDate = new Date()
        const itemDateObj = new Date(itemDate)
        const differenceInMs = currentDate - itemDateObj
        const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24)
        return differenceInDays <= 30
    }

    const recentItemsCount = myInfos.filter((item) => isRecent(item.DataAtual)).length
    

    return(
        <>
            <div className="Title"><h1>Dashboard</h1></div>

            <div className="ContainerForItens">
                <div className="Content">
                    <div className="ContainerP">
                        <p>Diversidade de itens</p>
                    </div>
                    <span className="Value" id="Divesity">{diversity()}</span>
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
                    <span className="Value" id="runningOutItens">{runningOutItens()}</span>
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