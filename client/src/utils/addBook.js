export default async function addBook(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const title = formdata.get('title');
    const author = formdata.get('author');
    const genre = formdata.get('genre');
    const cover = formdata.get('cover');
    const book = { title, author, genre, cover };
    try {
        const response = await fetch('http://localhost:3000/books/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        });
        if (response.ok) {
            const result = await response.json();
            console.log('Book added successfully:', result);
            window.location.href = '/books';
        }
    } 
    catch (error) {
        console.error('Error adding book:', error);
    }
}

