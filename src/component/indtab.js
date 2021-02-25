
function Itab (props){
    const addstyle = () =>{
        if(props.out.id == props.activetab){
        return {backgroundColor:'#59AFFF'}
        }
        else{
            return {backgroundColor:'#333'}
        }
    };

    console.log(props)

    return (
        <div className="topnav-elem" style={addstyle()} onClick={props.ctab.bind(this,props.out.id)} >{props.out.title}</div>
    );

}

export default Itab;