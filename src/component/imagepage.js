import ReactDom from "react-dom"
import './style.css';
import { Component } from 'react';

class Imagedata extends Component {
    constructor(){
        super();
        this.state = {
            index :"",
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
    var img1 = require('./img/semiexplode-front.png')
    var img2 = require('./img/explode-side.png')
    var img3 = require('./img/semiexplode-front.png')
    var img4 = require('./img/explode-side.png')
    var img5 = require('./img/explode-profile.png')
    var img6 = require('./img/explode-above.png')
    var img7 = require('./img/explode-profile.png')
    var img8 = require('./img/explode-above.png')
    var img9 = require('./img/semiexplode-front.png')
    var img10 = require('./img/explode-side.png')
    var img11 = require('./img/semiexplode-front.png')
    var img12 = require('./img/explode-side.png')
    var img13 = require('./img/semiexplode-profile.png')
    var img14 = require('./img/together-semiprofile.png')
    var img15 = require('./img/semiexplode-profile.png')
    
    
    const addmodal = () =>{
        if(this.state.index != 0 && this.state.active){
            console.log("Yup");
            return (
                <div className="modal" onClick={() => (this.closeModal())}>
                    <img className="modal-content" src={this.state.index} />
                </div>
            )
        }
        else{
            return 
        }
    }; 

    return(
    <div>
        <body>
        {addmodal()}
        <div class="gallery">
            <div class="row">
              <div class="column">
                <img onClick={this.changeindex.bind(this,img1.default)} alt="" src={img1.default}/>
                <img onClick={this.changeindex.bind(this,img2.default)} alt="" src={img2.default}/>
                <img onClick={this.changeindex.bind(this,img3.default)} alt="" src={img3.default}/>
                <img onClick={this.changeindex.bind(this,img4.default)} alt="" src={img4.default}/>
              </div>
              <div class="column">
                <img onClick={this.changeindex.bind(this,img5.default)} alt="" src={img5.default}/>
                <img onClick={this.changeindex.bind(this,img6.default)} alt="" src={img6.default}/>
                <img onClick={this.changeindex.bind(this,img7.default)} alt="" src={img7.default}/>
                <img onClick={this.changeindex.bind(this,img8.default)} alt="" src={img8.default}/>
              </div>
              <div class="column">
                <img onClick={this.changeindex.bind(this,img9.default)} alt="" src={img9.default}/>
                <img onClick={this.changeindex.bind(this,img10.default)} alt="" src={img10.default}/>
                <img onClick={this.changeindex.bind(this,img11.default)} alt="" src={img11.default}/>
                <img onClick={this.changeindex.bind(this,img12.default)} alt="" src={img12.default}/>
              </div> 
              <div class="column">
                <img onClick={this.changeindex.bind(this,img13.default)} alt="" src={img13.default}/>
                <img onClick={this.changeindex.bind(this,img14.default)} alt="" src={img14.default}/>
                <img onClick={this.changeindex.bind(this,img15.default)} alt="" src={img15.default}/>

              </div>
            </div>
        </div>
    </body>

    </div>
    
    
    
    )
}
}
export default Imagedata