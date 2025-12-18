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

export const addItem = ({ name, imageUrl, weather }, token) => {
    return fetch(`${baseUrl}/items`, {
        method: "POST",
        headers: getAuthHeaders(token),
        body: JSON.stringify({ name, imageUrl, weather }),
    }).then(handleServerResponse);

}

export const removeItem = (itemID, token) => {
    return fetch(`${baseUrl}/items/${itemID}`, {
        method: "DELETE",
        headers: getAuthHeaders(token),
    }).then(handleServerResponse);
}

export const updateUserProfile = ({ name, avatar }, token) => {
    return fetch(`${baseUrl}/users/me`, {
        method: "PATCH",
        headers: getAuthHeaders(token),
        body: JSON.stringify({ name, avatar }),
    }).then(handleServerResponse);
}

export const addCardLike = (itemId, token) => {
    return fetch(`${baseUrl}/items/${itemId}/likes`, {
        method: "PUT",
        headers: getAuthHeaders(token),
    }).then(handleServerResponse);
}

export const removeCardLike = (itemId, token) => {
    return fetch(`${baseUrl}/items/${itemId}/likes`, {
        method: "DELETE",
        headers: getAuthHeaders(token),
    }).then(handleServerResponse);
}