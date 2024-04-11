import { getSessionData } from "./actions";

export async function getUser() {
    const sessionData = await getSessionData();
    if (sessionData) {
        const { sessionUserId, sessionToken } = sessionData;

        return await fetch(`http://localhost:3000/users/${sessionUserId}`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${sessionToken}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log(response);
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    } else {
        return false;
    }
}