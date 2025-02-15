// Get all employees across all divisions working on projects with a budget exceeding $150,000

// "organisation": {
//     "name": "GlobalTech",
//     "divisions": [
//         {
//             "divisionName": "Division 1",
//             "departments": [
//                 {
//                     "departmentName": "HR",
//                     "employees": [
//                         {
//                             "id": 1,
//                             "name": "Employee 1-1-1",
//                             "age": 27,
//                             "role": "Engineer",
//                             "projects": [

const data = require("./Data/organisation.json");

let finalresult=new Set();

let divisions = data["organisation"]["divisions"];

divisions.reduce((acc, division) => {
  let departments=division["departments"];
  departments.forEach((department)=>{
    let employees=department["employees"];
    employees.reduce((store,employee)=>{
       let projects=employee.projects;

       projects.forEach((project)=>{
        if(project.budget>150000){
            finalresult.add(employee.name);
            return;
        }

       }
    )

    },[])
     
  })

  

}, []);


console.log(finalresult)