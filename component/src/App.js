import './App.css';
import FolderExplorer from './components/file-explorer';
import Search from './components/search/search';
import Gift from './components/gift/gift';
import ToDo from './components/to-do';
import { todoData } from './components/to-do/data';
import TrafficLight from './components/traffic/traffic-light';
import Table from './components/Table';
import Calculator from './components/calculator';

function App() {
  return (
     <div>
       {/* <FolderExplorer/> */}
       {/* <TrafficLight/> */}
       {/* <ToDo 
        todos={todoData}
       /> */}
       {/* <Search/> */}
       {/* <Gift/> */}
       {/* <Table/> */}
       <Calculator/>
     </div>
  );
}

export default App;
