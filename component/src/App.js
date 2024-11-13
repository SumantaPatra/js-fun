import './App.css';
import FolderExplorer from './components/file-explorer';
import Search from './components/search/search';
import Gift from './components/gift/gift';
import ToDo from './components/to-do';
import { todoData } from './components/to-do/data';
import TrafficLight from './components/traffic/traffic-light';
import Table from './components/Table';
import Calculator from './components/calculator';
import Star from './components/star';

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
       {/* <Calculator/> */}
       <Star/>
     </div>
  );
}

export default App;
