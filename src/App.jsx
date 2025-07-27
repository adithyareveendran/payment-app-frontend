import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import PaymentScreen from './screens/PaymentScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/confirmation" element={<ConfirmationScreen />} />
      </Routes>
    </Router>
  );
}
