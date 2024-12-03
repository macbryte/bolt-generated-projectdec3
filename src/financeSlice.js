import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
      assets: [],
      liabilities: [],
    };

    export const financeActions = createSlice({
      name: 'finance',
      initialState,
      reducers: {
        addCategory(state, action) {
          state[action.payload.type].push(action.payload.category);
        },
        updateBalance(state, action) {
          const { type, category, subcategory, balance } = action.payload;
          const index = state[type].findIndex(c => c.name === category);
          if (index !== -1) {
            state[type][index].subcategories.find(s => s.name === subcategory).balance = balance;
          }
        },
      },
    });

    export default financeActions.reducer;
