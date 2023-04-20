import PaginaPadrao from "components/paginaPadrao";
import Home from "pages/home";
import Categoria from "pages/categorias";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrinho from "pages/carrinho";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao/>}>
                    <Route index element={<Home/>} />
                    <Route path="/categoria/:nomeCategoria" element={<Categoria/>} />
                    <Route path="/carrinho" element={<Carrinho />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}