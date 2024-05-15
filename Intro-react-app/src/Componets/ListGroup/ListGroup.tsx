import { useState } from "react";
import styles from './ListGroup.module.css'
//TypeScript has a feature called interface
//using an interface we can define the shape of our objects
//{items: [], heading :string}
interface ListProps {
  items: string []
  heading: string 
  onSelectedItem:(item:string) => void
}




const ListGroup = ({items,heading, onSelectedItem}:ListProps) => {
 

// let selectedIndex = 0;

const [selectedIndex, setSelectedIndex] = useState(0);

const [name, setName] = useState("sam");


  // const handleClick = (e: MouseEvent) => {
  //   console.log(e.target.innerText);
  // };

  //   items = []

// const updateIndex = (index:any) => {
//   setSelectedIndex(index);
//   console.log(selectedIndex);
//   console.log(index, "Thi is just the index");
// }


  // const message = items.length == 0 ?  <p>No Items found</p> : null
  const getMessage = () => {
    return items.length == 0 ? <p>No Items found</p> : null;
  };


  return (
    // JSX we must have one parent. Example div, Fragment or <></>
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className={[styles.ListGroup,styles.container].join('')}>
        {items.map((item, index) => (
          <li className={selectedIndex == index ? styles['listGroupItem'] : styles['listGroupItem']}
         key={index}
          onClick={() => {setSelectedIndex(index)
          onSelectedItem(item);
          }}
          >
         
            
            {item}
          </li>
        ))}
      </ul>
      <p>{name}</p>
      <button className="btn btn-primary" onClick={() => setName("andrew")}></button>
    </>
  );
};

export default ListGroup;
