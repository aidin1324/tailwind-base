import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto py-6 px-4">
          <Routes>
            <Route path="/" element={<Navigate to="/users" />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:userId" element={<UserDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;