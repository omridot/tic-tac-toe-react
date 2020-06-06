import React from 'react'
import Column from './column'

class Row extends React.Component{
    constructor(){
      super()
    }

    render(){
      //this.props.changeTurns(false)
      let col= this.props.colValues.map((x,index)=>{ 
        return <th key={index}>   <Column turn={this.props.turn} colIndex={index} changeTurns={this.props.changeTurns}  colValues={x}/> </th>
       })
        return(
                <React.Fragment >
              
               {col }
                 </React.Fragment >

        )
    }
}
export default Row

/* <th>   <Column/> </th>
               <th>   <Column/> </th>
               <th>   <Column/> </th>*/