export async function createList(name: string, userId: string | null = null) {
    const newtList = await fetch(`${process.env.API_URL}/lists`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            ...(userId && { createdByUserId: userId }),
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        return data;
    });

    return newtList;
}

export async function getList(id: string) { 
    const list = await fetch(`${process.env.API_URL}/lists/${id}`, {
        method: 'GET',
    })
    .then((response) => response.json())
    .then((data) => {
        return data;
    });

    return list;
}