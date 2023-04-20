import { createSlice } from "@reduxjs/toolkit";


const estadoInicial = ''

  const buscaSlice = createSlice({
    name: 'busca',
    initialState: estadoInicial,
    reducers: {
        mudarBusca: (state, {payload}) => payload,
        resetarBusca: () => estadoInicial
    }
  });

  //exportando a ação
  export const { mudarBusca, resetarBusca } = buscaSlice.actions;

  //exportando os dados
  export default buscaSlice.reducer;