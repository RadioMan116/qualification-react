import React from "react";
import "./App.scss";
import Item from "./Component/Item/Item";



const App = () => {

	return (
		<div className='wrapper'>
			<div className='app'>
				<div className='app-title'>
					Ты сегодня покормил кота?
				</div>
				<div className='app-list'>
					<Item />
				</div>
			</div>
		</div>

	);
};

export default App;