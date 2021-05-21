import React from 'react';
import ReactDOM from 'react-dom';
import SerivceItem from './ServiceItem';
import Data from './Data';
class LeftPanel extends React.Component {
	constructor(props) {
 		super();
	}

  render() {
    return (
        <div className="left-panel"> 
			{Data.map((item, index, key)=>{
				return <SerivceItem
				service={item.name}
				key={item.id}
			  id={item.id}
				addService={this.props.addService}
				removeService={this.props.removeService}
				/>;
			})}
        </div>
    	)
	}
}

export default LeftPanel;