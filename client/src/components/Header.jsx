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
                        <Link to="/" className="px-3 py-1.5 rounded-2xl hover:underline transition-colors duration-200">
                            Home
                        </Link>
                        <Link to="/books" className="px-3 py-1.5 rounded-2xl hover:underline transition-colors duration-200">
                            Books
                        </Link>
                        <Link to="/authors" className="px-3 py-1.5 rounded-2xl hover:underline transition-colors duration-200">
                            Authors
                        </Link>
                        <Link to="/genres" className="px-3 py-1.5 rounded-2xl hover:underline transition-colors duration-200">
                            Genres
                        </Link>
                        <Link to="/login" className="px-3 py-1.5 text-blue-400 rounded-2xl hover:underline transition-colors duration-200">
                            Login
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    );
}