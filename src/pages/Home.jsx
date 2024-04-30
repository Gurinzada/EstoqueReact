import "../styles/Home.css"

function Home(){
    return(
        <>
            <div className="Title"><h1>Dashboard</h1></div>

            <div className="ContainerForItens">
                <div className="Content">
                    <div className="ContainerP">
                        <p>Diversidade de itens</p>
                    </div>
                    <span className="Value" id="Divesity">0</span>
                </div>

                <div className="Content">
                    <div className="ContainerP">
                        <p>Inventário total</p>
                    </div>
                    <span className="Value" id="Total">0</span>
                </div>

                <div className="Content">
                    <div className="ContainerP">
                        <p>Itens recentes</p>
                    </div>
                    <span className="Value" id="RecentItens">0</span>
                </div>

                <div className="Content">
                    <div className="ContainerP">
                        <p>Itens acabando</p>
                    </div>
                    <span className="Value" id="runningOutItens">0</span>
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