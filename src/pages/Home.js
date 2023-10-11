import Header from './../components/header/Header';
import Choice from './../components/choice/Choice';
import Indicators from './../components/indicators/Indicators';
import Benefits from './../components/benefits/Benefits';
import Transfer from './../components/transfer/Transfer';
import Preview from './../components/preview/Preview';

const Home = () => {
	return (
		<>
			{/* <!----------------------------HEADER----------------------------------------> */}
			<Header />
			{/* <!----------------------------HEADER----------------------------------------> */}
			{/* <!-----------------------------MAIN-----------------------------------------> */}
			<Choice />
			<Indicators />
			<Preview />
			<Benefits />
			<Transfer />
			{/* <!-----------------------------MAIN-----------------------------------------> */}
		</>
	);
};

export default Home;
