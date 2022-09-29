import React from 'react';
import './workout.css'

const Workout = (props) => {
    console.log(props)
    const { name, description, img, time, age } = props.workout
    return (
        <div className='work-out'>
            <div>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Time required : {time}</p>
                <p>For Age : {age}</p>
            </div>
            <button className='btn-list'>Add To List</button>
        </div>
    );
};

export default Workout;