function letter_at(word, letter, at){
    if (word[at]===letter) return true;
    return false;
}

function arr_processing(arr, letter, at){
    let counter = 1;
    arr.forEach(element => {
        if( letter_at(element, letter, at) ){
            console.log(counter +" => " +element);
            ++counter;
        }
    });
}

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
arr_processing(friends, 'a', 1);



