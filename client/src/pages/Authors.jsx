import Header from "../components/Header.jsx"

export default function Authors() {
    return (
        <>
            <Header/>
            <div>
                <h1 className="text-3xl text-left mt-6 ml-22">Genres</h1>
                <div className="flex flex-col p-4">
                    <div className="mb-4">
                        <div className="grid grid-cols-4 gap-4 text-2xl text-center">
                            <div className="bg-zinc-700/30 p-4 rounded-2xl hover:bg-zinc-700/60 h-40 pt-15">Author 1</div>
                            <div className="bg-zinc-700/30 p-4 rounded-2xl hover:bg-zinc-700/60 h-40 pt-15">Author 2</div>
                            <div className="bg-zinc-700/30 p-4 rounded-2xl hover:bg-zinc-700/60 h-40 pt-15">Author 3</div>
                            <div className="bg-zinc-700/30 p-4 rounded-2xl hover:bg-zinc-700/60 h-40 pt-15">Author 4</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}