import Alert from "./Componets/Alert";
import Button from "./Componets/Button";
import ListGroup from "./Componets/ListGroup/ListGroup";
import MyUseStateExample from "./Componets/MyUseStateExample";
import { BsFillCalendar2DateFill } from "react-icons/bs";
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

  let alerted = "I have been clicked";

  let cars = ["Chevy", "Dodge", "Ford", "Honda", "Toyota"];

  const handleSelectedItem = (item:string) => {
    console.log(item);
  }

  const handleAlert = (alerted:string) => {
    console.log(alerted);
  }
  return (
    <>
      <div>
      <BsFillCalendar2DateFill color="red" size={80} />
     <Alert>
    
        Passing Child as Alert!!!
     </Alert>
       <Button color="primary" onClickFuntion={() => console.log("Clicked")}>One Button</Button>
       <Button color="secondary" onClickFuntion={() => console.log("Clicked")}>One Button</Button>
       <Button color="warning" onClickFuntion={() => console.log("Clicked")}>One Button</Button>
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
