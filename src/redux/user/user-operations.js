import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("user/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const logIn = createAsyncThunk("user/login", async (credentials) => {
  try {
    //  const response = .....
    //return response.data
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const logOut = createAsyncThunk("/users/logout", async () => {
  try {
    const { data } = await axios.post("/users/logout");
    token.unset();
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const fetchCurrentUser = createAsyncThunk(
  "user/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (persistedToken === null) {
      console.log("Токена нет, уходим из fetchCurrentUser");
      return thunkAPI.rejectWithValue();
    }
    //сетим токен, чтоб был заголовок авторизации
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      console.log("data: ", data);
      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  }
);

const operations = { register, logIn, logOut, fetchCurrentUser };

export default operations;
