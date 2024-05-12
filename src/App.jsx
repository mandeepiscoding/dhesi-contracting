// Importing necessary components and dependencies
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

// Main App component
function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

// Exporting the App component as the default export
export default App;
