import Header from './layouts/Header/Header';
import Layout from './layouts/Layout/Layout';
import Footer from './layouts/Footer/Footer';
import Routes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Header />
      <main className="relative">
        <Layout>
          <Routes />
        </Layout>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
