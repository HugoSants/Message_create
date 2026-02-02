
const resp = document.querySelector("#res")
const add = document.querySelector("#idAdd") 
const rem = document.querySelector("#idRemov") 

let user = ['João', 'Maria']

add.addEventListener('click',()=>{
  const name = document.querySelector('#idMessage').value
  const nameString = name.toString()
  user.push(nameString)
  getUsers()

})

rem.addEventListener('click',()=>{
  const namerev = document.querySelector('#idMessage').value
  const nameValue = user.indexOf(namerev)
  user.pop(nameValue)
  
  getUsers()
})

function getUsers(){
  resp.innerHTML = ''
  user.forEach(item => {
    resp.innerHTML += '</br>-'+item
  })
}

getUsers()