import { createSlice } from '@reduxjs/toolkit';

interface Credential {
  email: string;
  password: string;
  name: string;
}

const initialState: Credential = {
  email: '',
  password: '',
  name: '',
};

const credentialSlice = createSlice({
  name: 'credential',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setEmail, setPassword, setName } = credentialSlice.actions;
export default credentialSlice.reducer;
