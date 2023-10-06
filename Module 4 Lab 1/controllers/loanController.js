const customerLoan = require('../models/loanModel');
const APIFeatures = require('./../dataBaseManager/loanDbContext');

exports.getLoan = async (req, res) => {
    // get data from database
    const customerloan = await customerLoan.find()
    res.status(200).json({
        status: 'Success',
        results: customerloan.length,
        data: {
            customerloan
        }
    })
};

exports.getLoanById = async (req, res) => {
    // get particular loan details from database
    const { id } = req.params;
    const customerloan = await customerLoan.find({ _id: id });
    res.status(200).json({
        status: 'Success',
        results: customerloan.length,
        data: {
            customerloan
        }
    });
};

exports.getAllLoans = async (req, res) => {
    try {
        // EXECUTE QUERY
        const features = new APIFeatures(customerLoan.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const customerloan = await features.query;

        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: customerloan.length,
            data: {
                customerloan
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
exports.createLoan = async (req, res) => {
    const newLoan = req.body;
    const dateTime = new Date().toISOString();
    
    const newcustomerLoan = {...newLoan, createdDate: dateTime, insertedDate: dateTime};
    
    try {
        const customerloan = await customerLoan.create(newcustomerLoan)
        res.status(201).json({
            status: 'Success',
            data: customerloan
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.updateLoanById = async (req, res) => {
    try {
        const customerloan = await customerLoan.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            data: {
                customerloan
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.deleteLoanById = async (req, res) => {
    try {
        await customerLoan.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};


