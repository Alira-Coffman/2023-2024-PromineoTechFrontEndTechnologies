import logo from "./logo.svg";
import "./App.css";
import { AddButton } from "./components/AddButton";
import { SubtractButton } from "./components/SubtractButton";
import MultiplicationButton from "./components/MulitplicationButton";
import { Nav } from "./components/global/Nav";
import Header from "./components/global/Header";
import { Car } from "./components/Car";

function App() {
	const Cars = [
		{
			owner: "John Smith",
			model: "ford",
			year: "2015",
		},
		{
			owner: "Jane Smith",
			model: "GMC",
			year: "2010",
		},
	];
	return (
		<div>
			<Nav />
			<Header />
			{/* <AddButton />
			<SubtractButton /> */}
			{Cars.map((car) => {
				return <Car owner={car.owner} />;
			})}
			{/* <Car owner={Cars[0].owner} /> */}
		</div>
	);
}
/**N
 * Nav
 * Header
 * Cars
 * styles
 */

export default App;
