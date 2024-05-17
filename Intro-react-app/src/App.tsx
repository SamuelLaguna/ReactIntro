import Alert from "./Componets/Alert";
import Button from "./Componets/Button";
import ListGroup from "./Componets/ListGroup/ListGroup";
import MyUseStateExample from "./Componets/MyUseStateExample";
import Message from "./Message"
import { BsFillCalendar2DateFill } from "react-icons/bs";
import Like from "./Componets/ButtonGroup/Like"
import { FcLike } from "react-icons/fc";
import Counter from "./Componets/Counter/Counter";
import { useState } from "react";
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let students = [
    "Mr.Garby",
    "Jacqueline",
    "Blake",
    "Denise",
    "Aaron",
    "Principal Oshaughnessy",
    "Timothy",
  ];

  // let alerted = "I have been clicked";

  let cars = ["Chevy", "Dodge", "Ford", "Honda", "Toyota"];

  const handleSelectedItem = (item:string) => {
    console.log(item);
  }

  const handleAlert = () => {
    setalertVisible(true);
  }
// const handleClick = () => {
//   setisVisible(true);
//   console.log(isVisible);
// }

const handleClick2 = () => {
  setisVisible(true);
  console.log(isVisible);
}
let count = 0;
const handleClickAgain = () => {
  count++
  console.log(count);
}


const handleClose = () => {
  setalertVisible(false);
}

  const [alertVisible, setalertVisible] = useState(false);
  const [isVisible, setisVisible] = useState(false);
  // const [firstName, setFirstName] = useState("Samuel");
  // const [lastName, setLastName] = useState("Laguna");

  const [person, setPerson] = useState({
    firstName: "Sam",
    lastName: "Laguna"
  })

  //learn how to update useState
 const [drink, setDrink] = useState({
  title:"Americano",
   price: 8
 });


 //going to create a fucntion to update the price of our drink in out useState
 const handleDrink = () => {
  const newDrink = {
    title:drink.title,
    price:10
  }
  setDrink(newDrink)
  console.log(drink.price);
 }

 //Create useState with nested objecrs and update a value
 const [customer, setCustomer] = useState({
  name: "Sam",
  address: {
    city: "Linden",
    zipCode: 95236
  }
 })

  //Creeate a function to handle a nested object update the zip code: 95212 and console.log it.
  const handleCustomer = () => {
    //This creates a copy of the whole object above
    setCustomer({...customer,address:{...customer.address,zipCode:9999}})
  }

  return (
    <>
      <div>
        <Message/>
        {/* <Message/> */}
        {/* <Message/> */}
      <BsFillCalendar2DateFill color="red" size={80} />
      <Like/>
    { alertVisible ?  <Alert onClose={handleClose}>
        Passing Child as Alert!!!
     </Alert>:null}
     <Button onClickFuntion={handleCustomer}>Drink Button</Button><span>{customer.address.zipCode}</span>
     <Button onClickFuntion={handleDrink}>Drink Button</Button><span>{drink.price}</span>
       <Button color="primary" onClickFuntion={handleClickAgain}>Example</Button>
       <Button color="secondary" onClickFuntion={ handleAlert}>AlertBtn</Button>
       <Button color="warning" onClickFuntion={handleClick2}>Visible Button</Button>
       <Counter/>
        <ListGroup onSelectedItem={handleSelectedItem} items={items} heading="Cities"/>
        <ListGroup onSelectedItem={handleSelectedItem} items={students} heading="students"/>
        <ListGroup onSelectedItem={handleSelectedItem} items={cars} heading="cars"/>
        

      </div>

      <div>
        <MyUseStateExample />
      </div>
    </>
  );
}

export default App;
