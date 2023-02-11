import React, { useState } from 'react';
import './screen.css';
import Todolist from './Todolist';

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
        setInput('');
    }

    const delterItems = (id) => {
        console.log('item deleted');

        setItem((olditems) => {
            return olditems.filter((arrElem, index) => {
                return index !== id
            })
        })
    }
    return (
        <>
            <div className='container'>
                <div className="row">
                    <h2 className='text-center bg-white mt-3'>ToDo List</h2>
                    <div className="col-lg-6">
                        <div className='screen-1 mx-lg-5 mt-5'>
                            <input type='text' placeholder='what you want to Add?' value={input} onChange={inputEvent} />
                            <button className='btn btn-primary' onClick={AddThis}>+</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='screen-2 mx-lg-5 mt-5'>



                            <ul class="list-group list-group-flush">
                                {item.map((items, index) => {
                                    return (
                                        <Todolist
                                            key={index}
                                            id={index}
                                            text={items}
                                            onSelect={delterItems} />
                                    )
                                })}
                            </ul>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

export default Screen