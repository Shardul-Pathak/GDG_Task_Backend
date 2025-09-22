import OperationHeader from "../components/OperationHeader.jsx"
import AddBook from "../utils/addBook.js"

export default function Add () {
    return(
        <>
            <OperationHeader />
            <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 p-4">
                <div className="bg-zinc-700 p-8 rounded-lg shadow-md w-full max-w-sm">
                    <h2 className="text-2xl font-bold text-center mb-6 text-white">Add Book</h2>
                    <form onSunmit={AddBook} className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-sm font-semibold mb-2 text-white">Title:</label>
                            <input type="text" id="title" name="title" required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" />
                        </div>
                        <div>
                            <label htmlFor="author" className="block text-sm font-semibold mb-2 text-white">Author:</label>
                            <input type="text" id="author" name="author" required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" />
                        </div>
                        <div>
                            <label htmlFor="genre" className="block text-sm font-semibold mb-2 text-white">Genre:</label>
                            <input type="text" id="genre" name="genre"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" />
                        </div>
                        <div>
                            <label htmlFor="bookCoverUrl" className="block text-sm font-semibold mb-2 text-white">Book Cover URL:</label>
                            <input type="text" id="bookCoverUrl" name="bookCoverUrl"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" />
                        </div>
                        <button type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">
                            Add Book
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}