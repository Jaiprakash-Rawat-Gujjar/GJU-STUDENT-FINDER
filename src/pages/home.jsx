
import { useNavigate } from "react-router-dom";
import React , {useEffect, useRef, useState} from 'react';


function Home(){
 const navigate= useNavigate();
 const [course, setCourse] = useState("")

  function courseChange(coursename) {
    setCourse(coursename)
   
    navigate("/Cred",{
      state:{coursename}
    })
  }
  const getcourses = [
    "A.I & D.S",
    "A.I & M.L",
    "BME",
    "BUSINESS",
    "C.S.E",
    "CHEMISTRY",
    "CIVIL",
    "ECE",
    "ELECTRICAL",
    "EMERGING",
    "EVS",
    "FINANCE",
    "FOOD TECH.",
    "HUMAN RESOURCES",
    "INTERNATIONAL BUSINESS",
    "IT",
    "MARKETING",
    "MATHS",
    "MECHANICAL",
    "NANO",
    "PACKAGING",
    "PHARMA",
    "PHYSICS",
    "PHYSIOTHERAPY",
    "PRINTING"
  ]
  const [Rollno,setRollNo]=useState("")
  const [url,seturl]=useState("")
  const [open, setOpen] = useState(false);
  function  handlerollnochange(event){
          setRollNo(event.target.value
          );
  }
  function searchRollNO() {
    const year=20+ Rollno.slice(0,2)
    seturl(`https://gjuonline.ac.in/gjust/uploads/photo/dept/${year}/${Rollno}.jpg`)
    setOpen(true);
  }
  console.log(open)
  const handlesearch=(e)=>{
   if(e.key === "Enter") searchRollNO();
  }
  useEffect(()=>{

    if(!open) return;
    const handleclick =() =>{
      setOpen(false);
      seturl("")
    }
    const timer=setTimeout(() => {
       document.addEventListener("click",handleclick)
    }, 0);
   

    return ()=>{
      clearInterval(timer)
      document.removeEventListener("click",handleclick)
    }
  },[open])

    return (
        <> 
        <div className="search-course">
          <h1 className='course-text'>Course's</h1>
          <div className="searchbar">
            <input type="number" className="search1" placeholder="Enter Rollno..." onChange={handlerollnochange}
            onKeyDown={handlesearch}/> 
            <button className="search-btn"  onClick={searchRollNO}>&#8981;    </button>
          </div>
          { open && url &&(
            <div className="overlay" onClick={
              ()=>{
                seturl(""),
                setOpen(false)
              }
            }>
              <div className="popup" onClick={(e) => e.stopPropagation()}>
               <img src={url} alt="Rollno" /> 
              </div>
              
            </div>
            
          )}
         
        </div>
        
          <div className='courses-container'>
           <div className="courses">
             {getcourses.map((course,index) => {
            return(
               <button key={index} className="courses-btn" onClick={()=>courseChange(course)}>
                {course} 
                </button>
            )
           
           })}
           </div>
          
          </div>
        </>
    )
}
export default Home;