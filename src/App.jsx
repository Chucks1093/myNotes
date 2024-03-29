import SharedLayout from "./pages/SharedLayout";
import Courses from "./pages/Courses";
import Topics from "./pages/Topics";
import Questions from "./pages/Questions";
import "./style.scss";
import Error from "./pages/Error.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<SharedLayout />}
				>
					<Route
						index
						element={<Courses />}
					/>
					<Route
						path="/:courseId"
						element={<Topics />}
					/>
					<Route
						path="/:courseId/:topicId"
						element={<Questions />}
					/>
				</Route>
				<Route
					path="*"
					element={<Error />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
