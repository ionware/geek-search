import React from 'react';

const onInputClick = (e) => {
}
export default (props) => {
    return (
        <div className='row text-center'>
            <div className='input-group col-sm-8 col-sm-offset-2' style={{padding: '20px'}}>
                <div className='input-group-addon'>
                    <span className='glyphicon glyphicon-search'></span>
                </div>
                <input className='form-control' onClick={onInputClick}/>
                <span className='input-group-btn'>
                    <button className='btn btn-primary'>Search</button>
                </span>
            </div>
        </div>
    )
}