let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = 'a';
let counter = 1;

friends.forEach(element => {
    if(element.includes(letter)){
        console.log(counter +" => " +element);
        ++counter;
    }
});






