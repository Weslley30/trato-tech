import { createSlice } from "@reduxjs/toolkit";


const estadoInicial = []

  const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState: estadoInicial,
    reducers: {
        mudarCarrinho: (state, {payload}) => {
            const temItem = state.some(item => item.id === payload);
            if(!temItem) return [
                ...state,
                {
                    id: payload,
                    quantidade: 1
                }
            ];
            return state.filter(item => item.id !== payload)
        },
        mudarQuantidade: (state, { payload }) => {
            state = state.map(itemnoCarrinho => {
                if(itemnoCarrinho.id === payload.id){
                    itemnoCarrinho.quantidade += payload.quantidade;
                }
                return itemnoCarrinho;
            })
        },
        resetarCarrinho: () => estadoInicial,
    }
  });

  //exportando a ação
  export const { mudarCarrinho, mudarQuantidade, resetarCarrinho } = carrinhoSlice.actions;

  //exportando os dados
  export default carrinhoSlice.reducer;