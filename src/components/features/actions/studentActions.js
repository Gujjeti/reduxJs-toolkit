import {createAsyncThunk,  } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllData = createAsyncThunk(
  "students/fetchAllData",
  async (students, thunkApi) => {
 
    try {
      if (thunkApi.getState().students.students.length > 0) {
        return thunkApi.getState().students.students;
      }
     const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return result.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);


export const addStudent = createAsyncThunk(
  "students/addStudent",
  async (student) => {
const result = await axios.post('https://jsonplaceholder.typicode.com/posts', student);
      return result.data;

  }
);



