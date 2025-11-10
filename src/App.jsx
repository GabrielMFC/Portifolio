import SubjectDossier from "./components/SubjectDossier"
import ProjectDossier from "./components/ProjectDossier"
import Arm from "../src/components/Arm"
import '../styles/App.css'

function App() {

  return (
    <div className='appContainer'>
      <img src="/IAwoodenBackgroundCompressed.png" className='imageBackground' alt="" />
      <Arm/>
      <SubjectDossier/>
    </div>
  )
}

export default App