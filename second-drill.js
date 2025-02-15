// **Group the users based on the profession:**
// Expected output:
// ```
// {
//    Doctor: [] ,// you have to add all the names of the persons whose profession is doctor,
//    Lawyer: [] , // you have to add all the names of the persons whose profession is doctor,
// ...
// }
// ```

const data=require('./Data/people');


const groupUsers=getGroupOnProfeesion(data);

function getGroupOnProfeesion(data){
    return  data.reduce((acc,person)=>{
        let profession=person.profession;
        let name=person.name;
        if(!acc.hasOwnProperty(profession)){
            acc[profession]=[];
        }
        acc[profession].push(name);
        return acc;

    },{})
}

// console.log(groupUsers);

module.exports=groupUsers;


