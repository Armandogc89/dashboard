const body = document.querySelector('body');
const tbody = document.querySelector('tbody');
const btnAddUpdate = document.querySelector('#btnAddUpdate');
const inNickName = document.querySelector('#inNickname');
const inEmail = document.querySelector('#inEmail');
const inPassword = document.querySelector('#inPassword');
/*
C
R
U
D
*/ 
btnAddUpdate.onclick = btnAddUser


    
body.onload =() => {
    fillTable()

}

function createRow(u, i){
    //const users = getUsers()
    const tr = document.createElement('tr')
//delete
    const tdDelete = document.createElement('td')
    const iDelete = document.createElement ('i')
    iDelete.className = 'fas fa-trash'
    iDelete.onclick = () =>{
        const isConfirm = confirm('confirma borrar')
        if(isConfirm){
            deleteUser(i)
            clearTable()
            fillTable()

        
       

        }    
    }
//update
    const tdUpdate = document.createElement('td')
    const iUpdate = document.createElement ('i')
    iUpdate.className = 'fas fa-pen'
    iUpdate.onclick =() => {
        btnAddUpdate.textContent = 'ACTUALIZAR'
        inNickName.value = u.nickname
        inPassword.value = u.password
        inEmail.value = u.email
        btnAddUpdate.onclick = (e) =>  btnUpdateUser (e, i)
    }
//nickname
    const tdNickName = document.createElement('td')
    tdNickName.textContent = u.nickname
    //email
    const tdEmail = document.createElement('td')
    tdEmail.textContent = u.email
    //password
    const tdPassword = document.createElement('td')
    tdPassword.textContent = u.password
    //jOIN
    tdDelete.appendChild(iDelete)
    tdUpdate.appendChild(iUpdate)
    tr.append(tdDelete, tdUpdate, tdNickName, tdEmail, tdPassword)

    return tr;

}

function btnAddUser(e){
    const i = getUsers().length
    const newUser = createUser(inNickName.value, inEmail.value, inPassword.value)
    const tr = createRow(newUser, i)
    tbody.appendChild(tr)
    e.preventDefault()
    alert('Elemento Guardado')
}

function btnUpdateUser (e, i){
    updateUser(i, inNickName.value, inEmail.value, inPassword.value)
    clearTable()
    fillTable()
    e.preventDefault()
    alert('Elemento actualizado')
    inNickName.value = ''
    inEmail.value = ''
    inPassword.value = ''
    btnAddUpdate.textContent = 'Agregar'
    btnAddUpdate.onclick = btnAddUser


}

function clearTable(){
    tbody.innerHTML = ''
}
function fillTable(){
    let trs = [];  
    const users = getUsers();
    users.forEach((u, i) =>{
        const tr = createRow(u, i)
        trs.push(tr)
    })

    tbody.append(...trs)
}
