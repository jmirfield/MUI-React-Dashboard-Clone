import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './layout/index'
import Main from './pages/Main';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='dashboard' />} />
                <Route path='/dashboard' element={<DashboardLayout />}>
                    <Route path='app' element={<Main />} />
                    <Route path='' element={<Navigate to='app' />} />
                    <Route path='*' element={<Navigate to='/404' />} />
                </Route>
                <Route path='*' element={<Navigate to='/404' />} />
                <Route path='404' element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
