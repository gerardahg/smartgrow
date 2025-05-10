import { createSlice } from '@reduxjs/toolkit';

interface Device {
  name: string;
  reference: string;
}

const initialState: Device = {
  name: '',
  reference: '',
};

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setReference: (state, action) => {
      state.reference = action.payload;
    },
  },
});

export const { setName, setReference } = deviceSlice.actions;
export default deviceSlice.reducer;
