const mongoose = require('mongoose');


const courseSchema=new mongoose.Schema({
    name:String,
    grade:{
        type:Number,
        validate:{
            validator:Number.isInteger,
            message:'{VALUE} is not an integer value'
        },
        min:[0,'Grade cannot be less than 0'],
        max:[100,'Grade cannot be more than 100']
    }
})

const studentSchema = new mongoose.Schema(
    {
        name:  {
            type: String,
            required: [true, 'A student must have a name'],
            unique: false,
            trim: true,
            maxlength: [40, 'A student name must have less than or equal to 40 characters'],
            minlength: [2, 'A student name must have more than or equal to 2 characters']
        }, 
        age: {
            type: Number,
            min: [0, 'Age cannot be less than 0']
        },
        email: {
            type: String,
            validate:{
                validator:function(v){
                    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
                },
                message:props=>`${props.value} is not a valid email!`
            },
            required: [true, 'User email required']
        },
        courses:[courseSchema]
});

const Student = mongoose.model('Student', studentSchema);

let student =new Student({
    name:'John',
    age:20,
    email:'invalid email',
    courses:[{name:'math',grade:105}]
});
// student.save((err,student)=>{
//     if(err) return console.error(err);
//     console.log('Student with course information saved to database:',student);
// });


module.exports = Student;