import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/main-layout'
import MainPage from '../pages/main-page'
import GamePage from '../pages/game-page'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/game" element={<GamePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter 