/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
 * Practicando estados y eventos con react

 */
class Hello extends React.Component
{
        constructor(props){
        super(props);
        this.state = {
            nombre: "Dennis"
        }
        
    }
    despedirse=()=>{
        this.setState(
                {nombre:'DEnniS Astahuaman'})
        alert('A deus');
    };
    
    render(){
        return(
                <h1 onClick={this.despedirse}>hola {this.state.nombre}</h1>
                )
    }
}

ReactDOM.render(<Hello/>,document.getElementById('app'));


const preguntas=
        [
    
    { 
      id:1,
      pregunta:"Cuanto es 4+5?",
      respA:"3",
      respB:"6",
      respC:"9",
      respD:"10",
      Correcta:"C"
    },
    {
      id:2,
      pregunta:"Cuanto es 6+5?",
      respA:"3",
      respB:"6",
      respC:"9",
      respD:"11",
      Correcta:"D"  
    },
    {
      id:3,
      pregunta:"Cuanto es 62+51?",
      respA:"32",
      respB:"63",
      respC:"94",
      respD:"113",
      Correcta:"D"         
    }
    
        ];


