import Videodata from './videopage';
import Textdata from './textpage';
import Tabledata from './tablepage';
import Imagedata from './imagepage';
import Emaildata from './emailpage';
import './style.css';

import { Component } from 'react';

class Body extends Component {

    render() {
        var displaycontent = ()=>{
            var activetab = this.props.activetab;
            if(activetab == 1){
                return <Textdata/>
            }else if (activetab == 2){
                return <Imagedata/>
            }else if (activetab == 3){
                return <Videodata/>
            }else if (activetab == 4){
                return <Tabledata/>
            }else{
                return <Emaildata/>
            }
        }
        
        return (displaycontent())
    }
}

export default Body;