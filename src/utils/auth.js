import { handleServerResponse } from "./api";


const baseUrl = process.env.NODE_ENV === "production"
    ? "https://api.wtwrdom.mooo.com"
    : "http://localhost:3001";
const headers = { "Content-Type": "application/json" };





export const signup = ({ name, avatar, password, email }) => {
    return fetch(`${baseUrl}/signup`, {
        method: "POST",
        headers,
        body: JSON.stringify({ name, avatar, password, email }),
    }).then(handleServerResponse);
};

export const signin = ({ email, password }) => {
    return fetch(`${baseUrl}/signin`, {
        method: "POST",
        headers,
        body: JSON.stringify({ email, password })
    }).then(handleServerResponse);
};

export const checkToken = (token) => {
    return fetch(`${baseUrl}/users/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
    }).then(handleServerResponse);
}