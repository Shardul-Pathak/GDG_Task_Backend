import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-center mb-4 text-3xl sm:text-4xl md:text-5xl font-bold m-4">
                    Library Management System
                </h1>
                <div className="w-full max-w-4xl mx-auto bg-zinc-700/30 p-2 sm:p-4 rounded-2xl shadow-lg">
                    <ul className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-8 text-sm sm:text-base md:text-xl font-medium">
                        <Link to="/home" className="px-3 py-1.5 rounded-2xl hover:underline transition-colors duration-200">
                            Home
                        </Link>
                        <Link to="/add" className="px-3 py-1.5 rounded-2xl hover:underline transition-colors duration-200">
                            Add Book
                        </Link>
                        <Link to="/update" className="px-3 py-1.5 rounded-2xl hover:underline transition-colors duration-200">
                            Update Book
                        </Link>
                        <Link to="/findA" className="px-3 py-1.5 rounded-2xl hover:underline transition-colors duration-200">
                            Find Author
                        </Link>
                        <Link to="/findT" className="px-3 py-1.5 rounded-2xl hover:underline transition-colors duration-200">
                            Find Book
                        </Link>
                        <Link to="/delete" className="px-3 py-1.5 text-red-600 rounded-2xl hover:underline transition-colors duration-200">
                            Delete Book
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    );
}