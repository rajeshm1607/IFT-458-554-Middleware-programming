//Create a new folder called 'model'
// and inside it, a students.js file. This is where we will implement our CRUD operations.

let students = [];// represts student database

// create a new student
addStudent = function (student) {
     student = {
        id: students.length + 1, 
        fname: student.fname,
        mname: student.mname,
        lname: student.lname,
        address: student.address,
        phone: student.phone,
        email: student.email,
        description: student.description

    };
    students.push(student);
    return student;
};

//update specific student
upDateStudent = function (student,id) {

    const updateStudent = students[id-1]
    {
        updateStudent.fname = student.fname;
        updateStudent.mname = student.mname;
        updateStudent.lname = student.lname;
        updateStudent.address = student.address;
        updateStudent.phone= student.phone;
        updateStudent.email= student.email;
        updateStudent.description= student.description;

    };
    return [updateStudent];
};

// get all students
getStudents = function (student) {
     student = {
        id: students.length + 1, 
        fname: student.fname,
        mname: student.mname,
        lname: student.lname,
        address: student.address,
        // add rest of the properties of the student by looking at the student info in the index.ejs file
    };
    students.push(student);
    return student;
};

// get a specific student
getSpecificStudent = function (id) {
    const specificStudent = students[id-1]
    const arrayFromObject = [specificStudent];
    if(arrayFromObject)
    {
        return arrayFromObject;
    }
    return undefined;
}
// delete a specific student
delSpecificStudent = function (id) {
    const specificStudent = students[id-1]
    if(specificStudent){
        return students.slice(id, 1) ;
    }
}
exports.getSpecificStudent = getSpecificStudent;
exports.deleteStudent = delSpecificStudent;
exports.getStudents = getStudents;
exports.upDateStudent = upDateStudent;
exports.addStudent = addStudent;
exports.students = students;




