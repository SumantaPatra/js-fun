import './App.css';
import FolderExplorer from './components/Folder';
import Search from './components/search/search';
import Gift from './components/gift/gift';
import ToDo from './components/to-do';
import { todoData } from './components/to-do/data';
import TrafficLight from './components/traffic/traffic-light';
import Table from './components/Table';
import Calculator from './components/calculator';
import Star from './components/star';
import Home from './components/complete';
import TicTacToe from './components/tic-tac-toe';
import Grid from './components/color';
import Parent from './components/renders';
import Dropdown from './components/dropdown';
import AuthProvider from './components/dropdown/context';

function App() {
  const data = [[1,0,1],[1,1,0],[0,1,1]]
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
       {/* <Star/> */}
       {/* <Home/> */}
       {/* <FolderExplorer/> */}
       {/* <Home/> */}
       {/* <TicTacToe/> */}
       {/* <Grid data={data}/> */}
       {/* <Parent/> */}
       <AuthProvider>
       <Dropdown>
        <Dropdown.multiSelect/>
       </Dropdown>
       </AuthProvider>
     </div>
  );
}

export default App;
