import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './layout/index'
import Main from './pages/Main';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='dashboard' />} />
            <Route path='/dashboard' element={<DashboardLayout />}>
                <Route path='app' element={<Main />} />
                <Route path='user' element={<Main />} />
                <Route path='product' element={<Main />} />
                <Route path='blog' element={<Main />} />
                <Route path='' element={<Navigate to='app' />} />
                <Route path='*' element={<Navigate to='/404' />} />
            </Route>
            <Route path='*' element={<Navigate to='/404' />} />
            <Route path='404' element={<NotFound />} />
        </Routes>
    );
}

export default App;
