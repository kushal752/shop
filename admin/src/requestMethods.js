import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2FkMDBhYjg1NDE4MDgxMGUzYjc2NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzcwNzE4NywiZXhwIjoxNjU3OTY2Mzg3fQ.QketRE50A5B4OyQWPnrnXTv9u2v2Q27KyC21HEH4EeI"
// const TOKEN = (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser).accessToken;
const BASE_URL = "https://shop-backend-123.herokuapp.com/api/"
// const BASE_URL = ""
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});