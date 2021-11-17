import React from "react";

import Main from "./components/Main";
import Navbar from "./components/navbar/Navbar";
import { ContextProvider } from "./components/context/MyContext";

function App() {
	return (
		<ContextProvider>
			<Navbar />
			<Main />
		</ContextProvider>
	);
}

export default App;
