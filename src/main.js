
const resp = document.querySelector("#res")
const add = document.querySelector("#idAdd") 

let user = ['João', 'Maria'] 

add.addEventListener('click',()=>{
  const name = document.querySelector('#idMessage').value
  const nameString = name.toString()
  user.push(nameString)
  getUsers()

})

function getUsers(){
  resp.innerHTML = ''
  user.forEach((item,index) => {
    resp.innerHTML += '</br>-'+item
    resp.innerHTML += `<button onclick="removeUser(${index})">Remover</button>`
  })
}

window.removeUser = function(index){
  user.splice(index, 1)
  getUsers()
}

getUsers()