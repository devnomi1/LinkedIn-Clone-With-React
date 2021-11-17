import React from "react";
import { Link } from "react-router-dom";
import profileimage from "../../imgaes/myprofilejpeg.jpeg";
import style from './ProfileNavbarDown.module.css'

function ProfileNavbarDown() {
	return (
		<div>
			<div className={style.profile_dropdown}>
				<div className={style.profile_dropdown_top_sec}>
					<div className={style.flex}>
						<span className={style.profile}>
							<img src={profileimage} alt="" />
						</span>
						<span className={`${style.prof_detail} ms-1 d-flex align-items-start flex-column`}>
							<span className={style.prof_name}> Nouman ijaz </span>
							<span className={style.prof_designation}>
								Internee Engineer at Descon Engineering Limited
							</span>
						</span>
					</div>
					<button className={style.dropdown_view_prf_btn}>View Profile</button>
				</div>
				<div className={style.profile_dropdown_mid_sec}>
					<div className={style.mid_sec_inner}>
						<h5 className="text-start">Account</h5>
						<ul>
							<li>
								<Link to="/">Setting & Privacy</Link>
							</li>
							<li>
								<Link to="/">Help</Link>
							</li>
							<li>
								<Link to="/">Language</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className={style.profile_dropdown_bottom_sec}>
					<div className={style.bottom_sec_inner}>
						<h5 className="text-start">Manage</h5>
						<ul>
							<li>
								<Link to="/"> Posts & Activity</Link>
							</li>
							<li>
								<Link to="/">Job Posting Account</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className={style.profile_dropdown_footer}>
					<div className={style.footer_inner}>Sign Out</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileNavbarDown;
