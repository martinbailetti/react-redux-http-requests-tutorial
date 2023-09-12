import axios from "axios";

// const devEnv = process.env.NODE_ENV !== "production";

// const { REACT_APP_DEV_API, REACT_APP_PROD_API } = process.env;

// const API = axios.create({
//   baseURL: `${devEnv ? REACT_APP_DEV_API : REACT_APP_PROD_API}`,
// });

const API = axios.create({ baseURL: "http://baseapi.test/api/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }
  return req;
});

API.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 404) {
      //window.location.href = '/';
      console.log("error.response", error.response.data.error);
    }
  });

//export const getAllUsers = () => API.get(`users`);

// export const signIn = (formData) => API.post("/users/signin", formData);
// export const signUp = (formData) => API.post("/users/signup", formData);

// export const createTour = (tourData) => API.post("/tour", tourData);

// export const getToursByUser = (userId) => API.get(`/tour/userTours/${userId}`);
// export const updateTour = (updatedTourData, id) =>
//   API.patch(`/tour/${id}`, updatedTourData);
// export const deleteTour = (id) => API.delete(`/tour/${id}`);
export default API;
