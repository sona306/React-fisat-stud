import React, { useState } from 'react'
import Nav from './Nav'

const Search = () => {
    const [stud,setData]=useState(
        {
            "name":''
        }
    )
    const inputHandler=(event)=>{
        setData({...stud,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(stud)
    }
  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={stud.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                            <button className="btn btn-primary" onClick={readValue}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search