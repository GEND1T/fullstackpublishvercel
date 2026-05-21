
import Copetition from "./pages/Competition";
import HomePage from "./pages/HomePage_backup"
import LoginForm from "./pages/LoginForm";
import RegisterEvent from "./pages/RegisterEvent";
import Seminar from "./pages/Seminar";
import Talkshow from "./pages/Talkshow";
import Workshop from "./pages/Workshop";




import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardIndex from "./pages/dashboard/DashboardIndex";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import CategoryIndex from "./pages/dashboard/category/CategoryIndex";
import PembicaraIndex from "./pages/dashboard/pembicara/PembicaraIndex";
import EventIndex from "./pages/dashboard/event/EventIndex";
import CategoryCreate from "./pages/dashboard/category/CategoryCreate";
import PembicaraCreate from "./pages/dashboard/pembicara/PembicaraCreate";
import EventCreate from "./pages/dashboard/event/EventCreate";
import CategoryEdit from "./pages/dashboard/category/CategoryEdit";
import PembicaraEdit from "./pages/dashboard/pembicara/PembicaraEdit";
import EventEdit from "./pages/dashboard/event/EventEdit";
import BiodataIndex from "./pages/dashboard/biodata/BiodataIndex";


function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/Competition" element={<Copetition />} />
          <Route path="/Seminar" element={<Seminar />} />
          <Route path="/Workshop" element={<Workshop />} />
          <Route path="/Talkshow" element={<Talkshow />} />
        </Route>


        <Route element={<AuthLayout/>}>
          <Route path="/Login" element={<LoginForm/>} />
          <Route path="/Login" element={<HomePage/>} />
          <Route path="/register" element={<RegisterEvent />} />
        </Route>

        {/* halaman khusus login */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>

            <Route path="/dashboard" element={<DashboardIndex />} />

            
            <Route path="/dashboard/category" element={<CategoryIndex />} />
            <Route path="/dashboard/category/create" element={<CategoryCreate />} />
            <Route path="/dashboard/category/edit/:id" element={<CategoryEdit />} />


            <Route path="/dashboard/pembicara" element={<PembicaraIndex />} />
            <Route path="/dashboard/pembicara/create" element={<PembicaraCreate />} />
            <Route path="/dashboard/pembicara/edit/:id" element={<PembicaraEdit />} />


            <Route path="/dashboard/event" element={<EventIndex />} />
            <Route path="/dashboard/event/create" element={<EventCreate />} />
            <Route path="/dashboard/event/edit/:id" element={<EventEdit />} />

            <Route path="/dashboard/biodata" element={<BiodataIndex />} />




          </Route>
        </Route>

        
      </Routes>
    </BrowserRouter>


  );


}

export default App;
