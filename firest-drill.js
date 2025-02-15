//Write a function to return a list of engineers who are above 30 years of age.

const data=require('./Data/people');


let engineersAbove30=getListEngineersAbove30(data);


function getListEngineersAbove30(data){
  
    return data.filter((person)=>{
        let age=person.age;
        let profession=person.profession;
        if(age>30  && profession==="Engineer") {
            return true;
        }
        return false;
    });

}

console.log(engineersAbove30);
