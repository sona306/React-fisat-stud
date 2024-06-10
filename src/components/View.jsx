import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const View = () => {
    const [stud,setData]=useState([])
    const fetchData=()=>{
        axios.get("https://courseapplogix.onrender.com/getdata").then(
            (response)=>{
                    console.log(response.data)
                    setData(response.data)
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        )
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                    <div className="row">
                            <table class="table table-success table-striped">
                                <thead>
                                    <tr>
                                    <th scope="col">FirstName</th>
                                    <th scope="col">LastName</th>
                                    <th scope="col">College</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stud.map(
                                        (value,index)=>
                                            {
                                               return <tr>
                                                <td>{value.firstname}</td>
                                                <td>{value.lastname}</td>
                                                <td>{value.college}</td>
                                                <td>{value.dob}</td>
                                                <td>{value.course}</td>
                                                <td>{value.mobile}</td>
                                                <td>{value.email}</td>
                                                <td>{value.address}</td>
                                                </tr>
                                            }
                                    )

                                    }
                                </tbody>

                            </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}



export default View