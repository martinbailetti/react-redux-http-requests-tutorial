import API from "./api";

export const getUserById = (userId) => API.get(`users/${userId}`);
export const getCurrentUser = () => API.get(`users`);

// export const getToursByUser = (userId) => API.get(`/tour/userTours/${userId}`);