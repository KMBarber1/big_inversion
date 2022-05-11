import React, {useState} from "react"

const PersonCard = props => {
    const [age, setAge] = useState(props.age)

    const increaseAge = () => {
        setAge(age + 1 )
    }

        return (

            <div>

                <h1>{props.lastname}, {props.firstname}</h1> 

                <p>Age: {age}</p>

                <p>Hair Color: {props.haircolor}</p>

                <button onClick={() => setAge(age + 1)}>Birthday Button for {props.firstname} {props.lastname}</button> 

                <button onClick={increaseAge}>Birthday Button for {props.firstname} {props.lastname}</button> 
            
            </div>

        )
    }


export default PersonCard