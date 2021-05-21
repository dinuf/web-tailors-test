import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
	class RightPanel extends React.Component {
	constructor(props){
		super();
	}
	
	render() {
		//debugger
		return (
			<div className="right-panel">
				<Typography variant="subtitle1" gutterBottom>SERVICII ALESE:</Typography>
				{ this.props.data.length > 0 ?
					this.props.data.map((item, index, key)=>{
						return <ListItem button divider key={index}>
									<ListItemText
									primary={item.amount + " x " + item.name} />
								</ListItem>
						 
					}) : <Typography variant="subtitle2" gutterBottom>
						Niciun serviciu selectat.
						</Typography>
				}
			</div>
		)
	}
}

export default RightPanel;