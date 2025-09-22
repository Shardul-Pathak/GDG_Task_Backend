import mongoose from 'mongoose';

const booksSchema = mongoose.Schema({
    title: { type: 'string', required: true },
    author: { type: 'string', required: true },
    cover: { type: 'string', required: true },
    genre: { type: 'string', required: true },
    borrowCount: { type: 'number', default: 0 }
});
const Books = mongoose.model('Books', booksSchema);
export default Books;
