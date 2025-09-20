import { Link } from "react-router-dom"

export default function Login() {
    return (
        <>
            <div className="bg-zinc-900 flex items-center justify-center min-h-screen">
                <div className="bg-zinc-800 p-8 rounded-lg shadow-lg max-w-sm w-full">
                    <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>
                    <form>
                        <div className="mb-4">
                            <label for="email" className="block text-sm font-medium text-gray-400">Email Address</label>
                            <input type="email" id="email" class="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                        </div>
                        <div className="mb-6">
                            <label for="password" className="block text-sm font-medium text-gray-400">Password</label>
                            <input type="password" id="password" className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <input id="remember-me" type="checkbox" className="h-4 w-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-2 focus:ring-blue-500"/>
                                <label for="remember-me" className="ml-2 block text-sm text-gray-400">Remember me</label>
                            </div>
                            <a href="#" className="text-sm text-blue-400 hover:underline">Forgot password?</a>
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Login</button>
                    </form>
                    <p className="text-center text-gray-400 text-sm mt-4">Don't have an account?
                    <Link to="/signup" className="text-blue-400 hover:underline"> Sign up</Link></p>
                </div>
            </div>
        </>
    )
}