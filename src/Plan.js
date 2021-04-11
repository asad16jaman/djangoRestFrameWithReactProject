import React from 'react'

export default function Plan(props) {

    return (
        <div className="row shadow p-2 my-3">
            <div className="col-9">
                <li className="text-white">
                    <span className="">{props.myvalue}</span>   
                </li>
            </div>
            <div className="col-3">
                <button className="bg-white text-danger btn px-3 btn-sm ml-5" onClick={()=>{ return props.handelar(props.myind)}}>X</button>
            </div>
        </div>
        
    )
}
