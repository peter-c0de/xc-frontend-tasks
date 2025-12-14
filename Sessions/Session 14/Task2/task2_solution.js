function createSelectBox(startYear, endYear)
{
    console.log("<select>");
    for(let i=startYear; i<=endYear; ++i)
        console.log("  <option value=\"" +i +"\">" +i +"</option>");
    console.log("</select>");
}

createSelectBox(2000,2014);




