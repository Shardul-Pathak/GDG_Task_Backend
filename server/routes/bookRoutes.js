import express from 'express'
import cors from 'cors'
import Books from '../model/books.js'

const router = express.Router();
router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', async (req, res) => {
    try {
        const books = await Books.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/add', async (req, res) => {
    try {
        const { title, author, cover, genre } = req.body;
        const newBook = {
            title: title,
            author: author,
            cover: cover,
            genre: genre
        };
        const existingBook = await Books.findOne({ title: newBook.title });
        if (existingBook) {
            res.status(400).json({ status: 'exists' });
        } else {
            const book = await Books.insertMany(newBook);
            res.status(201).json({ status: 'ok', book });
        }    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/title', async (req, res) => {
    try {
        const { title } = req.body;
        const book = await Books.findOne({ title });

        if (!book) {
            return res.status(404).json({ status: 'not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/author', async (req, res) => {
    try {
        const { author } = req.body;
        const books = await Books.find({ author });

        if (books.length === 0) {
            return res.status(404).json({ status: 'not found' });
        }

        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.patch('/update', async (req, res) => {
    try {
        const { title, newTitle, newAuthor, newCover, newGenre } = req.body;
        const updatedBook = await Books.findOneAndUpdate(
            { title },
            { title: newTitle, author: newAuthor, cover: newCover, genre: newGenre },
            { new: true }
        );
        if (!updatedBook) {
            return res.status(404).json({ status: 'not found' });
        }
        res.status(200).json({ status: 'updated', updatedBook });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/delete', async (req, res) => {
    try {
        const { title } = req.body;
        const deletedBook = await Books.findOneAndDelete({ title });

        if (!deletedBook) {
            return res.status(404).json({ status: 'not found' });
        }
        res.status(200).json({ status: 'deleted', deletedBook });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;