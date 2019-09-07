import React from 'react';
import Header from "./Header";
import './App.css';

const App = () => {
	return (
		<div className='app-wrapper'>
			<div className='header'>
				<Header />
			</div>
			<nav className='nav'>
				< div>
					<a>Profile</a>
				</div>
				<div>
					<a>Message</a>
				</div>
				<div>
					<a>News</a>
				</div>
				<div>
					<a>Music</a>
				</div>
				<div>
					<a>Settings</a>
				</div>
			</nav>
			<div className='content'>
				<div><img src='https://media.istockphoto.com/photos/abstract-geometric-landscape-picture-id832632796?k=6&m=832632796&s=612x612&w=0&h=fA_-At_kccr38c3MTh_029UbGGpkHSVf-hCULZM3YDw='/>
				</div>
				<div>
					ava+dicription
				</div>
				<div>
					My posts
					<div>
						New post
					</div>
					<div>
						<div>
							Post 1
						</div>
						<div>
							Post 2
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default App;
