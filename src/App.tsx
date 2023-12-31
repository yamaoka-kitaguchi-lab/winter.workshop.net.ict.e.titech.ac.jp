import Announce from "./Announce";
import Footer from "./Footer";
import Header from "./Header";
import Inquiry from "./Inquiry";
import News from "./News";
import Program from "./Program";
import Detail from "./Presentation";
import Registration from "./Registration";

const App = () => {
	return (
		<>
			<div className="container">
				<Header />

				<Announce />
				<Registration />
				<Detail />
				<Program />
				<Inquiry />
				<News />

				<Footer />
			</div>
		</>
	);
};

export default App;
