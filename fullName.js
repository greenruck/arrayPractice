const persons = [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele"}
];
const fullName = persons.map(function(val){
    return val.first + " " + val.last;
});
