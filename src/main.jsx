import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import Latex from './components/Latex';
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Latex><App/></Latex>
	</React.StrictMode>
)
