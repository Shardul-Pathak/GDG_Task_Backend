export default function Card(props) {
    return (
        <>
            <div class="max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-800 m-2 p-3 border border-gray-700">
                <img class="w-full max-h-auto object-cover rounded-md mb-2" src={props.book.cover} alt={props.book.title}/>
                <div class="px-3 py-2">
                    <h2 class="font-bold text-lg mb-1 text-white">{props.book.title}</h2>
                    <p class="text-gray-300 text-sm">
                    <span class="font-semibold text-gray-200">Author:</span> {props.book.author}
                    </p>
                    <p class="text-gray-300 text-sm">
                    <span class="font-semibold text-gray-200">Genre:</span> {props.book.genre}
                    </p>
                </div>
            </div>
        </>
    )
}