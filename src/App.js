import React,{useEffect} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import  {TooltipComponent} from '@syncfusion/ej2-react-popups'
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
 import  ColorPicker  from './pages/ColorPicker.js';
import Ecommerce from './pages/Ecommerce.js'
import Orders from './pages/Orders.js'
import Editor from './pages/Editor.js'
import Customers from './pages/Customers.js'
import Kanban from './pages/Kanban.js'
import Employees from './pages/Employees.js'
import Calendar from './pages/Calendar.js'
import Area from './pages/Charts/Area.js'
import Line from './pages/Charts/Line.js'
import Bar from './pages/Charts/Bar.js'
import ColorMapping from './pages/Charts/ColorMapping.js'
import Financial from './pages/Charts/Financial.js'
import Stacked from './pages/Charts/Stacked.js';
import Pie from './pages/Charts/Pie.js';
// import Pyramid from './pages/Charts/Pyramid.js';
import { useStateContext } from './contexts/ContextProvider';


// import {Area,Bar,ColorMapping,Financial,Line,Pie,Stacked,Pyramid,Calendar,ColorPicker,Ecommerce,Orders,Editor,Customers,Kanban,Employees} from "./pages";
import './App.css'
const App = () => {
  const {activeMenu,themeSettings,setThemeSettings,currentColor,currentMode} =useStateContext()
  return (
    // <h1 className='underline text-3xl'>App</h1>
    <div className={currentMode === 'Dark' ?'dark':''}>
        <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
                    <TooltipComponent content="Settings" position='Top'>
                          <button onClick={()=>setThemeSettings(true)} type="button" className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background:currentColor,borderRadius:"50%"}}>
                              <FiSettings />
                          </button>
                    </TooltipComponent>

                </div>
                {activeMenu ? (
                  <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'> <Sidebar/> </div>

                ) :(
                  <div className='w-0 dark:bg-secondary-dark-bg'><Sidebar/> </div>
                )
              }
              <div className={
                `dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full 
                ${activeMenu ?'md:ml-72' :'flex-2'}`
                }>
                  <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg
                  navbar w-full'>
                      <Navbar/>

                  </div>

                  <div>
                    {themeSettings && <ThemeSettings/>}
                      <Routes>
                        {/* Dashboard */}
                          <Route path='/' element={<Ecommerce />}/>
                          <Route path='/ecommerce' element={<Ecommerce/>}/>
                          {/* Pages */}
                          <Route path='/orders' element={<Orders />}/>
                          <Route path='/employees' element={<Employees />}/>
                          <Route path='/customers' element={<Customers />}/>
                          {/* Apps */}

                           <Route path='/Kanban' element={<Kanban />}/>
                          <Route path='/editor' element={<Editor />}/> 
                          <Route path='/calendar' element={<Calendar />}/>
                          <Route path='/color-picker' element={<ColorPicker />}/>

                          {/* Charts */}


                           <Route path='/line' element={<Line/>}/>
                          <Route path='/area' element={<Area/>}/>
                          <Route path='/bar' element={<Bar/>}/>
                          <Route path='/pie' element={<Pie/>}/>
                          <Route path='/financial' element={<Financial/>}/>
                          {/* <Route path='/pyramid' element={<Pyramid />}/> */}
                          <Route path='/stacked' element={<Stacked />}/> 
                          <Route path='/color-mapping' element={<ColorMapping />}/> 



                           





                      </Routes>
                  </div>
                  </div>

            </div>
        </BrowserRouter>
    </div>
  )
}

export default App