import React, { useEffect, useState } from 'react';

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
                <h2>this is workouts</h2>
            </div>
            <div className="workout-container">
                <h5>workout summery</h5>
            </div>
        </div>
    );
};

export default WorkOuts;