import ReactDom from "react-dom"
import './style.css';
import { Component } from 'react';

class Videodata extends Component {
    
    constructor(){
        super();
        this.state = {
            index :0,
            active:false
        }
        this.changeindex =(id) =>{
            this.setState({
                index :id,
                active:true
            })
            console.log("index change:"+this.state.index)
        }
    }
    
    closeModal() {
      this.setState({active: false});
    };
    
    
    
    
    render(){
    var vid1 = "https://www.youtube-nocookie.com/embed/8TIjSDFQD7I?controls=0";
    var vid2 = "https://www.youtube-nocookie.com/embed/dP2tYFcxAwI?controls=0";
    var vid3 = "https://www.youtube-nocookie.com/embed/2indBTh_MCI?controls=0";
    var vid4 = "https://www.youtube-nocookie.com/embed/7wuE6HEnheo?controls=0";
        
    
    const addmodal = () =>{
        if(this.state.active){
            if(this.state.index == 1){
                return (
                    <div className="modal" onClick={() => (this.closeModal())}>
                          <iframe  src={vid1} frameborder="0"></iframe>
                    </div>
                )
            }
            if(this.state.index == 2){
                return (
                    <div className="modal" onClick={() => (this.closeModal())}>
                          <iframe  src={vid2} frameborder="0"></iframe>
                    </div>
                )
            }
            if(this.state.index == 3){
                return (
                    <div className="modal" onClick={() => (this.closeModal())}>
                          <iframe src={vid3} frameborder="0"></iframe>
                    </div>
                )
            }
            if(this.state.index == 4){
                return (
                    <div className="modal" onClick={() => (this.closeModal())}>
                          <iframe src={vid4} frameborder="0"></iframe>
                    </div>
                )
            }
        }

    }; 
    
        return(
            <div>
                <body>
                    {addmodal()}
                    <div class="gallery" id="gallery">
                        <div class="row">
                            <div class="column">
                                <div class="container" onClick={this.changeindex.bind(this,1)}>
                                    <div className="blur"></div>
                                    <iframe src={vid1} frameborder="0"></iframe>
                                </div>
                            </div>
                            <div class="column">
                                <div class="container" onClick={this.changeindex.bind(this,2)}>
                                    <div className="blur"></div>
                                    <iframe src={vid2} frameborder="0"></iframe>
                                </div>  
                            </div>
                            <div class="column">
                                <div class="container" onClick={this.changeindex.bind(this,3)}>
                                    <div className="blur"></div>
                                    <iframe  src={vid3} frameborder="0"></iframe>
                                </div>
                            </div>
                            <div class="column">
                                <div class="container" onClick={this.changeindex.bind(this,4)}>
                                    <div className="blur"></div>
                                    <iframe  src={vid4} frameborder="0"></iframe>
                                </div>
                            </div>
                        </div>          
                    </div>
                </body>
            </div>
        )
    }
}
export default Videodata