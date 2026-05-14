import { Routes, Route ,Navigate} from "react-router-dom";

import Header from './header'
import Home from './pages/home'
import Cred from './pages/courseyear'
import Images from './pages/studnets'
import Footer from './footer'

function App(){
  return (<>
  <div className="app">
    <Header/>
  <div className="page-content">
     <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/Cred" element={<Cred />}/>
           <Route path="Images" element={<Images/>}/>
           <Route path="*" element={<Navigate to="/" />}/>
         </Routes>
  </div>
    <Footer/>
  </div>    
  </>)

}
export default App;