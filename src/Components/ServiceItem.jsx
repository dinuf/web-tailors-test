import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


class ServiceItem extends React.Component {
  constructor(props){
    super();
  }
  render() {
    return (
      <div>
        <Typography variant="button" display="block" gutterBottom>
			{this.props.service} 
		</Typography>
		<ButtonGroup color="secondary" aria-label="outlined secondary button group">
			<Button 
			
			onClick={
				()=> this.props.addService(this.props.service, this.props.amount, this.props.id)}
				>
				+
			</Button>
			<Button
			
			onClick={
				()=> this.props.removeService(this.props.service, this.props.amount, this.props.id)}
			>
			-
			</Button>
		</ButtonGroup>
        </div>
    )
  }
}

export default ServiceItem;