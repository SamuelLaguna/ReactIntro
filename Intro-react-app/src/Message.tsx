//Functional Component 
//PascalCasing

let count = 0;
function Message()
{
    count++;
    console.log(count);
    //JSX JavaScript XML
    return <h1>Message: {count}</h1>
}
//This export will allow us to use this component where we 
export default Message;