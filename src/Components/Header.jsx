import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';

class Header extends React.Component {
  	constructor(props) {
		super();
 	}

	calculateServices = () => {
		let sum = 0;
		this.props.data.forEach(el => {
			sum += el.amount;
		});
		return sum;
	 }
	
  	render() {
		let total = this.calculateServices();

		return (
			<div className="header-panel">
				<Typography variant="h4" gutterBottom> {total} Servicii Selectate</Typography>
			</div>
		)
  	}
}

export default Header;