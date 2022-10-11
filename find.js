const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

function findUserByUsername(users, username){
return users.find(function(user){
    return user.username === username;
});
};
function removeUser(users, username) {
    let found = users.findIndex(function(user){
      return user.username === username;
    })
    if(found === -1) return;
  
    return users.splice(found,1)[0];
  };