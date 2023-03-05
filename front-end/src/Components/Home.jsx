import { useState, useEffect } from 'react'
import "./home.css"
// import Navbar from './Navbar/Navbar'
import Services from './Navbar/Services'
import Picture from './Picture'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Home = () => {

    const [user,setUser] = useState({})

    const {id} = useParams();
    useEffect(()=>{
        const getUser = async ()=>{
            try{
                const res = await axios.get(`http://localhost:8000/api/users?id=${id}`,{mode:'cors'})
                setUser(res)
            }catch(error){
                console.log(error.message)
            }
        }
        getUser();
        console.log("user",user)

    },[user])

  return (
    <>
  <section className="bg-light">
    <div className="container1">
        <div className="row">
            <div className="col-lg-12 mb-4 mb-sm-5">
                <div className="card1 card-style1 border-0">
                    <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 " >
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="..."/>
                            </div>
                            <div className="col-lg-6 px-xl-10">
                                <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                                    <h3 className="h2 text-white mb-0">Devraj Anchaan</h3>
                                    
                                </div>
                                <ul className="list-unstyled mb-1-9">
                                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Username:</span> {user.data.username}</li>
                                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Email id</span> {user.data.email}</li>
                                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Gender</span> {user.data.gender}</li>
                                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Bio</span>{user.data.bio}</li>
                                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Birth Date</span>{user.data.birth}</li>
                                    {/* <li className="display-28"><span className="display-26 text-secondary me-2 font-weight-600">Phone:</span> 507 - 541 - 4567</li> */}
                                </ul>
                                <ul className="social-icon-style1 list-unstyled mb-0 ps-0">
                                    <li><a href="#!"><i className="ti-twitter-alt"></i></a></li>
                                    <li><a href="#!"><i className="ti-facebook"></i></a></li>
                                    <li><a href="#!"><i className="ti-pinterest"></i></a></li>
                                    <li><a href="#!"><i className="ti-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
           
        </div>
    </div>
</section>
    
    <Services/>
    <Picture/>
    </>

  )
}

export default Home
