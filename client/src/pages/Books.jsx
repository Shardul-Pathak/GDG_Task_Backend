import { useState, useEffect } from 'react';
import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import getBooks from "../utils/getBooks.js";

export default function Books() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBooks() {
            try {
                const booksData = await getBooks();
                setBooks(booksData);
            } catch (err) {
                setError("Failed to fetch books.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchBooks();
    }, []);

    if (loading) {
        return <div className="text-center p-8 text-xl">Loading books...</div>;
    }

    if (error) {
        return <div className="text-center p-8 text-red-500">{error}</div>;
    }

    return (
        <>
            <Header/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {
                books.length > 0 ? (
                    books.map((book, index) => (
                        <Card key={index} book={book}/>
                    ))
                ) : (
                    <div className="col-span-full text-center p-8 text-gray-500">
                        No books found.
                    </div>
                )
            }
            </div>
        </>
    );
}