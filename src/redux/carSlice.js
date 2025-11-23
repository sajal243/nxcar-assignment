import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    city_id: '',
    make: [],
    model: [],
    year: { selected_min: 2010, selected_max: 2025, min: 2010, max: 2025 },
    price: { selected_min: 90000, selected_max: 3600000, min: 90000, max: 3600000 },
  },
  page: 1,
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setFilters, setPage } = carSlice.actions;
export default carSlice.reducer;
