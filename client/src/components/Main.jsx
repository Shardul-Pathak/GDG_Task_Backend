import Card from "./Card"

export default function Main() {
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
    ]
    return (
        <>
            <div className="flex justify-center flex-col max-w-7xl mx-auto p-4">
                <h1 className="text-2xl ml-6">Your Collection</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {
                        books.map((book, index) => (
                            <Card key={index} book={book}/>
                        ))
                    }
                </div>
                <h1 className="text-2xl ml-6">Popular</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {
                        books.map((book, index) => (
                            <Card key={index} book={book}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}