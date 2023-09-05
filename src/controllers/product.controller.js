const Product = require('../models/Product.model');

// GET /api/products
const getProducts =  async (req, res) => {
    try {
        const { sortBy, sortOrder, page, limit } = req.query;

        // sortBy va sortOrderda kelgan parametrlarni tekshirish
        const sortOptions = {};
        if (sortBy === 'dateAdded' || sortBy === 'price' || sortBy === 'name') {
            sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;
        } else {
            return res.status(400).json({ message: 'Invalid sorting params' });
        }

        // skip qiymatini hisoblash
        const skip = (parseInt(page) - 1) * parseInt(limit);

        // Pagination bo'yicha va sortlangan productlarni olish
        const products = await Product.find()
            .sort(sortOptions)
            .skip(skip)
            .limit(parseInt(limit));

        // paginationsiz umumiy mahsulotlarni olish
        const totalCount = await Product.countDocuments();

        return res.json({ products, totalCount });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const addProducts =  async (req, res) => {
    try {
        const { name, price } = req.body;

        // yangi product yaratish
        const newProduct = new Product({
            name,
            price,
            dateAdded: Date.now(),
        });

        // productni databasega saqlash
        const savedProduct = await newProduct.save();

        return res.status(201).json(savedProduct);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {getProducts, addProducts}