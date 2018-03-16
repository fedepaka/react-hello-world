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
        //declaración de los eventos
        this.handleEventClick = this.handleEventClick.bind(this);
        this.handleSumaClick= this.handleSumaClick.bind(this);
        this.inputChange = this.inputChange.bind(this);
    };

    //definición de manejadores de eventos
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
    handleSumaClick(e){
        if(e && e.target.id === 'btnSumar'){
            this.setState({
                resultSum: this.state.inputNumber1 + this.state.inputNumber2
            });
        }
    };
    inputChange(e){
        if(e && e.target.id === 'inputNumber1'){
            this.setState({
                inputNumber1: Number(e.target.value)
            });
        }else{
            this.setState({
                inputNumber2: Number(e.target.value)
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
        return (
            <div className="Content">
                    <h1>Soy el content</h1>
<p>
                <button id="add" onClick={this.handleEventClick}>+</button>
                <button id="substract" onClick={this.handleEventClick}>-</button>
                <button id="reset" onClick={this.handleEventClick} >RESET</button>
                <label><b>{this.state.counter} </b></label>
</p>
                <p>
                    <input id="inputNumber1" type="number" value={this.state.inputNumber1} onChange={this.inputChange} />
                    <input id="inputNumber2" type="number" value={this.state.inputNumber2} onChange={this.inputChange}/>
                    <button id="btnSumar" onClick={this.handleSumaClick} >Sumar</button>
                    <label><b>{this.state.resultSum} </b></label>
                </p>

            </div>
        );
    }
}

export default Content;
