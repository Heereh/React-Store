import Header from './layouts/Header/Header';
import Layout from './layouts/Layout/Layout';
import Footer from './layouts/Footer/Footer';
import Routes from './routes/Routes';

//import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Routes />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
