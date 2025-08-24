
import "./Header.css"

/*interface Props {

}*/

export default function Header() {
	return (
			<div id="header-container">
				<div className="header ">
					
					<a className="left-side" href="#" >
							<img className="middle-icon" id="header-logo" src="/src/assets/weather-app-icon.png" alt="App Icon" />
							<p className="title">My Weather App</p>
					</a>
					
					<input id="searchbar" className="" placeholder="Search..." required ></input>
					
					<div className="right-side">
						<a href="https://www.instagram.com/zly.reper.zenyk/">
							<img alt="Instagram Page" src="/src/assets/instagram.icon.svg" className="inst small-icon" />
						</a>
						
						<a id="git" href="https://github.com/mryshkov">
							<img alt="Github account" src="/src/assets/github.icon.svg" className="github small-icon" />
						</a>
						
						<a href="https://t.me/watermeland">
							<img alt="Telegram channel" src="/src/assets/telegram.icon.svg" className="telegram small-icon" />
						</a>
					</div>
				</div>
			</div>
	)
}