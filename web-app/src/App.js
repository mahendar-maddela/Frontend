
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FormGroupExample from './mainpagr/Loginform';
import RegisterForm from './mainpagr/Registor';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Booking from './components/Booking';
import ServicesPage from './components/ServicesPage';
import Appointments from './components/Appointments';
import ContactInfoPage from './components/ContactInfoPage';
import Mainview from './mainpagr/Mainview';
import EditBooking from './components/EditBooking';

function App() {
  return (

    <div className="App">


      <Router>
        <Routes>
          <Route path='/' element={<Mainview />} />
          <Route path='/ab' element={<FormGroupExample />} />

          <Route path='/go' element={<RegisterForm />} />
          <Route path='/nav' element={<NavBar />} />
          <Route path='/a' element={<Home />} />

          <Route path='/book' element={<Booking />} />
          <Route path='/service' element={<ServicesPage />} />
          <Route path='/appointment' element={<Appointments />} />
          <Route path='/editBooking/:id' element={<EditBooking />} />

          <Route path='/contact' element={<ContactInfoPage />} />




        </Routes>
      </Router>
    </div>

  );
}

export default App;
