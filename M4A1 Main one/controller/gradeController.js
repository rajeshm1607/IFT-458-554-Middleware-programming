exports.getData = (req, res) => {
    // get data from database
    const data = {
        subject: 'IFT 544',
        grade: "A+",
        date: '11/01/4',
    };
    res.send(`Hello world! from student GET ${JSON.stringify(data)}`);
};
exports.postData = (req, res) => res.send('Hello world! from student POST');
exports.updateData = (req, res) => res.send('Hello world! from student PUT');
exports.deleteData = (req, res) => res.send('Hello world! from student DELETE');
