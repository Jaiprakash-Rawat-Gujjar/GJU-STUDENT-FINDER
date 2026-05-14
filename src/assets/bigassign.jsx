  // const RollnoData = {
    //     "A.I & D.S": {
    //         BSC: createEmptyYearData(),
    //         MSC: { ...createEmptyYearData() },
    //         BTECH: { ...createEmptyYearData() },
    //         MTECH: { ...createEmptyYearData() },
           

    //     },
    //     "C.S.E": {
    //         MCA: createEmptyYearData(),
    //         BTECH: { ...createEmptyYearData() },
    //         MTECH: { ...createEmptyYearData() },

    //     },
    //     "MECHANICAL":{
    //         BTECH:createEmptyYearData()
    //     },
    //     "CIVIL":{
    //         BTECH:createEmptyYearData()
    //     },
    //     "BUSINESS":{
    //         MCA:createEmptyYearData(),
    //         MBA:{...createEmptyYearData()}
    //     },
    //     "PRINTING":{
    //         BTECH: createEmptyYearData(),
    //         MTECH:{...createEmptyYearData()},
    //         MBA:{...createEmptyYearData()},
    //     },
    //     "PACKAGING":{
    //         BTECH: createEmptyYearData()
    //     },
    //     "ECE":{
    //         BTECH: createEmptyYearData(),
    //         MTECH:{...createEmptyYearData()}
    //     },
    //     "IT":{
    //         BTECH:createEmptyYearData(),

    //     },
    //     "A.I & M.L":{
    //         BTECH:createEmptyYearData(),
    //     },
    //     "EMERGING":{
    //         BTECH:createEmptyYearData(),
    //     },
    //     "BME":{
    //         BTECH:createEmptyYearData(),
    //         MSC:{...createEmptyYearData()},
    //         MCOM:{...createEmptyYearData()}
    //     },
    //     "ELECTRICAL":{
    //         BTECH:createEmptyYearData()
    //     },
    //     "FINANCE":{
    //         BTECH:createEmptyYearData(),
    //         MBA:{...createEmptyYearData()},
    //         MCOM:{...createEmptyYearData()}
    //     },
    //     "PHARMA":{
    //         BTECH:createEmptyYearData(),
    //         MPHARMA:{...createEmptyYearData()},
    //         BPHARMA:{...createEmptyYearData()},
    //         MSC:{...createEmptyYearData()}
    //     },
    //     "FOOD TECH":{
    //         BTECH:createEmptyYearData(),
    //         MTECH:{...createEmptyYearData()},
    //         MSC:{...createEmptyYearData()},
    //         MCOM:{...createEmptyYearData()}
    //     },
    //     "INTERNATION BUSINESS":{
    //         MBA:createEmptyYearData()
    //     },
    //     "HUMAN RESOURCES":{
    //         MBA:createEmptyYearData()
    //     },
    //     "MARKETING":{
    //         MBA:createEmptyYearData()
    //     },
    //     "NANO":{
    //         MSC:createEmptyYearData()
    //     },
    //     "EVS":{
    //         MSC:createEmptyYearData(),
    //         MTECH:{...createEmptyYearData()}
    //     },
    //     "CHEMISTRY":{
    //         BSC:createEmptyYearData(),
    //         MSC:{...createEmptyYearData()}
    //     },
    //     "MATHS":{
    //         MSC:createEmptyYearData(),
    //         MCOM:{...createEmptyYearData()}

    //     },
    //     "PHYSICS":{
    //         BSC:createEmptyYearData(),
    //         MSC:{...createEmptyYearData()}
    //     },
    //     "PHYSIOTHERAPY":{
    //         BPT:createEmptyYearData()

    //     }




    // };
    
  {
        //   async function getImages() {
      //       function checkImages(url) {
      //           return new Promise((resolve) => {
      //               const img = new Image();

      //               img.onload = () => resolve(true);
      //               img.onerror = () => resolve(false);
      //               img.src = url;
      //           });
      //       }
      //       function imagesUrl() {
      //            {if (RollNo1 == "" || isCancelled) return;
      //               let failcount = 0;
                    
      //               const prefix1 = RollNo1.slice(0, -3);
      //               const start1 = Number(RollNo1.slice(-3));
      //               for (let i = 0; i < 140; i++) {
      //                   if (isCancelled) return;
      //                   const rollno = prefix1 + String(start1 + i).padStart(3, "0")
      //                   const imageUrl = `https://gjuonline.ac.in/gjust/uploads/photo/dept/${year}/${rollno}.jpg`;

      //                   const valid = await checkImages(imageUrl)
      //                  if (isCancelled) return;
      //                   if (valid) {
      //                       setImages(prev => [...prev, {rollno,url:imageUrl}]);
      //                   }
      //                   else {
      //                       failcount++;
      //                       if (failcount > 6) { break; }
      //                   }


      //               }
      //               if (RollNo2 == "" || isCancelled) return;
                    
      //               failcount = 0;
      //               const prefix2 = RollNo2.slice(0, -3);
      //               const start2 = Number(RollNo2.slice(-3));
      //               for (let i = 0; i < 150; i++) {
      //                   if (isCancelled) return;
      //                   const rollno = prefix2 + String(start2 + i).padStart(3, "0")
      //                   const imageUrl = `https://gjuonline.ac.in/gjust/uploads/photo/dept/${year}/${rollno}.jpg`

      //                   const valid = await checkImages(imageUrl)
      //                   if (isCancelled) return;

      //                   if (valid) {
      //                      setImages(prev => [...prev, {rollno,url:imageUrl}
      //                       ]);
      //                   }
      //                   else {
      //                       failcount++;
      //                       if (failcount > 6) { break; }
      //                   }
      //               }
      //           }
      //  }
      //       try {
      //            setLoading(true);
      //            await imagesUrl()
      //       }

      //       catch (error) {
      //           console.log(error)
      //       }
      //       finally{
      //         setLoading(false);
      //       }
      //   } 
      //   setImages([]);
      //   getImages()
      //   return () =>{
      //     isCancelled=true;
      //   }
  }