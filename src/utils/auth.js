const baseUrl = "http://localhost:3001";
const headers = { "Content-type": "application/json" };

const handleServerResponse = (res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);

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
}