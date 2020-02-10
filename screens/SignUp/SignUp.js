import React, { Component } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, KeyboardAvoidingView, ScrollView, Image } from 'react-native';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {
        return (

            <View style={styles.container}>

                <ScrollView>
                    <View>
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


                            <Text style={styles.thirdText}>Create New Account</Text>


                            <TextInput
                                style={styles.textInput}
                                mode='outlined'
                                label='FullName'
                                theme={{ colors: { primary: 'blue' } }}
                            />

                            <TextInput
                                style={styles.textInput}
                                mode='outlined'
                                label='Email'
                                theme={{ colors: { primary: 'blue' } }}
                            />

                            <TextInput
                                style={styles.textInput}
                                mode='outlined'
                                label='Password'
                                theme={{ colors: { primary: 'blue' } }}
                            />

                            <TextInput
                                style={styles.textInput}
                                mode='outlined'
                                label='Phone'
                                theme={{ colors: { primary: 'blue' } }}
                            />


                            <Button theme={{ colors: { primary: 'blue' } }} style={styles.textInput} mode="contained" onPress={() => console.log('Pressed')}>
                                SignUp
                            </Button>


                            <TouchableOpacity onPress={() => this.props.navigation.navigate("LOGIN")}>


                                <Text style={styles.thirdText}>Already Have a Account ?</Text>


                            </TouchableOpacity>

                        </KeyboardAvoidingView>

                    </View>
                </ScrollView >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: 'white',
    },
    firstText: {
        fontSize: 35,
        marginLeft: 18,
        marginTop: 10,
        color: 'grey'
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
        borderBottomWidth: 3,
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
