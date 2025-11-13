import { BrowserRouter, Routes, Route } from "react-router-dom"
import SubjectDossier from "./components/SubjectDossier"
import ProjectsDossier from "./components/ProjectsDossier"
import ProjectDossier from "./components/ProjectDossier"
import ProjectPage from "./components/projectPageComponents/ProjectPage"
import Arm from "../src/components/Arm"
import '../styles/App.css'

function App() {

  return (
    <BrowserRouter>
      <div className='appContainer'>
        <img src="/IAwoodenBackgroundCompressed.png" className='imageBackground' alt="" />
        <Arm/>
        <Routes>
        <Route path="/" element={<SubjectDossier/>}/>
        <Route path="/projectList" element={<ProjectsDossier/>}/>
        <Route path="/project" element={<ProjectDossier/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App