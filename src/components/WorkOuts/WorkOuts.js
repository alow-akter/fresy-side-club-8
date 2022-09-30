import React, { useEffect, useState } from 'react';
import Workout from '../Workout/Workout';
import './WrokOuts.css'
import Swal from 'sweetalert2'


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
        localStorage.setItem('minutes', text)
        setBtn(text)
    }
    const localData = () => {
        let firstAdd = {};
        const getValue = localStorage.getItem('minutes')
        if (getValue) {
            firstAdd = JSON.parse(getValue)
        }
        else {
            const setValue = localStorage.setItem('minutes', 0)
            firstAdd = JSON.stringify(setValue)
        }
        btn(firstAdd)
    }

    const aectiveBtn = () => {
        Swal.fire(
            'Good job!',
            'Your work on this project is impressive!',
            'success'
        )
    }

    return (
        <>
            <div onLoad={localData} className='main-container'>
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
                    <button onClick={aectiveBtn} className='btn-aective'>Activity Completed</button>
                </div>

            </div>
            <div className='question-container'>
                <div className='q-one'>
                    <h1>What are the differences between props and state ?</h1>
                    <h3>Props:</h3>

                    <p>The Data is passed from one component to another.
                        It is Immutable (cannot be modified).
                        Props can be used with state and functional components.Props are read-only.</p>
                    <h3>State:</h3>

                    <p>The Data is passed within the component only.It is Mutable ( can be modified).State can be used only with the state components/class component (Before 16.0).State is both read and write.</p>
                </div>
                <div className='q-two'>
                    <h2>How does React work ?</h2>
                    <p>
                        ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code
                    </p>

                </div>
                <div className='q-three'>
                    <h2>What else does useEffect do without loading data?</h2>
                    <p>useEffect, you invoke side effects from within functional components, which is an important concept to understand in the React Hooks era. Working with the side effects invoked by the useEffect Hook may seem cumbersome at first, but you’ll eventually learn everything makes a lot of sense.</p>
                </div>
            </div>
        </>

    );
};

export default WorkOuts;