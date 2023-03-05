import React,{ useState} from 'react'
import TravelHome from '../TravelHome'
import './general.css'


const MainImage = () => {

const tempvalues = {name:"",email:"",key:2}

const [values , setvalues] = useState([])

const addvalues = () => {
    const currvalues = [...values]
    const size = currvalues.length
    tempvalues.key = size+1
    currvalues.push(tempvalues)
    setvalues(currvalues)
}

const handleChange= (key,e) => {
    console.log(e.target.value)
    const currvalues = [...values]
    currvalues[key-1][e.target.name] = e.target.value
    setvalues(currvalues)

    console.log(currvalues)
}

// useEffect(()=>{
//     console.log(values)
// },[values])


  return (
    <>
    <div>
     
<TravelHome/>



      
         <section className="tour-search">
        <div className="container">

          <form action="" className="tour-search-form">

            <div className="input-wrapper">
              <label for="destination" className="input-label">Enter Destination*</label>

              <input type="text" name="destination" id="destination" required placeholder="Enter Destination"
                className="input-field"/>
            </div>

            {/* <div className="input-wrapper">
              <label for="people" className="input-label">*</label>

              <input type="number" name="people" id="people" required placeholder="No.of People" className="input-field"/>
            </div> */}

            <div className="input-wrapper">
              <label for="checkin" className="input-label">Date of Arriving*</label>

              <input type="date" name="checkin" id="checkin" required className="input-field"/>
            </div>

            <div className="input-wrapper">
              <label for="checkout" className="input-label">Date of Depature*</label>

              <input type="date" name="checkout" id="checkout" required className="input-field"/>
            </div>

            <div className="input-wrapper">
              <label for="destination" className="input-label">Enter Your Hobbies*</label>

              <input type="text" name="destination" id="destination" required placeholder="Enter Your Hobbies"
                className="input-field"/>
            </div>

            <button type="submit" className="btn btn-secondary">Get Details</button>

          </form>

        </div>
       
      </section>

      <div className="container mt-4" style={{width:"30%" , display:"flex", justifyContent:"center" }}>



{values.length===0 && <div className="btn-group">
  <button className="btn btn-primary mb-4">Unplanned</button>

  <button className="btn btn-secondary mb-4" onClick={addvalues}>Planned</button>
</div>}
<div>
{values.map((unit)=>{
    return (
        <>
        
        <div className='d-inline-flex gap-4'>
        <div class="input-group mb-3">
            <input type="text" class="form-control mt-3 " placeholder="Location" name="name" aria-label="Username" aria-describedby="basic-addon1" onChange={(e)=>handleChange(unit.key,e)}  value={unit.name}/>
        </div>
        <div class="input-group mb-3">
            <input type="text" class="form-control ml-3 mt-3" placeholder="Time" name="email" aria-label="Username" aria-describedby="basic-addon1" onChange={(e)=>handleChange(unit.key,e)}  value={unit.email}/>
        </div>
        </div>
        </>
    )
})}
{values.length>0 && (
  
    <button type="button" class="btn btn-success mb-5" style={{justifyContent:"center", marginLeft:"33%"}} onClick={addvalues}>Success</button>
)}
</div>


</div>

      
    </div>


   
</>
  )
}

export default MainImage
