import React from 'react';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from "./pages/Homepage.jsx"
import Error404 from "./pages/Error404.jsx"
import Login from "./pages/Login.jsx"
import ScheduleRepairs from "./pages/Schedule_repairs.jsx"
import SchedulenewRepairs from "./pages/Schedule_new_repairs.jsx"
import ManagementConsole from "./pages/Management_Console.jsx"
import ManageUsers from  "./pages/Management_Console_Users.jsx"
import AdminSelect from "./pages/Admin_Select.jsx"
import WorkshopForum from "./pages/Workshop_Forum.jsx"
import NewComment from "./pages/Add_new_Comment.jsx"
import ManagementMessages from "./pages/Management_Messages.jsx"
import RegisterAcc from "./pages/Register.jsx"
import ManagePCParts from "./pages/Management_Console_PCParts.jsx"
import Custom_PC from "./pages/Custom_PC.jsx"
import Custom_PC_New from "./pages/Custom_PC_New.jsx"
import ManageOrders from "./pages/Manage_Orders.jsx"

function App() {


  return (
<div className="App">

      <BrowserRouter>
      
      <Routes>

        <Route path="/" element={<Homepage/>}/>

        <Route path="/login" element={<Login/>}/>

        <Route path="*" element={<Error404/>} />

        <Route path="/schedule_repairs" element={<ScheduleRepairs/>} />

        <Route path="/schedule_new_repairs" element={<SchedulenewRepairs/>} />

        <Route path="/Management_Console" element={<ManagementConsole/>}/> 

        <Route path="/Management_Console_Users" element={<ManageUsers/>}/> 

        <Route path="/Admin_Select" element={<AdminSelect/>}/> 

        <Route path="/Workshop_Forum" element={<WorkshopForum/>}/> 

        <Route path="/Add_new_Comment" element={<NewComment/>}/> 

        <Route path="/Management_Messages" element={<ManagementMessages/>}/> 

        <Route path="/RegisterAcc" element={<RegisterAcc/>}/>

        <Route path="/Management_PCParts" element={<ManagePCParts/>}/>

        <Route path="/Custom_PC" element={<Custom_PC/>}/>

        <Route path="/Custom_PC_New" element={<Custom_PC_New/>}/>

        <Route path="/Manage_Orders" element={<ManageOrders/>}/>


      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
