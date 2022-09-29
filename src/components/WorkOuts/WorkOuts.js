import React, { useEffect, useState } from 'react';
import Workout from '../Workout/Workout';
import './WrokOuts.css'
const WorkOuts = () => {
    const [workOuts, setWorkOuts] = useState([])

    useEffect(() => {
        fetch(`aective.json`)
            .then(res => res.json())
            .then(data => setWorkOuts(data))

    }, [])

    return (
        <div className='main-container'>
            <div className="workouts-container">

                {

                    workOuts.map(workout => <Workout
                        key={workout.id}
                        workout={workout} ></Workout>)
                }
            </div>
            <div className="workout-container">
                <h5>workout summery</h5>
            </div>
        </div>
    );
};

export default WorkOuts;