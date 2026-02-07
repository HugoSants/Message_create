const resp = document.querySelector("#res");
const addButton = document.querySelector("#idAdd");
const input = document.querySelector("#idMessage");

const users = ["João", "Maria"];

function getInputValue() {
  return input.value.trim();
}

function clearInput() {
  input.value = "";
  input.focus();
}

function createUserItem(name, index) {
  const wrapper = document.createElement("div");

  const text = document.createElement("span");
  text.textContent = `- ${name} `;

  const button = document.createElement("button");
  button.textContent = "Remover";
  button.addEventListener("click", () => removeUser(index));

  wrapper.appendChild(text);
  wrapper.appendChild(button);

  return wrapper;
}

function renderUsers() {
  resp.innerHTML = "";
  users.forEach((user, index) => {
    resp.appendChild(createUserItem(user, index));
  });
}

function addUser() {
  const name = getInputValue();
  if (!name) return;

  users.push(name);
  renderUsers();
  clearInput();
}

function removeUser(index) {
  users.splice(index, 1);
  renderUsers();
}

addButton.addEventListener("click", addUser);

renderUsers();