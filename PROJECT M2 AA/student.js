const fs = require('fs');

var student={
    name:'John Smith',
    birthYear:2002,
    course:'IFT 458',
    grade:90,
    active:true,
    age:function calculate(){
        if(this.active){
            return 2022-this.birthYear;
        }
    }
    }

var student2={
    name:'Andy Moore',
    birthYear:2000,
    course:'IFT 458',
    grade:100,
    active:false,
    age:function calculate(){
        if (this.active){
            return 2022-this.birthYear;
        }else{
            return 0;
        }
    }}

var students=[];
students.push(student);
students.push(student2);

students.forEach((item)=>console.log(item.age()));

console.log(students);

// console.log(student2.age());
// console.log(student.age());
// Specify the file path for the new JSON file
const filePath = 'students.json';
// Write the JSON data to the new file
fs.writeFileSync(filePath, JSON.stringify(students, null, 2));

console.log('JSON data has been stored in', filePath);