import Itab from './indtab';
import { Component } from 'react';

class Tablist extends Component {
    render() {
        console.log("id: "+this.props.activetab)
        
        return (
            this.props.tabs.map((tab)=>
                               <Itab out={tab} activetab={this.props.activetab} ctab={this.props.ctab}/>
            )
        )
    }
}

export default Tablist;