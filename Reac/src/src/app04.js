/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:45
        }
    }
    upCount=(e)=>{
        e.preventDefault();
        this.setState(function(prevState){
            return {
                count:prevState.count +1
            }
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
    resetCount=(e)=>{
        e.preventDefault();
        this.setState({count:0})
    };
    

    render(){
        return(
                <div className="counter">
                    <div className="count"> {this.state.count}</div>
                    <div className="changeCount">
                        <a href="#" className="upCount" onClick={this.upCount}>Contar</a>
                        <a href="#" className="downCount"  onClick={this.downCount}>Descontar</a>
                        <a href="#" className="resetCount"  onClick={this.resetCount}>Inicializar</a>
                    </div>
                </div>
                )
    }
}
ReactDOM.render(<Counter />, document.getElementById('app'));