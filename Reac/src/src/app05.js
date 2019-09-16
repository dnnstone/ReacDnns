/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Preguntas extends React.Component{
    constructor(props){
        super(props);
        
        this.state=
            {
            pregunta1:
            {texto:'la Primera pregunta es primer multiplo de 5 es en numeros naturales',
            respuesta1:' el valor es 15',
            respuesta2:' el valor es 5',
            respuesta3:' el valor es 35',
            respuesta4:' el valor es 25'
            },
            pregunta2:
            {texto:'la Segunda pregunta es quien descubrio america',
            respuesta1:' jhon kelvin',
            respuesta2:' suzi diaz',
            respuesta3:' poggu mario',
            respuesta4:' colon cristobal'
            }
            
        }
        ;
        this.count=0;
        this.focus=this.state[this.count];
//        this.state={
//            pregunta:'la Tercera pregunta es primer multiplo de 5 es en numeros naturales',
//            respuesta1:' el valor es 5',
//            respuesta2:' el valor es 55',
//            respuesta3:' el valor es 15',
//            respuesta4:' el valor es 25'
//        }
    }
    upCount=(e)=>{
        e.preventDefault();
        this.setFocus(function(prevCount){
                this.count=prevCount +1;
                console.log(this.count);
                return  this.state[this.count];
            
        })
    };
    downCount=(e)=>{
        e.preventDefault();
        this.setState(function(prevState){
            if(prevState.count>=1){
             return {
                count:prevState.count -1
            }               
        }

        })
    };
    NextQuestion=(e)=>{
        e.preventDefault();
        this.setState({count:0})
    };
    

    render(){
        return(
                <div className="pregunta">
                    <div className="texto"> {this.focus.pregunta}</div>
                    <div className="alternativas">
                        <div className="alternativa A"><a href="#" className="upCount" >{this.focus.respuesta1}</a></div>
                        <div className="alternativa B"><a href="#" className="upCount" >{this.focus.respuesta2}</a></div>
                        <div className="alternativa C"><a href="#" className="upCount" >{this.focus.respuesta3}</a></div>
                        <div className="alternativa D"><a href="#" className="upCount" >{this.focus.respuesta4}</a></div>
                        
                        <button type="button" className="boton D" disabled="enabled">Cerrar</button>
                        <button type="button" className="boton D" onClick={this.upCount}>Continuar</button>
                    </div>
                </div>
                )
    }
}
ReactDOM.render(<Preguntas />, document.getElementById('app'));

