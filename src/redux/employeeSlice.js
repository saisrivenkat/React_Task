/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  search: "",
  allemployees: [
    {
      name: "sri sai",
      designation: "PA",
      department: "Dev",
      DOJ: "12-02-2001",
      address: "ndvdfbvbjvbd",
      id: "name" + "department",
    },
  ],
  openEdit: false,
  selectedInfo: {},
  user: {},
};
export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addemployee: (state, action) => {
      state.allemployees = [...state.allemployees, action.payload];
    },
    setquery: (state, action) => {
      state.search = action.payload;
    },
    setopen: (state, action) => {
      state.openEdit = !state.openEdit;
    },
    selectInfo: (state, action) => {
      state.selectedInfo = action.payload;
    },
    setuser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      delete state.user;
    },
    updateDetails: (state, action) => {
      console.log(action.payload.name);
      const new_items = state.allemployees.filter((item) => {
        if (item.id === action.payload.id) {
          console.log("hii");
          if (action.payload.name !== undefined) {
            item.name = action.payload.name;
          }
          if (action.payload.designation !== undefined) {
            item.designation = action.payload.designation;
          }
          if (action.payload.department !== undefined) {
            item.department = action.payload.department;
          }
          if (action.payload.DOJ !== undefined) {
            item.DOJ = action.payload.DOJ;
          }
          if (action.payload.address !== undefined) {
            item.address = action.payload.address;
          }
        }
        return item;
      });
      console.log(new_items);
      state.allemployees = new_items;
    },
  },
});

export const {
  addemployee,
  setquery,
  setopen,
  selectInfo,
  setuser,
  removeUser,
  updateDetails,
} = employeeSlice.actions;

export default employeeSlice.reducer;
