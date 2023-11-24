import Header from "./Header";
import Announce from "./Announce";
import Registration from "./ Registration";
// import Program from "./Program";
import Detail from "./Presentation";
import Footer from "./Footer";
import Manuscript from "./Manuscript";

const App = () => {
	return (
		<>
			<div className="container">
				<Header />

				<Announce />

				<Registration />

				{/* <Program />  */}

				<Manuscript />

				<Detail />

				<Footer />
			</div>
		</>
	);
};

export default App;
