
import Header from './layouts/Header/Header';
import Hero from './layouts/Hero/Hero';
import Layout from './layouts/Layout/Layout';
import Products from './layouts/Products/Products';

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Hero></Hero>

        <Products></Products>
      </Layout>
    </>
  );
}

export default App;
