import './App.css';
import GeneralInfo from './components/GeneralInfo'
import PracExperience from './components/PracExperience';
import EduExperience from './components/EduExperience'

function App() {
  return (
    <div className="App">
      <h1>My CV Project</h1>
      <GeneralInfo />
      <EduExperience />
      <PracExperience/>
    </div>
  );
}

export default App;
