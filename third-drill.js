// **Find the average salary for each profession:**
// Expected output:
// ```
// {
//  Doctor: AVERAGE_SALARY, // you need to find the average per profession
// Nurse: AVERAGE_SALARY,

// }```

const data=require('./Data/people');

const groupUsers=require('./second-drill')


let averageSalaryPerProfession=getAvaerageSalaryPerProfession(data);


function getAvaerageSalaryPerProfession(data){

 let store=  data.reduce((acc,person)=>{
        let profession=person.profession;
        let salary=person.salary;
        if(!acc.hasOwnProperty(profession)){
            acc[profession]=0
        }
        
        acc[profession]+=salary;
        return acc;

    },{});

    let keys=Object.keys(store);
    keys.map((profession)=>{
        let value=store[profession];
        let length=groupUsers[profession].length;
        let avg=(value/length).toFixed(2);
        store[profession]=parseFloat(avg)

    })
    
    return store;
}


console.log(averageSalaryPerProfession);

