import React, { Component } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { Spinner } from 'native-base';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, KeyboardAvoidingView, ScrollView, Image, ImageBackground } from 'react-native';


export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'admin@gmail.com',
            password: 'admin',
            loader: false,
        };
    }



    login = () => {
        const { name, user, pass, password } = this.state;
        if (name != user) {
            alert('Email and Password Invalid')
        } else {

            this.setState({
                loader: true
            }, () => {
                setTimeout(() => {
                    if (user == name, pass == password) {
                        this.setState({ loader: false }, () => { alert('Login Successfully'), this.props.navigation.navigate('Dashboard') })
                    }
                }, 2000)
            })
        }

    }



    render() {
        return (

            <View style={styles.container}>

                <ScrollView>
                    <View style={styles.container}>
                        <KeyboardAvoidingView behavior='position'>
                            <StatusBar backgroundColor="blue" barStyle="light-content" />

                            <View>
                                <Image
                                    style={styles.attesprocess}
                                    source={require('../../assets/images/logo.png')}
                                />
                            </View>

                            <Text style={styles.firstText}>Welcome to</Text>


                            <Text style={styles.secondText}>DADABHOY INSTITUTE OF HIGHER EDUCATION</Text>
                            <View style={styles.ViewBorder} />


                            <Text style={styles.thirdText}>Login with email</Text>

                            <TextInput
                                style={styles.textInput}
                                mode='outlined'
                                label='Email'
                                placeholder='eg@gmail.com'
                                theme={{ colors: { primary: 'blue' } }}
                                onChangeText={(Text) => { this.setState({ user: Text }) }}
                            />

                            <TextInput
                                style={styles.textInput}
                                mode='outlined'
                                label='Password'
                                theme={{ colors: { primary: 'blue' } }}
                                placeholder='password'
                                secureTextEntry={true}
                                onChangeText={(Text) => { this.setState({ pass: Text }) }}
                            />


                            {this.state.loader == true && <Spinner color='blue' />}
                            <Button theme={{ colors: { primary: 'blue' } }} style={styles.textInput} mode="contained" onPress={this.login}>
                                Login
                            </Button>




                            <TouchableOpacity onPress={() => this.props.navigation.navigate("SIGNUP")}>

                                <Text style={styles.thirdText}>Create an Account</Text>
                            </TouchableOpacity>

                        </KeyboardAvoidingView>
                    </View>
                </ScrollView>

            </View>

        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '95%',
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: '#cad1e9',
    },
    firstText: {
        fontSize: 35,
        marginLeft: 18,
        marginTop: 10,
        color: 'blue'
    },
    secondText: {
        fontSize: 30,
        marginLeft: 18,
        color: 'blue'
    },
    thirdText: {
        fontSize: 20,
        marginLeft: 18,
        marginTop: 20,
    },
    ViewBorder: {
        borderBottomColor: 'blue',
        borderBottomWidth: 4,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 100,
        marginTop: 4,
    },
    textInput: {
        marginLeft: 18,
        marginRight: 18,
        marginTop: 18,
    },

});
