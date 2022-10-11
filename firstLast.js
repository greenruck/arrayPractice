const names = ['eros', 'drake', 'matty', 'veronica'];
const outcome = [];

names.forEach(function(name){
    outcome.push(name.charAt(0) + (name.charAt(name.length - 1)));
});
console.log(outcome);