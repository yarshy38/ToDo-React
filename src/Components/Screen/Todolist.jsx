import React from 'react'

const Todolist = (props) => {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-2">
                        <button className='btn btn-danger' onClick={() => {
                            props.onSelect(props.id)
                        }}>x</button>
                    </div>
                    <div className="col-lg-8">
                        <li class="list-group-item">{props.text}</li>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Todolist