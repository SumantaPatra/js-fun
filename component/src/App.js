import './App.css';
import FolderExplorer from './components/file-explorer';
import ToDo from './components/to-do';
import { todoData } from './components/to-do/data';
import TrafficLight from './components/traffic/traffic-light';

function App() {
  return (
     <div>
       {/* <FolderExplorer/> */}
       {/* <TrafficLight/> */}
       <ToDo 
        todos={todoData}
       />
     </div>
  );
}

export default App;
