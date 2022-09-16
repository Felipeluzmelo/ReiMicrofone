const router = require('express').Router();
const { Product } = require('../models/Category');

router.post('/', (req, res) => {
    Product.find()
        .populate('_category')
        .exec()
        .then((data, error) => {
            if (error) return res.status(400).json({ status: false, erros });
            return res.status(200).json({
                status: true,
                message: 'Get Product successfully',
                data,
            });
        });
});

router.post('/create', (req, res) => {
    const product = new Product(req, body);
    product.save((error, data) => {
        if (error) return res.status(400).json({ status: false, erros });
        return res.status(200).json({
            status: true,
            message: 'Product has been category successfully',
            data,
        });
    });
});

module.exports = router;
