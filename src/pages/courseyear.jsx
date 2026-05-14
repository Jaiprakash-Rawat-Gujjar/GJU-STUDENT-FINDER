import React,{useState,useEffect} from "react";
import {useNavigate,useLocation} from "react-router-dom";

function Cred(){
    const [degree,setDegree]=useState("")
    const [year,setYear]=useState()
    const navigate=useNavigate()
    const location =useLocation()
    const course=location.state?.coursename

    function degreeChange(deg){
        setDegree(deg) 
    }
    const getInfo = {
        "A.I & D.S": {
            degrees: ["BTECH", "MTECH", "BSC", "MSC"],
            startyear: "2024"
        },

        "C.S.E": {
            degrees: ["BTECH", "MTECH", "MCA"],
            startyear: "2015"
        },

        "MECHANICAL": {
            degrees: ["BTECH"],
            startyear: "2015"
        },

        "CIVIL": {
            degrees: ["BTECH"],
            startyear: "2018"
        },

        "BUSINESS": {
            degrees: ["MBA"],
            startyear: "2021"
        },

        "PRINTING": {
            degrees: ["BTECH", "MTECH", "MBA"],
            startyear: "2015"
        },

        "PACKAGING": {
            degrees: ["BTECH"],
            startyear: "2015"
        },

        "ECE": {
            degrees: ["BTECH", "MTECH"],
            startyear: "2015"
        },

        "IT": {
            degrees: ["BTECH"],
            startyear: "2015"
        },

        "A.I & M.L": {
            degrees: ["BTECH"],
            startyear: "2021"
        },

        "EMERGING": {
            degrees: ["BTECH"],
            startyear: "2021"
        },

        "BME": {
            degrees: ["BTECH", "MTECH"],
            startyear: "2015"
        },

        "ELECTRICAL": {
            degrees: ["BTECH"],
            startyear: "2018"
        },

        "FINANCE": {
            degrees: ["BTECH", "MBA", "MCOM"],
            startyear: "2017"
        },

        "PHARMA": {
            degrees: ["BTECH", "BPHARMA", "MPHARMA", "MSC"],
            startyear: "2015"
        },

        "FOOD TECH.": {
            degrees: ["BTECH", "MTECH", "MCOM", "MSC"],
            startyear: "2015"
        },

        "INTERNATIONAL BUSINESS": {
            degrees: ["MBA"],
            startyear: "2017"
        },

        "HUMAN RESOURCES": {
            degrees: ["MBA"],
            startyear: ""
        },

        "MARKETING": {
            degrees: ["MBA"],
            startyear: ""
        },

        "NANO": {
            degrees: ["MSC"],
            startyear: "2017"
        },

        "EVS": {
            degrees: ["MTECH", "MSC"],
            startyear: "2015"
        },

        "CHEMISTRY": {
            degrees: ["BSC", "MSC"],
            startyear: "2015"
        },

        "MATHS": {
            degrees: ["MCOM", "MSC"],
            startyear: "2017"
        },

        "PHYSICS": {
            degrees: ["BSC", "MSC"],
            startyear: "2017"
        },

        "PHYSIOTHERAPY": {
            degrees: ["BPT"],
            startyear: "2021"
        }
    };
    const degrees= getInfo[course].degrees || [];
    const startyear=getInfo[course].startyear||"";
    const endyear=2026;
    const years= ( startyear !== "" ? Array.from(
            {length : endyear - Number(startyear) +1},
            (_,i) => Number(startyear)+ i
        ):"")
    function yearchange(value){
        
        if(!degree){
            alert("Please Select a Degree");
            return;
        }
        else{ navigate("/Images",{
            state:{
                course,
                degree,
                year:value,
            }
        })

        }
    }
     useEffect(()=>{
        
        
    },[year])
    useEffect(()=>{
        
    },[degree])
    return (
        <>
            <div className="cred">
                <div className="course-cred"> 
                    <span>{course} </span>
                </div>
               
                <div className="degree-coye">
                    <h1 className="degree-credtext">Degree</h1>
                    <div className="degree-credclass">
                        {degrees.map((deg) => (
                        <button key={deg} className="degree-btn" onClick={()=> degreeChange(deg)}>
                            {deg}
                        </button>
                    ))}  
                    </div>
                  
                </div>
                <div className="year-coye">
                    <h1 className="year-credtext">Year</h1>
                    <div className="year-credclass">
                        {years.map((y) =>(
                        <button
                        key={y} 
                        onClick={()=>{yearchange(y)}}
                        disabled={y === 2025 || y === 2026}
                        className="year-btn"
                        >{y}</button>
                    ))}  
                    </div>
                </div>
            </div>
       
        </>
    )

}
export default Cred
