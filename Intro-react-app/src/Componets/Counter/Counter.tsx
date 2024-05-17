import { useState } from 'react';
import styles from './Counter.module.css';

const Counter = () => {

//Do a quick check if counter is greater than 0 decreacsse by one


 
  //We need a useState 
  const [counter, setCounter] = useState(0);
  //One function one to handle our increment
  const handleIncreament = () => {
  setCounter(prevCount => prevCount + 1)
  console.log(counter)
  }


  const downIncreament = () => {
    if(counter > 0){

      setCounter(prevCount => prevCount - 1)
      console.log(counter)
    }
    }


  //One function to handle out decrement



  return (
    <>
    {/* {Two buttons one to increment and one to decreament} */}
    <button className={styles['btnPrimary']} onClick={handleIncreament}>+</button>
    <span>{counter}</span>
    <button className={styles['btnSecondary']} onClick={downIncreament}>-</button>
    {/* {render count somewhere} */}
    </>
  )
}

export default Counter