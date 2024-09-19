import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllOtherServicesRoutes from './pages/AllOtherServicesRoutes';

const App = () => {
  return (
    <div className='transition-all'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/telehealth-consultations' element={<AllOtherServicesRoutes />} />
        <Route path='/prescriptions' element={<AllOtherServicesRoutes />} />
        <Route path='/medical-certificates' element={<AllOtherServicesRoutes />} />
        <Route path='/weight-loss' element={<AllOtherServicesRoutes />} />
        <Route path='/pathology' element={<AllOtherServicesRoutes />} />
        <Route path='/referrals' element={<AllOtherServicesRoutes />} />
        <Route path='/nicotine-vaping' element={<AllOtherServicesRoutes />} />

      </Routes>
    </div>
  )
}

export default App
