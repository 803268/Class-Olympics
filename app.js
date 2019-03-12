const express = require('express');
const app = express();
const fs = require('fs');
let students = [];
let events = [];
app.use(express.static('public'));
app.use(express.json());


fs.readFile('students.json', async (err, data) => {
students = await JSON.parse(data);
});

fs.readFile('events.json', async (err, data) => {
events = await JSON.parse(data);
});





app.post('/answer',(req, res) => {
    
 
    
if (students.some(st => st['Student_Number'] == req.body.Student_Number && st['First_Name'] == req.body.First_Name && st['Last_Name'] == req.body.Last_Name && st['Grade_Level'] == req.body.Grade_Level )) {
    console.log("Successful");
    
    res.send(events);
     console.log(students[0]);
    
}
    else if (students.some(st => st['Student_Number'] != req.body.Student_Number && st['First_Name'] != req.body.First_Name && st['Last_Name'] != req.body.Last_Name && st['Grade_Level'] != req.body.Grade_Level )){
        console.log("Unsuccessful");
        
        
        
    }
    else {
    console.log(`${req.body.answer}`); 
    students.push(req.body.answer);
    console.log(movies);
        
    }    
    

});

    app.post('/event',(req, res) => {
    for( let i = 0; i<=students.length;i++){
        //WHAT THE FUCK DO WE PUT HERE?
        students.add(req.body.Event);
        
       //let events[i] = "";
        //console.log(events);
        //trying to add event to end of student array
        //console.log(Student information)
        
    };
});

app.listen(3000, () => {
    console.log('Server started...');
});