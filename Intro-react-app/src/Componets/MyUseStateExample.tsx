import { useState } from "react"


const MyUseStateExample = () => {
    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(50);
    const updateName = () => {
        setName("Ralpheal");
        console.log(name);
    }

    const updateAge = () => {
        setAge(age + 1);

    }
    

    return (
        <>
        <div><p>Name: {name}</p></div>
        <button className="btn btn-secondary" onClick={(updateName)}>Set name</button>
        <div><p>Age: {age}</p></div>
        <button className="btn btn-secondary" onClick={updateAge}>Set age</button>
        </>
    )
}

export default MyUseStateExample