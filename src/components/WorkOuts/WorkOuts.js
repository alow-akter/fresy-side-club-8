import React, { useEffect, useState } from 'react';
import Workout from '../Workout/Workout';
import './WrokOuts.css'
const WorkOuts = () => {
    const [workOuts, setWorkOuts] = useState([])
    const [cart, setCart] = useState([])
    const [btns, setBtn] = useState()


    let sumTimes = cart.reduce(function (a, b) {
        return parseFloat(a) + parseFloat(b.time);
    }, 0);

    useEffect(() => {
        fetch(`aective.json`)
            .then(res => res.json())
            .then(data => setWorkOuts(data))

    }, [])

    const handleToClick = (workout) => {
        console.log(workout)
        const newCart = [...cart, workout]
        setCart(newCart)
    }


    const btn = (text) => {
        setBtn(text)
    }

    return (
        <>
            <div className='main-container'>
                <div className="workouts-container">
                    {

                        workOuts.map(workout => <Workout
                            key={workout.id}
                            workout={workout} handleToClick={handleToClick}></Workout>)
                    }
                </div>

                <div className="workout-container">
                    <h3>Kiron khan</h3>
                    <h4>Comilla, Bangladesh</h4>
                    <h2>cart length{cart.length}</h2>

                    <div className='cart-container'>
                        <div>
                            <h4>55 <small>kg</small></h4>
                            <p>Weight</p>
                        </div>
                        <div>
                            <h4>5.3</h4>
                            <p>Height</p>
                        </div>
                        <div >
                            <h4>27 <small>yrs</small></h4>
                            <p>Age</p>
                        </div>
                    </div>
                    <h3>Add A Break</h3>
                    <div className='btn-container'>
                        <button className='btn-cart'><span onClick={(e) => btn(e.target.innerText)}> 10</span>m</button>

                        <button className='btn-cart'><span onClick={(e) => btn(e.target.innerText)}> 20</span>m</button>

                        <button className='btn-cart'> <span onClick={(e) => btn(e.target.innerText)}> 30</span>m</button>

                        <button className='btn-cart'><span onClick={(e) => btn(e.target.innerText)}> 40</span>m</button>
                    </div>
                    <div className='details'>
                        <h3>Exercise Details</h3>
                        <div className='exercise'>
                            <h5 >Exercise time</h5>
                            <h6>{sumTimes}</h6>
                        </div>

                        <div className='break-time'>
                            <h4>Break time</h4>
                            <h6>{btns}m</h6>
                        </div>
                    </div>
                    <button className='btn-aective'>Activity Completed</button>
                </div>

            </div>
            <div>

            </div>
        </>

    );
};

export default WorkOuts;