import SharedLayout from "./pages/SharedLayout";
import Courses from "./pages/Courses";
import Topics from "./pages/Topics";
import Questions from "./pages/Questions";
import "./style.scss";
import { BrowserRouter,Routes, Route } from 'react-router-dom';



function App() {

	return (
		<BrowserRouter>
			
			<Routes>
			<Route path='/' element={<SharedLayout />} >
                    <Route index element={<Courses />} />
                    <Route path='topics' element={<Topics />} />
                    <Route path='questions' element={<Questions />} />
               </Route>
			</Routes>
		</BrowserRouter>
	)
};

export default App;
