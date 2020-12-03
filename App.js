import React, {Component} from 'react';

import LoginScreen from "./Screens/LoginScreen";
import MainScreen from "./Screens/MainScreen";


export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {isLoggedIn:false}
    }

    setLogin(){
        this.setState({isLoggedIn:true});
    }

    setLogout(){
        this.setState({isLoggedIn:false});
    }

    render(){

        let screen;
        if(this.state.isLoggedIn){
            screen = <MainScreen onLogout={() => this.setLogout()}/>
        } else {
            screen = <LoginScreen onLogin={() => this.setLogin()}/>
        }

        return screen;

    }

} 