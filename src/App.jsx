import Layout from './components/Layout/Layout';
import Routes from './routes/Routes';
import { GlobalStyled } from './styles/GlobalStyles';

function App() {
	return (
		<Layout>
			<GlobalStyled></GlobalStyled>
			<Routes />
		</Layout>
	);
}

export default App;
