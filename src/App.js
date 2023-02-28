import './styles/main.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Contacts from './pages/contacts/Contacts';
import ProjectPage from './pages/projectPage/ProjectPage';
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'projects',
    element: <Projects />
  },
  {
    path: 'project',
    element: <ProjectPage />
  },
  {
    path: 'contacts',
    element: <Contacts />
  }
]);

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<ProjectPage />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
