import Header from "../components/Header.jsx"
import Card from "../components/Card.jsx"
import Pagination from "../components/Pagination.jsx"

export default function Authors() {
    const books = [
        { 
            title: "Harry Potter And The Philosopher'S Stone",
            cover: "https://m.media-amazon.com/images/I/81q77Q39nEL._UF350,350_QL50_.jpg",
            author: "J.K. Rowling",
            genre: "Fantasy"
        },
        { 
            title: "Harry Potter And The Chamber Of Secrets",
            cover: "https://m.media-amazon.com/images/I/818umIdoruL.jpg",
            author: "J.K. Rowling",
            genre: "Fantasy"
        },
        { 
            title: "Harry Potter - And The Prisoner Of Azkaban",
            cover: "https://m.media-amazon.com/images/I/81NQA1BDlnL._UF1000,1000_QL80_.jpg",
            author: "J.K. Rowling",
            genre: "Fantasy"
        },
        { 
            title: "Harry Potter And The Goblet Of Fire",
            cover: "https://m.media-amazon.com/images/I/81zeKRGCPpL.jpg",
            author: "J.K. Rowling",
            genre: "Fantasy"
        },
        { 
            title: "Harry Potter and The Order of the Phoenix",
            cover: "https://m.media-amazon.com/images/I/81Budsu1XBL.jpg",
            author: "J.K. Rowling",
            genre: "Fantasy"
        },
        { 
            title: "Harry Potter and the Half-Blood Prince",
            cover: "https://m.media-amazon.com/images/I/81DN1723hUL.jpg",
            author: "J.K. Rowling",
            genre: "Fantasy"
        },
        { 
            title: "Harry Potter - And The Deathly Hallows",
            cover: "https://m.media-amazon.com/images/I/81aCMT1zKtL.jpg",
            author: "J.K. Rowling",
            genre: "Fantasy"
        },
    ]
    return (
        <>
            <Header/>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {
                books.map((book, index) => (
                    <Card key={index} book={book}/>
                ))
            }
            </div>
            <Pagination />
        </>
    )
}