import React, { useState } from "react";
import { DUMMY_DATA } from "../dummydata/DummyData";

export const MyContext = React.createContext();
export const MyPostContext = React.createContext();
export function ContextProvider({ children }) {
	const [dummyData, setDummyData] = useState(DUMMY_DATA);

	const postHandler = (e) => {};
	return (
		<MyContext.Provider value={dummyData}>
			<MyPostContext.Provider value={postHandler}>
				{children}
			</MyPostContext.Provider>
		</MyContext.Provider>
	);
}
export default MyContext;
