import API from "./api";


export const login = (formData) => API.post("login", formData);

