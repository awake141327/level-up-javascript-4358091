const username = Symbol("username");
const password = Symbol("username");

const user = {
  [username]: "Amaan",
  [password]: "amaan",
  age: 25,
}

console.log(user.username);
console.log(user.password);

