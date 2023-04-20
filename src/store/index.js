import { configureStore } from "@reduxjs/toolkit";
import categoriasSlice from "./reducers/categorias";
import itensSlice from './reducers/itens';
import carrinhoSlice from './reducers/carrinho';
import buscaSlica from './reducers/busca'
//faz a configuração do store do redux, para chamar os dados usando useSelector e o nome do reducer que quer encontrar
const store = configureStore({
    //pequenas partes do reducer
    reducer:{
        categorias: categoriasSlice,
        itens: itensSlice,
        carrinho: carrinhoSlice,
        busca: buscaSlica
    }
})

export default store;