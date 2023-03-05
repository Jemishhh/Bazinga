import React,{useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import React from "react"
import { upload } from "./upload"


const Profile = () => {

  const [user, setUser] = useState({
    email: "",
    username: "",
    gender: "",
    bio: "",
    dob:"",
    hobbies:[""]
})

const handleChange = e => {
  const { name, value } = e.target
  setUser({
      ...user,
      [name]: value
  })
}

const Prof = (user) => {
  console.log(user)
  const {id} = useParams()
  console.log(id)
  axios.put(`http://localhost:8000/api/users/${id}`, {mode:"cors"})  
  .then(response => {
    setUser(response.data);
  })
  .catch(error => {
    console.error(error);
  })
}
  return (
    <>
    <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
            
        <upload/> 
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-12"><label className="labels">Username</label><input type="text" className="form-control" placeholder="username" value={user.username}/></div>
                </div>
                <div className="row mt-3">
                    
                   <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" name="email" onChange={handleChange} value={user.email}/></div>
                   <div className="col-md-12"><label className="labels">Gender</label><input type="text" className="form-control" placeholder="Male" onChange={handleChange} name="gender" value={user.gender}/></div>
                  <div className="col-md-12"><label className="labels">Bio</label><input type="textarea" className="form-control" placeholder="Bio" onChange={handleChange} name="bio" value={user.bio}/></div>
                  <div className="col-md-12"><label className="labels">DOB</label><input type="date" className="form-control" placeholder="DOB" onChange={handleChange} name="birth" value={user.birth}/></div>
                
                </div>
               
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={Prof(user)}>Save Profile</button></div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="p-3 py-5">
            
           
                <div className="col-md-12"><label className="labels">Hobbies</label></div> <br/>
                <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>

    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>  
          </div>
        </div>
    </div>
</div>

</>
  )
}

export default Profile
