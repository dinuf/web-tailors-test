import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import RightPanel from './RightPanel';
import LeftPanel from './LeftPanel';
class MainPanel extends React.Component {

    constructor(props) {
        super();
        this.addService = this.addService.bind(this);
        this.removeService = this.removeService.bind(this);
        this.saveState = this.saveState.bind(this);

        this.state = {
            selectedServices: []
        };
    }

    addService(service, amount, key){
        
        const tempState = this.state.selectedServices;
        console.log("Added item!")
        
        let found;
        tempState.forEach((el,index)=>
            {
                if(el.name==service) 
                {
                    el.amount++;
                    found = true;
                    return;
                }
            }
        )

        if(!found) tempState.push({name: service, amount: 1, id: key});
        console.log(tempState, '- Object collection after add');
        this.saveState(tempState);
    }

    removeService(service, amount, key) {
        console.log("Removed!");

        const tempState = this.state.selectedServices;
        console.log(tempState ,'- Object collection after remove' );
        let found;

        tempState.forEach((el,index)=>
            {
                if(el.id == key) {
                    if(el.amount>1) {
                        el.amount--;
                        found = true;
                        
                    } else {
                        tempState.splice(index,1);
                    }
                    return;
                }
            }
        )
        this.saveState(tempState);
    }

    saveState(data) {
        this.setState(
            {
                selectedServices: data
            }
        );
    }
      
    render() {
        return (
            <div className="main-panel">
                <Header data={this.state.selectedServices}/>
                <LeftPanel
                addService={this.addService}
                removeService={this.removeService}
                />
                <RightPanel data={this.state.selectedServices}/>
            </div>
        )
    }
}

export default MainPanel;