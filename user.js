const users=[
    new user('E AGC', 'armando.garceb@gmail.com', '123456'),
    new user('ARM', 'chotarmando@gmail.com', 'asdfg'),
    new user('ARMANDO', 'chot_armando@hotmail.com', 'ñlkjh')
]




function getUsers (){
    return users
}
function createUser(nickname, email, password){
    const newUser = new user (nickname, email, password)
    users.push(newUser)
    return newUser
}

function updateUser(i, newNickname, newEmail, newPassword){
    users[i].nickname = newNickname
    users[i].email = newEmail
    users[i].password = newPassword
}

function  deleteUser(i){
    users.splice(i, 1)
}