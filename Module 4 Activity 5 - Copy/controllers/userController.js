const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// const Student = require('../models/studentModel');



exports.getData = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json({
            status: 'success',
            results: users.length,
            data: {
                users
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};


exports.getDataById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({ where: { id: String(id) } });
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};


exports.postData = async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
            }
        });
        res.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};


exports.updateDataById = (req, res) => res.send('Hello World! from student PUT');
exports.patchDataById = (req, res) => res.send('Hello World! from student PATCH');
exports.deleteDataById = (req, res) => res.send('Hello World! from student DELETE');