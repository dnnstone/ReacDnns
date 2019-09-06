/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        
}

    render(){
        return(
                <div className="counter">
                    <div className="count"> {this.state.count}</div>
                </div>
                 
                )
    }
}
ReactDOM.render(<Counter />, document.getElementById('app'));