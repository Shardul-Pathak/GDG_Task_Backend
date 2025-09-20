import { Link } from "react-router-dom"

export default function SignUp() {
    return (
        <>
            <div class="bg-zinc-900 flex items-center justify-center min-h-screen">
                <div class="bg-zinc-800 p-8 rounded-lg shadow-lg max-w-sm w-full">
                    <h2 class="text-2xl font-bold text-white text-center mb-6">Create Account</h2>
                    <form>
                        <div class="mb-4">
                            <label for="name" class="block text-sm font-medium text-gray-400">Full Name</label>
                            <input type="text" id="name" class="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-sm font-medium text-gray-400">Email Address</label>
                            <input type="email" id="email" class="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block text-sm font-medium text-gray-400">Password</label>
                            <input type="password" id="password" class="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                        </div>
                        <button type="submit" class="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Sign Up</button>
                    </form>
                    <p class="text-center text-gray-400 text-sm mt-4">Already have an account? <Link to="/login" class="text-blue-400 hover:underline">Log in</Link></p>
                </div>
            </div>
        </>
    )
}