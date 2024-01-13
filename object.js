// singleton
// Object.create

// object literals
const mySym = Symbol("key1")

const jsUser ={
    name: 'vishal',
    "full name": "vishal kumar",   // ek object ke andar variable or variable ka value string ho toa aap jsUser.name laga ke access nahi kar skte. Tab hum jsUser["variable_name"] use karke hum value ko access karte hai.
    age: 18,
    [mySym] : "myKey1",      // How to make symbol of mysml...? but this syntx is not valid for symbol
    location: "Bihar",
    email: "vishalkumarptn@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday", "saturday"]

}

console.log(jsUser["email"]);
console.log(jsUser.email);
console.log(jsUser["full name"]);
console.log(jsUser["mySym"]);
console.log(typeof jsUser[mySym]);

jsUser.email ="vishal@gmail.com"
// Object.freeze(jsUser) // eske baad wali sari code freze ho jaayegi.

jsUser.email ="vishal123@gmail.com"
console.log(jsUser);

jsUser.greeting = function(){           // .greeting method se hum refrence milta hai or kisi bi object ke value as refrence print kara skte hai. ex:- 35no. line
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);

}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())