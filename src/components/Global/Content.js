import React, { Component } from 'react';
// import './components/Global/css/App.css';

class Content extends Component {
    constructor (){
        super();

        //variables que se van a utilizar en content
        this.state = {
            counter: 0,
            resultSum: 0,
            inputNumber1: 0,

            inputNumber2: 0
        };
        this.handleEventClick = this.handleEventClick.bind(this);
        this. = this.handleEventClick.bind(this);
    };

    handleEventClick(e){
        if (e.target.id === 'add'){
            this.setState({
                counter: this.state.counter + 1
            });

        } else if (e.target.id === 'substract' && this.state.counter > 0){
            this.setState({
                counter: this.state.counter - 1
            });
        } else {
            this.setState({
                counter: 0
            });
        }
    };

    //se ejecuta cuando termina de ejecutar el render(), causando la llamada nuevamente a render()
    componentDidMount(){
        this.setState({
            counter: 0
        });
    }

    render() {

        console.log("hola");
        return (
            <div className="Content">
                    <h1>Soy el content</h1>
<p>
                <button id="add" onClick={this.handleEventClick}>+</button>
                <button id="substract" onClick={this.handleEventClick}>-</button>
                <button id="reset" onClick={this.handleEventClick} >[-]</button>
                <label><b>{this.state.counter} </b></label>
</p>
                <p>
                    <input id="number1" type="number" value={this.state.inputNumber1} onchange={this.inputChange} />
                    <input id="number2" type="number" value={this.state.inputNumber2} onchange={this.inputChange}/>
                </p>

            </div>
        );
    }
}

export default Content;
