// import { resolvePath, useLocation } from "react-router-dom"
// import React,{useRef,useEffect, useState} from 'react'
// function Images() {
//     const location = useLocation()

//     const course = location.state?.course;
//     const degree = location.state?.degree;
//     const year = location.state?.year;

//     let RollNo1 = "";
//     let RollNo2 = "";
//     let Z = "";
//     let Y = "";

//     switch (course) {
//         case "A.I & D.S": {
//             if (degree === "BSC") {
//                 switch (year) {
//                     case 2019:
//                         RollNo1 = "";
//                         RollNo2 = "";
                      
//                         break;

//                     case 2020:
//                         RollNo1 = "";
//                         RollNo2 = "";
//                         break;
//                     case 2021:
//                         RollNo1 = "";
//                         RollNo2 = "";
//                         break;
//                     case 2022:
//                         RollNo1 = "";
//                         RollNo2 = "";
//                         break;
//                     case 2023:
//                         RollNo1 = "";
//                         RollNo2 = "";
//                         break;
//                     case 2024:
//                         RollNo = "240252800001";
//                         RollNo1 = "";
//                         RollNo2 = "";
//                         break;
//                     case 2025:
//                         RollNo1 = "";
//                         RollNo2 = "";
//                         break;
//                 }
//             }
//             else {
//                 switch (year) {
//                     case 2019:
//                         RollNo1 = "";
//                         RollNo2 = "";
//                         break;

//                     case 2020:
//                         RollNo1 = "";
//                         RollNo2 = "";
//                         break;
//                     case 2021:
//                         RollNo1 = "";
//                         RollNo2 = "";
//                         break;
//                     case 2022:
//                         RollNo1 = "";
//                         RollNo2 = "";
//                         break;
//                     case 2023:
//                         RollNo1 = "";
//                         RollNo2 = "";
//                         break;
//                     case 2024:
//                         RollNo1 = "240252850001";
//                         RollNo2 = "";
//                         break;
//                     case 2025:
//                         RollNo1 = "";
//                         RollNo2 = "";
//                         break;
//                 }
//             }

//         }
//             break;

//         case "CIVIL": {
//             switch (year) {
//                 case 2019:
//                     RollNo1 = "";
//                     RollNo2 = "";
//                     break;

//                 case 2020:
//                     RollNo1 = "";
//                     RollNo2 = "";
//                     break;
//                 case 2021:
//                     RollNo1 = "210230449001";
//                     RollNo2 = "";
//                     break;
//                 case 2022:
//                     RollNo1 = "";
//                     RollNo2 = "";
//                     break;
//                 case 2023:
//                     RollNo1 = "";
//                     RollNo2 = "";
//                     break;
//                 case 2024:
//                     RollNo1 = "240230440001";
//                     RollNo2 = "";
//                     break;
//                 case 2025:
//                     RollNo1 = "";
//                     RollNo2 = "";
//                     break;
//             }
//         } break;
//         case "C.S.E": {
//             switch (year) {
//                 case 2019:
//                     RollNo1 = "";
//                     RollNo2 = "";
//                     break;

//                 case 2020:
//                     RollNo1 = "200010120001";
//                     RollNo2 = "200010130001";
//                     break;
//                 case 2021:
//                     RollNo1 = "210010130001";
//                     RollNo2 = "";
//                     break;
//                 case 2022:
//                     RollNo1 = "220010130001";
//                     RollNo2 = "";
//                     break;
//                 case 2023:
//                     RollNo1 = "";
//                     RollNo2 = "";
//                     break;
//                 case 2024:
//                     RollNo1 = "";
//                     RollNo2 = "";
//                     break;
//                 case 2025:
//                     RollNo1 = "";
//                     RollNo2 = "";
//                     break;
//             }
//         } break;
//         case "E.E.E": { }
//         case "MECHANICAL": {} 
//         case "PRINTING": {} 
//         case "BIOTECH": { }
//         case "E.S.E": { }
//         case "FOOD TECH.": {} 
//         case "ZOOLOGY": { }
//         case "EDUCATION": { }
//         case "PSYCHOLOGY": { }
//         case "ECONOMICS": { }
//         case "GEOGRAPHY": { }
//         case "HINDI": { }
//         case "LIBRARY": { }
//         case "MASS COMM. ": { }
//         case "LAW": { }
//         case "HEALTH SCIENCE": { }
//         case "PHARMACEUTICAL": { }
//         case "PHYSIOTHERAPY": { }
//         case "YOGA": { }
//         case "RELIGIOUS": { }
//         case "COMMERCE": { }
//         case "HSB": { }
//         case "CHEMISTRY": { }
//         case "MATHEMATICS": { }
//         case "PHYSICS": { }

//     }
 

//     const images =[]

//     const prefix1 = RollNo1.slice(0, -3);
//     const start1 = Number(RollNo1.slice(-3));
//     for (let i = 0; i < 140; i++) {
//         const rollno = prefix1 + String(start1 + i).padStart(3, "0")
//         const imageUrl = `https://gjuonline.ac.in/gjust/uploads/photo/dept/${year}/${rollno}.jpg`;

//         images.push({
//             rollno,
//             url: imageUrl
//         })

//     }

//     if (RollNo2 == "") {
//         return images;
//     }
//     const prefix2 = RollNo2.slice(0, -3);
//     const start2 = Number(RollNo2.slice(-3));
//     for (let i = 0; i < 150; i++) {
//         const rollno = prefix2 + String(start2 + i).padStart(3, "0")
//         const imageUrl = `https://gjuonline.ac.in/gjust/uploads/photo/dept/${year}/${rollno}.jpg`

//         images.push({
//             rollno,
//             url: imageUrl
//         })

// }

// return (<>
//     <div >
//         {images.map((img) => (
//             <div key={img.url} className="images-container">
//                 <img src={img.url} alt={img.rollno} width="120"
//                 />
//                 <p>{img.rollno}</p>
//             </div>
//         ))}

//     </div>
// </>)
// }

// export default Images