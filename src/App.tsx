import { Burger } from './components/burger/Burger';
import { Mail } from './components/mail/Mail';
import { Main } from './components/main/Main';
import { Projects } from './components/projects/Projects';
import { SideBar } from './components/sidebar/SideBar';
import { Work } from './components/work/Work';

function App() {
  return (
    <div className='App'>
      <Burger/>
      <SideBar/>
      <Main />
      <Work/>
      <Projects/>
      <Mail/>
    </div>
  );
}

export default App;
