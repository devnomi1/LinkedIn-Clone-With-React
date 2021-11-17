import React, { useState , useContext} from "react";
import DropLine from "./DropLine";
import PostCard from "./PostCard";
import TopCenterCard from "./TopCenterCard";
import {MyContext} from "../context/MyContext"
  


   


function Center(props) {
	  const dummyData = useContext(MyContext)

	const [dropLineOpen, setDropLineOpen] = useState(false);
	function toggleHandler() {
		setDropLineOpen(!dropLineOpen);
	}
	return (
		<div>
			<TopCenterCard />
			<DropLine isOpen={dropLineOpen} onClick={toggleHandler} />
			{dummyData.map((data, index) => (
				<PostCard
					key={index}
					profile={data.profile}
					title={data.title}
					image={data.image}
					description={data.description}
				/>
			))}
		</div>
	);
}

export default Center;
