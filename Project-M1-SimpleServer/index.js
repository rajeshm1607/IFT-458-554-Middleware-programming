const { Console } = require('console');
const httpServer=require('http');
const url=require('url');
const fs=require('fs');
const replaceTemplate = require('./modules/replaceTemplate');

///
///Reading Data From File and Sending the Data to the Client
const tempCourse=fs.readFileSync(
    `${__dirname}/data/data.json`,
    'utf-8'
);

const templateHTMLCourse=fs.readFileSync(
    `${__dirname}/template/templateCourse.html`,
    'utf-8'   
);
// const replaceTemplate=(htmlstr,course)=>{
//     let output=htmlstr.replace(/{%NAME%}/g,course.courseName);
//      output=output.replace(/{%IMAGE%}/g,course.image);
//      output=output.replace(/{%FROM%}/g,course.from);
//      output=output.replace(/{%INSTRUCTOR%}/g,course.instructor);
//      output=output.replace(/{%CREDITS%}/g,course.credits);
//      output=output.replace(/{%DESCRIPTION%}/g,course.description);
//      output=output.replace(/{%ID%}/g,course.id);
//     return output;
// }

const dataObj=JSON.parse(tempCourse);
///
// Create server
const server =httpServer.createServer((req,res) =>  {// call back function
    const urlParameter=url.parse(req.url,true);
    console.log(JSON.stringify(urlParameter.query));
    console.log(JSON.stringify(urlParameter.pathname));

    //
    const {query,pathname}=url.parse(req.url,true);// object destructors

    if(query.id){ // if id query parameter exists
        if (pathname ==='/' || pathname.toLowerCase()==='/courses') {
           res.writeHead(200,{// Ran successfully
            'Content-type':'text/html'
           });
           var index=Number(query.id)-1;
           const course=dataObj[index];
            const strCoursename=JSON.stringify(course);
            const courseHTML=replaceTemplate(templateHTMLCourse,course);
        //    res.end(`We received our first request from the client 
        //    at resource ${urlParameter.pathname.toLowerCase()} 
        //    with query parameter ${urlParameter.query.id}
        //    ${JSON.stringify(course)}
        //    `);     
        res.end(courseHTML);       
            }
    }else{
        res.writeHead(404,{// server didnot find resource
            'Content-type':'text/html'
           });
    
    res.end('Resource not found');
    }

});

// start listening to requests
server.listen(8000,'localhost',function(){
    console.log('Listening to requests on port 8000');
});
