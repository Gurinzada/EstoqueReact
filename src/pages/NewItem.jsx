import { useState } from "react";
import ItensStart from "../components/ItensStart";

export default function NewItem(){
    const [itemName, setItemName] = useState('')
    const [quantity, setItemQuantity] = useState(0)
    const [price, setItemPrice] = useState(0)
    const [category, setCategoryItem] = useState("")
    const [description, setDescriptionItem] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const actualDate = new Date().toUTCString();

        const NewItem = {
            Nome: itemName,
            Quantidade: quantity,
            Preco: price,
            Categoria: category,
            Descricao: description,
            DataAtual: actualDate,
            Att: actualDate
        }

        await fetch(`http://localhost:3000/storage`, {
            method: "POST",
            body: JSON.stringify(NewItem),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        setItemName("")
        setCategoryItem("")
        setDescriptionItem("")
        setItemPrice(0)
        setItemQuantity(0)
    }


    return(
        <>
            <ItensStart/>
            <form className="AreaInputs" method="post" onSubmit={handleSubmit} id="Form">
                <div className="Content">
                    <label htmlFor="NameItem">Nome</label>
                    <input type="text" name="" id="NameItem" required value={itemName} onChange={(e) => setItemName(e.target.value)} />
                </div>
                <div className="Content">
                    <label htmlFor="QtdItem">Quantidade</label>
                    <input type="number" name="" id="QtdItem" required step="1" min="0" value={quantity} onChange={(e) => setItemQuantity(e.target.value)} />
                </div>
                <div className="Content">
                    <label htmlFor="ItemPrice">Preço</label>
                    <input type="number" name="" id="ItemPrice" required step="0.01" min="0.00" value={price} onChange={(e) => setItemPrice(e.target.value)} />
                </div>
                <div className="Content">
                    <label htmlFor="ItemCategory">Categoria</label>
                    <select required id="ItemCategory" value={category} onChange={(e) => setCategoryItem(e.target.value)}>
                        <option value="" selected disabled>Selecione uma opção</option>
                        <option value="Alimentação">Alimentação</option>
                        <option value="Eletrônico">Eletrônico</option>
                        <option value="Estudos">Estudos</option>
                        <option value="Higiêne">Higiêne</option>
                        <option value="Jogo">Jogo</option>
                    </select>
                </div>
                <div className="Content">
                    <label htmlFor="ItemDescription">Descrição</label>
                    <textarea name="" id="ItemDescription" cols="100" rows="15" value={description} onChange={(e) => setDescriptionItem(e.target.value)}></textarea>
                </div>

                <button type="submit">Salvar</button>
            </form>
        </>
    )
}