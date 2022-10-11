const persons = 
[
    {
    name: 'Elie',
    title: 'instructor',
    salary:  100000
    },

    {
    name: 'Tim',
    title: 'adjunc',
    salary:  600000
    }, 

    {
    name: 'Matt',
    title: 'technician',
    salary:  40000
    },

    {
    name: 'Colt',
    title: 'instructor',
    salary:  120000
    },
];

const NameAndTitle = persons.map(function(person){
    return person.name + " : " + person.title;
});
