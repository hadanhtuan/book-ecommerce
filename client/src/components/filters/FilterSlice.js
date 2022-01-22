import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { searchFilterChange } = FilterSlice.actions;
export default FilterSlice;
