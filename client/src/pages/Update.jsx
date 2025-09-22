import OperationHeader from "../components/OperationHeader.jsx"

export default function Update () {
    return(
        <>
            <OperationHeader/>
            <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 p-4">
                <div className="bg-zinc-700 p-8 rounded-lg shadow-md w-full max-w-sm">
                    <h2 className="text-2xl font-bold text-center mb-6 text-white">Update Book</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="oldTitle" className="block text-sm font-semibold mb-2 text-white">Current Title:</label>
                            <input type="text" id="oldTitle" name="oldTitle" required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" />
                        </div>
                        <div>
                            <label htmlFor="newTitle" className="block text-sm font-semibold mb-2 text-white">New Title:</label>
                            <input type="text" id="newTitle" name="newTitle"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" />
                        </div>
                        <div>
                            <label htmlFor="newAuthor" className="block text-sm font-semibold mb-2 text-white">New Author:</label>
                            <input type="text" id="newAuthor" name="newAuthor"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" />
                        </div>
                        <div>
                            <label htmlFor="newGenre" className="block text-sm font-semibold mb-2 text-white">New Genre:</label>
                            <input type="text" id="newGenre" name="newGenre"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" />
                        </div>
                        <div>
                            <label htmlFor="newCover" className="block text-sm font-semibold mb-2 text-white">New Cover URL:</label>
                            <input type="text" id="newCover" name="newCover"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" />
                        </div>
                        <button type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">
                            Update Book
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}