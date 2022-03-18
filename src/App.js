import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='dashboard' />} />
                <Route path='/dashboard' element={<h1>Dashboard layout</h1>}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
