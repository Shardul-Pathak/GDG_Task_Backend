export default async function deleteBook(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const title = formdata.get('title');
    try {
        const response = await fetch('http://localhost:3000/books/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title }),
        });
        if (response.ok) {
            const result = await response.json();
            console.log('Book deleted successfully:', result);
            window.location.href = '/books';
        }
    } 
    catch (error) {
        console.error('Error deleting book:', error);
    }
}

