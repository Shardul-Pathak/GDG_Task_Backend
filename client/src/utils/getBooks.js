export default async function getBooks() {
    const response = await fetch('http://localhost:3000/books/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}