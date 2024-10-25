import { Toaster } from 'react-hot-toast';
import { Footer, Header } from './components/layout';
import { HomePage } from './pages';

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
