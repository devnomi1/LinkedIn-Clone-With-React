import React, { useState } from "react";
import DropLine from "./DropLine";
import PostCard from "./PostCard";
import TopCenterCard from "./TopCenterCard";

 const DUMMY_DATA = [
		{
			profile:
				"https://media-exp1.licdn.com/dms/image/C4D35AQEu8xkN3A09fQ/profile-framedphoto-shrink_800_800/0/1600002648031?e=1637053200&v=beta&t=O9xHAZDBSNpuUCGeRRitGUZ31BINvGFlohyVR7rufk0",
			title: "Rafay Hassan",
			image:
				"https://media-exp1.licdn.com/dms/image/C4D22AQGnIy_Fb3ZUPg/feedshare-shrink_2048_1536/0/1585088986815?e=1639612800&v=beta&t=3PlPQQyTHe3qAiVkDfFxr94GyX9mhgQj6Kq8dmZhNYw",
			description: "this is a testing Text",
		},
		{
			profile:
				"https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png",
			title: "Nouman Ijaz",
			image: "",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
		},

		{
			profile:
				"https://media-exp1.licdn.com/dms/image/C5603AQETf5mJpM779g/profile-displayphoto-shrink_800_800/0/1609205224567?e=1642636800&v=beta&t=td04H6khRqJ95dbI0J-OW9Ts8R0QiiKmSiD8I5VQ_5U",

			title: "Annie Jioa",
			image:
				"https://media-exp1.licdn.com/dms/image/C5622AQHNCpdwEPMt5Q/feedshare-shrink_2048_1536/0/1635986114305?e=1639612800&v=beta&t=OiaB092dNfA44Wg8Ax7TILCnT9XOdWtZXCcSoMZiw1U",
			description: "FM200 HFC-227EA Novec1230 FK-5  And their filling machine",
		},
		{
			profile:
				"https://media-exp1.licdn.com/dms/image/C4D03AQFo3omglGFeGQ/profile-displayphoto-shrink_800_800/0/1636694335835?e=1642636800&v=beta&t=YvyNP1K6BOTZbm84txXawTkkNgIkHBmauJ2OH8GCz9A",
			title: "Ayesha Khan",
			image:
				"https://media-exp1.licdn.com/dms/image/C4D22AQGNSPk96NjDsw/feedshare-shrink_2048_1536/0/1636439202587?e=1639612800&v=beta&t=L5OfPjIJq8MPbavo7ZXv0tvRSAYYZ0QLORW9fQMF5uQ",
			description:
				"Dear girlsss, don't use uber & careem use your own bikeeE Give yourself pick & drop...& chase your dreamssS",
		},
 ];
   


function Center(props) {
	
	
 
	const [dropLineOpen, setDropLineOpen] = useState(false);
	function toggleHandler() {
		setDropLineOpen(!dropLineOpen);
	}
	return (
		<div>
			<TopCenterCard />
			<DropLine isOpen={dropLineOpen} onClick={toggleHandler} />
			{DUMMY_DATA.map((data, index) => (
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
