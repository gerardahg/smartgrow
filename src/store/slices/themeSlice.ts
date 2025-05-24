import { createSlice } from '@reduxjs/toolkit';

interface Theme {
  mode: 'light' | 'dark';
  theme: number;
  border: number;
}

const initialState: Theme = {
  mode: 'light',
  theme: 1,
  border: 12,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchMode: (state) => {
      state.mode = state.mode == 'light' ? 'dark' : 'light';
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setBorder: (state, action) => {
      state.border = action.payload;
    },
  },
});
export const { switchMode, setMode, setTheme, setBorder } = themeSlice.actions;
export default themeSlice.reducer;
