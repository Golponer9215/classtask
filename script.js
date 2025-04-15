// 1. Given two user profile objects (e.g., personalInfo and contactInfo), merge them into a single userProfile object.
// 2. Given a product object, log all its keys and values. Bonus: Format them as "key: value" pairs in an array or print them line by line.
// 3. Create a settings object (e.g., theme: "dark", notifications: true). Freeze it and try changing a value. Use Object.isFrozen to confirm if it's immutable.

// number1
let user1 ={
    name:"nenfort",
    age:21,
    contact:"070457868"
}
let user2 = {
    addres:"jos",
    bg:'O+',
    height:"5.6ft"
}
Object.assign(user1,user2)
console.log(Object.assign(user1,user2));


// number2
let car={
brand:" BMW",
speed:"200km/hr",
price:"$20000",
model:2025
}
let values=Object.values(car)
console.log(values)