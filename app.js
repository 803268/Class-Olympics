const express = require('express');
const app = express();
const fs = require('fs');
let students = [];
let events = [];
let studentIndex;

fs.readFile('students.json', async (err, data) => {
students = await JSON.parse(data);

    
    for (let i = 0; i<= students.length; i++){
    students[i].Event = "";
   
}
  fs.writeFile('students.json',JSON.stringify(students),(err,) => {
     
      if (err){
      console.warn(err);
      return;
      };
      console.log("file appended at line 21")
  });     
});

fs.readFile('events.json', async (err, data) => {
events = await JSON.parse(data);

});



app.use(express.static('public'));
app.use(express.json());

    
 app.post('/answer',(req, res) => {
    
if (students.some(st => st['Student_Number'] == req.body.Student_Number && st['First_Name'] == req.body.First_Name && st['Last_Name'] == req.body.Last_Name && st['Grade_Level'] == req.body.Grade_Level )) {
    console.log("Successful");
   
    studentIndex = students.findIndex(student =>
     studentIndex.Student_Number == req.body.Student_Number
    )
                  
                console.log(students[studentIndex]);   
                  res.send(events);

    
}
    else if (students.some(st => st['Student_Number'] != req.body.Student_Number && st['First_Name'] != req.body.First_Name && st['Last_Name'] != req.body.Last_Name && st['Grade_Level'] != req.body.Grade_Level )){
        console.log("Unsuccessful");
        
        res.status(400);
        res.send("bad info");
        
    }
    else {
    console.log(`${req.body.answer}`); 
    students.push(req.body.answer);
        
    }    
    

});
app.post('/event',(req, res) => {
     students[studentIndex].Event = req.body.Event;
    fs.writeFile('students.json',JSON.stringify(students),(err,) => {
     
      if (err){
      console.warn(err);
      return;
      };
      console.log("file appended at line 70")
  });     
});

app.listen(3000, () => {
    console.log('Server started...');
});