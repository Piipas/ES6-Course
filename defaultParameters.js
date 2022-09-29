/*
** Default Parameters
*/

let showmyInfo = (username = "Default user", role = "Guest", theme = "Light") =>  `Welcome ${username}, Your role is ${role}, You are using "${theme}" theme.`;

console.log(showmyInfo());
console.log(showmyInfo("Pipas"));
console.log(showmyInfo("Pipas", "Admin"));
console.log(showmyInfo("Pipas", "Admin", "Dark"));