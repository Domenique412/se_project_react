const baseUrl = "http://localhost:3001";
const headers = {
    "Content-Type": "application/json",
};

const getAuthHeaders = (token) => ({
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
});

const handleServerResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

export const getItems = () => {
    return fetch(`${baseUrl}/items`, { headers })
        .then(handleServerResponse);
};

export const addItem = ({ name, link, weather }, token) => {
    return fetch(`${baseUrl}/items`, {
        method: "POST",
        headers: getAuthHeaders(token),
        body: JSON.stringify({ name, link, weather }),
    }).then(handleServerResponse);

}

export const removeItem = (itemID, token) => {
    return fetch(`${baseUrl}/items/${itemID}`, {
        method: "DELETE",
        headers: getAuthHeaders(token),
    }).then(handleServerResponse);
}