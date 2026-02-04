
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
  console.log(nameValue)
  user.splice(nameValue,1)
  window.alert(namerev + " Removido")
  getUsers()
})

function getUsers(){
  resp.innerHTML = ''
  user.forEach(item => {
    resp.innerHTML += '</br>-'+item
    resp.innerHTML += ' <input type="button" value="Remover" id="idRemov">'
  })
}

getUsers()