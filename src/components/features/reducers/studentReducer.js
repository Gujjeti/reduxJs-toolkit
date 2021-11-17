import { createReducer } from "@reduxjs/toolkit";
import {fetchAllData, addStudent} from '../actions/studentActions'

const intialState = {
students: [],
  student: {
    title: "",
    body: "",
 
  },
  loading: false,
  error: null,
}

 const studentRedcuer = createReducer(intialState, (builder) =>{
      builder.addCase(fetchAllData.pending, (state, action) =>{
         state.loading = true
     })
     .addCase(fetchAllData.fulfilled, (state, action) =>{
         state.students = action.payload;
          state.loading = false
     })
    .addCase(fetchAllData.rejected, (state, action) => {
        console.log(action.payload)
      state.error = action.payload;
      state.loading = false;

     })
     .addCase(addStudent.pending, (state) =>{
        state.loading = true;
         
     })
    .addCase(addStudent.fulfilled, (state, action) =>{
         state.students = [action.payload, ...state.students]
          state.loading = false;
     })

})

export default studentRedcuer