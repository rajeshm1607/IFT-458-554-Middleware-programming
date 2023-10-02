//Create a new folder called 'model'
// and inside it, a students.js file. This is where we will implement our CRUD operations.

let students = []; // represts student database

// create a new student
const addStudent = function (studentsarg) {
  const student = {
    id: students.length,
    fname: studentsarg.fname,
    mname: studentsarg.mname,
    lname: studentsarg.lname,
    address: studentsarg.address,
    email: studentsarg.email,
    phone: studentsarg.phone,
    description: studentsarg.description,
  };
  students.push(student);
  return students;
};

//update specific student
updateStudent = function (id,student) {
  
 const updatedStudent={
    fname : student.fname,
    mname : student.mname,
    lname : student.lname,
    address : student.address,
    email : student.email ,
    phone : student.phone ,
    description : student.description
  }
  
  return updatedStudent;
};

// get all students
const getStudents = function () {
  return students;
};

// get a specific student
getSpecificStudent = function (id) {
  const specificStudent = students[id];
  if (specificStudent) {
    return specificStudent;
  }
  return undefined;
};
// delete a specific student
delSpecificStudent = function (id) {
  const specificStudent = students[id];
  if (specificStudent) {
    students.splice(id, 1);
    return true;
  }
};
exports.getSpecificStudent = getSpecificStudent;
exports.delSpecificStudent = delSpecificStudent;
exports.getStudents = getStudents;
exports.updateStudent = updateStudent;
exports.addStudent = addStudent;
exports.students = students;

