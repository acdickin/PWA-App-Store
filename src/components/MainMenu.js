import React, { Component } from 'react';
import Category from './Category'

export default class MainMenu extends Component {
	render(){
		return(
			<div id="mainMenu" className="content">
			
				<div>
					<div>Search Bar</div>
					<div> Options</div>
				</div>
				
				<div> SubOptions</div>
				
				<Category/>
			</div>


		)
	}
}