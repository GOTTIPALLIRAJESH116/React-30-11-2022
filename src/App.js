/*import ClassComponent from "./ClassComponent"
import ClassComponent1 from "./ClassComponent1"

function App(){
  return(
      <section>
          <p>hello world</p>
          <h1>this is rajesh</h1>
          <img src="https://img.jagrantv.com/webstories/ws577/1639894461-pardeep-narwal-cover.jpg" width="20%" alt="pardeep"/>
          <ClassComponent/>
          <ClassComponent1/>
      </section>
    )
}
export default App*/

/*import PropsExample from './PropsExample'
function App(){
  return(
      <div>
        <h1>This is Rajesh</h1>
        <PropsExample name="Rajesh" age="20"/>
      </div>
    )
}
export default App*/

//import PropsExample1 from './PropsExample1'
// import StateExample from './StateExample'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
function App(){
  return(
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App