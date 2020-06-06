import React from 'react'

class Column extends React.Component{
    constructor(){
        super()
       this.state={pic:'asfalt-light',IsCubeEmpty:true }
    }
Clicked= ()=>{
    
if(!this.state.IsCubeEmpty){
    alert("you cant click the same cube twice!!")
    return
}
else{
    if(this.props.turn == true){
        this.setState({pic:'angular',IsCubeEmpty:false})
        console.log("clicked")
    }
    else{
        this.setState({pic:'logo192',IsCubeEmpty:false})
        console.log("clicked")
    }
   this.props.changeTurns(!this.props.turn,this.props.colIndex)

}
   
}

    render(){

       
        return(
           <div  onClick={this.Clicked}>
               <img className="sign" src={require(`../src/images/${this.state.pic}.png`)} />
              
               </div>
        )
    }
}
export default Column