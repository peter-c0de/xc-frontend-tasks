function calculate(fNum, sNum="x", operation="add")
{
    if (sNum==="x"){
        console.log("Second Number Not Found");
        return;
    }

    switch (operation)
    {
        case "add":         console.log( fNum+sNum ); break;
        case "subtract":    console.log( fNum-sNum ); break;
        case "multiply":    console.log( fNum*sNum ); break;
        case "divide":      console.log( fNum/sNum ); break;
        default:            console.log("Wrong Operation!");
    }
}

calculate(20);
calculate(20, 30);
calculate(20, 30, 'add');
calculate(20, 30, 'subtract');
calculate(20, 30, 'multiply');
calculate(30, 30, 'divide');
calculate(20, 2, 'power');




