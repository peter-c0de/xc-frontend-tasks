let member = {
    name: "Peter",
    age: "30+",
    country: "Egypt",
    fullDetails: function(){
        // return "My name is " +this.name +", My Age is " +this.age +" I live in " +this.country;
        return `My name is ${this.name}, My Age is ${this.age} I live in ${this.country}.`;
    }
}

console.log(member.name);
console.log(member.age);
console.log(member.country);
console.log(member.fullDetails());



