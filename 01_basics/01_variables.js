const accountId = 888197
let accountEmail = "gopal@google.com"
var accountPassword = "44112"
accountCity ="Delhi"
let accountState;

// accountId = 3 // not allowed

accountEmail = "hudcc@jde.com"
accountPassword = "46523"
accountCity = "Varanasi"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState]);

