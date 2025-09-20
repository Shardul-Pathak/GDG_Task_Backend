export default function Pagination() {
    return (
        <nav class="flex justify-center items-center my-8 space-x-2">
            <button class="px-4 py-2 text-sm font-medium text-gray-200 bg-gray-700 border border-gray-600 rounded-lg shadow-sm hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed">
                    Previous
            </button>

            <div class="flex space-x-1">
                <button class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-lg shadow-sm">
                    1
                </button>
                <button class="px-4 py-2 text-sm font-medium text-gray-200 bg-gray-700 border border-gray-600 rounded-lg shadow-sm hover:bg-gray-600">
                    2
                </button>
                <button class="px-4 py-2 text-sm font-medium text-gray-200 bg-gray-700 border border-gray-600 rounded-lg shadow-sm hover:bg-gray-600">
                    3
                </button>
            </div>

            <button class="px-4 py-2 text-sm font-medium text-gray-200 bg-gray-700 border border-gray-600 rounded-lg shadow-sm hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed">
                    Next
            </button>
        </nav>
    )
}