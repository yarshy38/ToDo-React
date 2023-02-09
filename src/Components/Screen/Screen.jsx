import React, { useState } from 'react';
import './screen.css';

const Screen = () => {
    const [input, setInput] = useState();
    const [item, setItem] = useState([]);
    const inputEvent = (event) => {
        // console.log(event.target.value);
        setInput(event.target.value);
    }
    const AddThis = () => {
        setItem((olditems) => {
            return [...olditems, input]
        })
    }
    return (
        <>
            <div className='container'>
                <div className="row">
                    <h2 className='text-center bg-white mt-3'>ToDo List</h2>
                    <div className="col-lg-6">
                        <div className='screen-1 mx-lg-5 mt-5'>
                            <input type='text' placeholder='what you want to Add?' onChange={inputEvent} />
                            <button className='btn btn-primary' onClick={AddThis}>+</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='screen-2 mx-lg-5 mt-5'>


                            <div class="card order-list">
                                <ul class="list-group list-group-flush">
                                    {item.map((items) => {
                                        return (
                                            <li class="list-group-item">{items}</li>
                                        )
                                    })}
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Screen