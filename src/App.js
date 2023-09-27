import './App.css';
import Home from './screens/Home'
import Event from './screens/Event'
import ContactUs from './screens/ContactUs'
import Venue from './screens/Venue';
import AboutUs from './screens/AboutUs';
import NotFound from './screens/NotFound'
import Register from './screens/Register'
import SignIn from './screens/SignIn'
import Verify from './screens/Verify'
import Main from './screens/Main'
import VenueDetail from './screens/VenueDetail'
import { PopularVenueGallery } from './constants';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Main />} />
        <Route exact path="/event" element={<Event />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/venue" element={<Venue />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/verify" element={<Verify />} />
        <Route
          exact
          path="/venues/:id"
          element={<VenueDetail venues={PopularVenueGallery} />}
        />
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
