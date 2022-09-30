import React from 'react';
import './workout.css'

const Workout = (props) => {
    const { name, description, img, time, age } = props.workout;
    const { handleToClick } = props;
    return (
        <div className='work-out'>
            <div>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Time required : {time}</p>
                <p>For Age : {age}</p>
            </div>
            <button onClick={() => handleToClick(props.workout)} className='btn-list'>Add To List</button>
        </div>
    );
};

export default Workout;