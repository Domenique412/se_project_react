const baseUrl = "http://localhost:3001";
const headers = {
    "Content-Type": "application/json",
};

const handleServerResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

export const getItems = () => {
    return fetch(`${baseUrl}/items`, { headers })
        .then(handleServerResponse);
};

export const addItem = ({ name, link, weather }) => {
    return fetch(`${baseUrl}/items`, {
        method: "POST",
        headers,
        body: JSON.stringify({ name, link, weather }),
    },

    ).then(handleServerResponse);

}

export const removeItem = (itemID) => {
    return fetch(`${baseUrl}/items/${itemID}`, {
        method: "DELETE",
        headers,
    }).then(handleServerResponse);
}