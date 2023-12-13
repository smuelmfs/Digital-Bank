const App = require("./App");

App.createUser("samuel@email.com", "samuel Pontes");
App.createUser("lucas@email.com", "Lucas Queiroga");
App.createUser("juliana@email.com", "Juliana Conde");

App.deposit("samuel@email.com", 100);

App.transfer("samuel@email.com", "lucas@email.com", 20);

App.changeLoanFee(10);
App.takeLoan("juliana@email.com", 2000, 24);

console.log(App.findUser("samuel@email.com"));
console.log(App.findUser("samuel@email.com").account);
console.log(App.findUser("lucas@email.com"));
console.log(App.findUser("lucas@email.com").account);
console.log(App.findUser("juliana@email.com"));
console.log(App.findUser("juliana@email.com").account);
console.log(App.findUser("juliana@email.com").account.loans[0].installments);
