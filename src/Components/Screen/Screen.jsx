import React, { useState } from 'react';
import './screen.css';

const Screen = () => {
    const [inputText, setinputText] = useState();
    const [itemList, setitemList] = useState([]);
    const inputOne = (event) => {
        setinputText(event.target.value);
    }
    const change = () => {
        setitemList((oldItems) => {
            return [...oldItems, inputText]
        })
    }
    return (
        <>
            <div className='container'>
                <div className="row">
                    <h2 className='text-center bg-white mt-3'>ToDo List</h2>
                    <div className="col-lg-6">
                        <div className='screen-1 mx-lg-5 mt-5'>
                            <input type='text' placeholder='what you want to Add?' onChange={inputOne} />
                            <button className='btn btn-primary' onClick={change}>+</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='screen-1 mx-lg-5 mt-5'>
                            <ol className='order-list'>
                                {itemList.map((items) => {
                                    return (

                                        <li>{items}</li>
                                    )
                                })}

                            </ol>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Screen