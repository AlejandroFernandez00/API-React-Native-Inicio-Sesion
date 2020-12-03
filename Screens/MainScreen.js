import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const fraseAño = () => {
    return fetch('http://numbersapi.com/random/year?json')
      .then((response) => response.json())
      .then((json) => {
        return json.text;
      })
      .catch((error) => {
        console.error(error);
      });
  };


export default class MainScreen extends Component{

    handlerLogout(){
        this.props.onLogout();
    }
    
    constructor(props){
        super(props)
        this.state = {
            isReady: false,
            texto: null
          };
        }
        async componentDidMount() {
            this.setState({ isReady: true });
          }

    render(){
        return (
            <View style={styles.container}>
                <Text>Bienvenido, ahora puede utilizar nuestra API.</Text>
                <Button onPress={() => this.handlerClick()}
                  title="Llamar API"
                  />
                  <Text>{this.state.texto}</Text>  
                <Button
                    onPress={() => this.handlerLogout()}
                    title="Cerrar sesión"/>
            </View>
        );
    }

    handlerClick(){
        fraseAño().then(resp=> {
          this.setState({texto: resp});
        });
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});