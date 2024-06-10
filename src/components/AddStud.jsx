import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const AddStud = () => {
    const [stud,setData]=useState(
        {
            "firstname":'',
            "lastname":'',
            "college":'',
            "dob":'',
            "course":'',
            "mobile":'',
            "email":'',
            "address":''
        }
    )
    const inputHandler=(event)=>{
        setData({...stud,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(stud)
        axios.post("https://courseapplogix.onrender.com/addstudents",stud).then(
            (response)=>{

                console.log(response.data)
                if (response.data.=="success") {
                    alert("Successfully added")
                    
                } else {
                    alert("error")
                    
                }

            }
        ).catch()
    }
  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12"><br></br>
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">FirstName</label>
                            <input type="text" className="form-control" name='firstname' value={stud.firstname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">LastName</label>
                        <input type="text" className="form-control" name='lastname' value={stud.lastname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">College</label>
                        <input type="text" className="form-control" name='college' value={stud.college} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">DOB</label>
                        <input type="date" className="form-control" name='dob' value={stud.dob} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Course</label>
                        <input type="text" className="form-control" name='course' value={stud.course} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Mobile</label>
                        <input type="text" className="form-control" name='mobile' value={stud.mobile} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" name='email' value={stud.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Address</label>
                        <input type="text" className="form-control" name='address' value={stud.address} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                            <button className="btn btn-info" onClick={readValue}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStud