// **Write a function that returns the youngest and oldest person in each profession.**

// { name: "Maria", age: 25, profession: "Doctor", salary: 74000 },

const data=require('./Data/people');


let oldAndYoung=getOldAndYoungestPerProfession(data);

function getOldAndYoungestPerProfession(data){

  return  data.reduce((acc,person)=>{
        let profession=person.profession;
        let age=person.age;
        let name=person.name;
       
        if(!acc.hasOwnProperty(profession)){
            acc[profession]={
                oldestPerson:"",
                oldestAge:0,
                youngestPerson:"",
                youngetAge:200,
            }
        }
       
        if(age>acc[profession].oldestAge){
            acc[profession].oldestAge=age;
            acc[profession].oldestPerson=name;
        }
        else if(age<acc[profession].oldestAge && age<acc[profession].youngetAge ){
            acc[profession].youngetAge=age;
            acc[profession].youngestPerson=name;
        }

    return acc;
    },{})
};

console.log(oldAndYoung);

