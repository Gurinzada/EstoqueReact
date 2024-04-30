import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home"
import Itens from "./pages/Itens";
import NewItem from "./pages/NewItem";
import Item from "./pages/Item";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[{
            index: true,
            element: <Home />
        },{
            element: <Itens />,
            path: "itens"
        },{
            element: <Item/>,
            path:"itens/:ItemID"
        },{
            path: "newItem",
            element: <NewItem/>
        }]
    }
])


export default router