import API from "./api";

export const getAllProducts = () => API.get(`products`);
export const getProducts = (page) => API.get(`users?pag=${page}`);

export const getProduct = (id) => API.get(`user?id=${id}`);
// export const signIn = (formData) => API.post("/users/signin", formData);
// export const signUp = (formData) => API.post("/users/signup", formData);

// export const createTour = (tourData) => API.post("/tour", tourData);

// export const getToursByUser = (userId) => API.get(`/tour/userTours/${userId}`);
// export const updateTour = (updatedTourData, id) =>
//   API.patch(`/tour/${id}`, updatedTourData);
// export const deleteTour = (id) => API.delete(`/tour/${id}`);
