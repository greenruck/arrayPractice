const persons = 
[
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
];
const catPeople = persons.filter(function(person){
    return person.isCatOwner === true;
});