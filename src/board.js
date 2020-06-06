import React from 'react';
import './board.css';
import Row from './row'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
class Board extends React.Component {

  constructor(){
    super()

    this.state = {
        turn : true,
        ocount:0,
        xcount:0,
     cube:[
      [
              {isNull:true,isAngular:true},
              {isNull:true,isAngular:true},
              {isNull:true,isAngular:true}
      ],    
    
      [
        {isNull:true,isAngular:false},
        {isNull:true,isAngular:true},
        {isNull:true,isAngular:true}
       ],
        [
        {isNull:true,isAngular:true},
        {isNull:true,isAngular:true},
        {isNull:true,isAngular:true}
       ]
      
     ]
      }

       
}
reacting=()=>{console.log("reacted")}
////////////////////notafication code
createNotification = (type) => {
  console.log("here")
  return () => {
    switch (type) {
      case 'info':
        NotificationManager.info('Info message');
        break;
      case 'success':
        NotificationManager.success('Success message', 'Title here');
        break;
      case 'warning':
        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        break;
      case 'error':
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
          alert('callback');
        });
        break;
    }
  };
};

///////////////////
   
changeTurn=async(tu,Rowindex,colindex)=>{

 console.log("tu==>",tu)
  //tie check
  if(tu==false){
    let count = this.state.ocount +1
    this.setState({ocount : count})
  }
  else{
    let count = this.state.xcount +1
    this.setState({xcount : count})
  }



  let cubeClone = this.state.cube
  cubeClone[Rowindex][colindex].isAngular=tu
  cubeClone[Rowindex][colindex].isNull=false
  await this.setState({turn:tu ,cube:cubeClone })


  
this.checkVictory()
}

checkVictory=async()=>{
  this.createNotification('success')
  //first victory check1
 if(this.state.cube['0']['0'].isAngular ==true && this.state.cube['0']['0'].isNull ==false && 
 this.state.cube['0']['1'].isAngular ==true && this.state.cube['0']['1'].isNull ==false && 
this.state.cube['0']['2'].isAngular ==true && this.state.cube['0']['2'].isNull ==false){
      //alert('React wins!!')
     await this.createNotification('success')
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);  
 }

 if(this.state.cube['0']['0'].isAngular ==false && this.state.cube['0']['0'].isNull ==false && 
 this.state.cube['0']['1'].isAngular ==false && this.state.cube['0']['1'].isNull ==false && 
this.state.cube['0']['2'].isAngular ==false && this.state.cube['0']['2'].isNull ==false){
      alert('Angular Wins!!')
      
      setTimeout(()=>{
        window.location.reload(false)
      },1000);
 }
   //first victory check2
   if(this.state.cube['1']['0'].isAngular ==true && this.state.cube['1']['0'].isNull ==false && 
   this.state.cube['1']['1'].isAngular ==true && this.state.cube['1']['1'].isNull ==false && 
  this.state.cube['1']['2'].isAngular ==true && this.state.cube['1']['2'].isNull ==false){
        alert('React wins!!')
       
      setTimeout(()=>{
        window.location.reload(false)
      },1000);
   }
  
   if(this.state.cube['1']['0'].isAngular ==false && this.state.cube['1']['0'].isNull ==false && 
   this.state.cube['1']['1'].isAngular ==false && this.state.cube['1']['1'].isNull ==false && 
  this.state.cube['1']['2'].isAngular ==false && this.state.cube['1']['2'].isNull ==false){
        alert('Angular Wins!!')
       setTimeout(()=>{
         window.location.reload(false)
       },1000)
   }
      //first victory check3
      if(this.state.cube['2']['0'].isAngular ==true && this.state.cube['2']['0'].isNull ==false && 
      this.state.cube['2']['1'].isAngular ==true && this.state.cube['2']['1'].isNull ==false && 
     this.state.cube['2']['2'].isAngular ==true && this.state.cube['2']['2'].isNull ==false){
           alert('React wins!!')
         
           setTimeout(()=>{
             window.location.reload(false)
           },1000)
      }
     
      if(this.state.cube['2']['0'].isAngular ==false && this.state.cube['2']['0'].isNull ==false && 
      this.state.cube['2']['1'].isAngular ==false && this.state.cube['2']['1'].isNull ==false && 
     this.state.cube['2']['2'].isAngular ==false && this.state.cube['2']['2'].isNull ==false){
           alert('Angular Wins!!')
           setTimeout(()=>{
            window.location.reload(false)
          },1000)
      }
//second victory check
 if(this.state.cube['0']['0'].isAngular ==true && this.state.cube['0']['0'].isNull ==false && 
 this.state.cube['1']['0'].isAngular ==true && this.state.cube['1']['0'].isNull ==false && 
this.state.cube['2']['0'].isAngular ==true && this.state.cube['2']['0'].isNull ==false){
      alert('React wins!!')
     
      setTimeout(()=>{
        window.location.realod(false)
      },1000)
 }

 if(this.state.cube['0']['0'].isAngular ==false && this.state.cube['0']['0'].isNull ==false && 
 this.state.cube['1']['0'].isAngular ==false && this.state.cube['1']['0'].isNull ==false && 
this.state.cube['2']['0'].isAngular ==false && this.state.cube['2']['0'].isNull ==false){
      alert('Angular Wins!!')
     setTimeout(()=>{
       window.location.reload(false)
     },1000)
 }

 //third victory check
 if(this.state.cube['0']['0'].isAngular ==true && this.state.cube['0']['0'].isNull ==false && 
 this.state.cube['1']['0'].isAngular ==true && this.state.cube['1']['0'].isNull ==false && 
this.state.cube['2']['0'].isAngular ==true && this.state.cube['2']['0'].isNull ==false){
      alert('React wins!!')
    
      setTimeout(()=>{
        window.location.reload(false)
      },1000)
 }

 if(this.state.cube['0']['0'].isAngular ==false && this.state.cube['0']['0'].isNull ==false && 
 this.state.cube['1']['0'].isAngular ==false && this.state.cube['1']['0'].isNull ==false && 
this.state.cube['2']['0'].isAngular ==false && this.state.cube['2']['0'].isNull ==false){
      alert('Angular Wins!!')

      setTimeout(()=>{
        window.location.reload(false)
      },1000)
 }
  //third victory check2
  if(this.state.cube['0']['1'].isAngular ==true && this.state.cube['0']['1'].isNull ==false && 
  this.state.cube['1']['1'].isAngular ==true && this.state.cube['1']['1'].isNull ==false && 
 this.state.cube['2']['1'].isAngular ==true && this.state.cube['2']['1'].isNull ==false){
       alert('React wins!!')
    
       setTimeout(()=>{
        window.location.reload(false)
      },1000)
  }
 
  if(this.state.cube['0']['1'].isAngular ==false && this.state.cube['0']['1'].isNull ==false && 
  this.state.cube['1']['1'].isAngular ==false && this.state.cube['1']['1'].isNull ==false && 
 this.state.cube['2']['1'].isAngular ==false && this.state.cube['2']['1'].isNull ==false){
       alert('Angular Wins!!')
       setTimeout(()=>{
        window.location.reload(false)
      },1000)
  }
    //third victory check3
    if(this.state.cube['0']['2'].isAngular ==true && this.state.cube['0']['2'].isNull ==false && 
    this.state.cube['1']['2'].isAngular ==true && this.state.cube['1']['2'].isNull ==false && 
   this.state.cube['2']['2'].isAngular ==true && this.state.cube['2']['2'].isNull ==false){
         alert('React wins!!')
       
         setTimeout(()=>{
          window.location.reload(false)
        },1000)
    }
   
    if(this.state.cube['0']['2'].isAngular ==false && this.state.cube['0']['2'].isNull ==false && 
    this.state.cube['1']['2'].isAngular ==false && this.state.cube['1']['2'].isNull ==false && 
   this.state.cube['2']['2'].isAngular ==false && this.state.cube['2']['2'].isNull ==false){
         alert('Angular Wins!!')
         setTimeout(()=>{
          window.location.reload(false)
        },1000)
    }
        //diaognal victory check1
        if(this.state.cube['0']['0'].isAngular ==true && this.state.cube['0']['0'].isNull ==false && 
        this.state.cube['1']['1'].isAngular ==true && this.state.cube['1']['1'].isNull ==false && 
       this.state.cube['2']['2'].isAngular ==true && this.state.cube['2']['2'].isNull ==false){
             alert('React wins!!')
           
             setTimeout(()=>{
              window.location.reload(false)
            },1000)
        }
       
        if(this.state.cube['0']['0'].isAngular ==false && this.state.cube['0']['0'].isNull ==false && 
        this.state.cube['1']['1'].isAngular ==false && this.state.cube['1']['1'].isNull ==false && 
       this.state.cube['2']['2'].isAngular ==false && this.state.cube['2']['2'].isNull ==false){

             alert('Angular Wins!!')
             setTimeout(()=>{
              window.location.reload(false)
            },1000)
        }
                //diaognal victory check2
                if(this.state.cube['0']['2'].isAngular ==true && this.state.cube['0']['2'].isNull ==false && 
                this.state.cube['1']['1'].isAngular ==true && this.state.cube['1']['1'].isNull ==false && 
               this.state.cube['2']['0'].isAngular ==true && this.state.cube['2']['0'].isNull ==false){
                     alert('React wins!!')
                   
                     setTimeout(()=>{
                      window.location.reload(false)
                    },1000)
                }
               
                if(this.state.cube['0']['2'].isAngular ==false && this.state.cube['0']['2'].isNull ==false && 
                this.state.cube['1']['1'].isAngular ==false && this.state.cube['1']['1'].isNull ==false && 
               this.state.cube['2']['0'].isAngular ==false && this.state.cube['2']['0'].isNull ==false){
                 
                     alert('Angular Wins!!')
                     setTimeout(()=>{
                      window.location.reload(false)
                    },1000)
                }

                if(this.state.ocount ===4 && this.state.xcount ===4){
                  alert("its a TIE!!!")
                  setTimeout(()=>{
                    window.location.reload(false)
                  },1000)
                }
}

  render(){

let rows = this.state.cube.map((x,Rowindex)=>{ 
  return  <tr key={Rowindex}>
  <Row colValues={x} turn={this.state.turn}  changeTurns={(tu,colindex)=>this.changeTurn(tu,Rowindex,colindex)}/>
  </tr>
})
  return (
    <div className="App" >
         <img className="tik" src={require("./images/tiktaktoe.png")}/>
       <table >
         <tbody>
  {rows}
     </tbody>
         </table>
         <button className='btn btn-danger'
          onClick={this.createNotification('success')}>Error
        </button>
         <NotificationContainer/>
         </div>
  );
  }
}

export default Board;



