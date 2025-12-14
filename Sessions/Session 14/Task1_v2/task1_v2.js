// Task 1

/* Outputs:
"2 => Omar"
"6 => Abbas"
*/

let friends = ["Amr", 65, "Omar", "Mohamed", 23, 50, "Abbas", 56]

for (i=0; i<friends.length; ++i)
{
    if (friends[i] === "Omar" || friends[i] === "Abbas")
    console.log(`${friends[i]} found at index => ${i}`)
} 