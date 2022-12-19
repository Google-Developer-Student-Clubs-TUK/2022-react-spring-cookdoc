import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from 'pages';
import { Detail } from 'components/Detail';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
		</>
	);
}

export default App;
