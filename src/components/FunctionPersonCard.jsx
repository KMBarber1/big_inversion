import React, {useState} from "react";

const FunctionPersonCard = (props) => {
      const [age, setAge] = useState(props.age)

    const increaseAge = () => {
        setAge(age + 1 )
    }

        return (

            <fieldset>

                <legend>Functional Component - PersonCard</legend>
 
                <h1>{props.lastname}, {props.firstname}</h1>  

                 <p>Age: {age}</p> 

                <p>Hair Color: {props.haircolor}</p>

                <button onClick={() => setAge(age + 1)}>Birthday Button for {props.firstname} {props.lastname}</button> 

                <button onClick={increaseAge}>Birthday Button for {props.firstname} {props.lastname}</button> 

            </fieldset>

        )
    }


export default FunctionPersonCard