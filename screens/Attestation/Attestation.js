import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';



export default class Attestation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.attesView}>
                <Text style={styles.text}> Enter Your Degree Number (Printed at the back of your Degree) </Text>

                <TextInput
                    style={styles.textInput}
                    mode='outlined'
                    label='XXXXXXX'
                    theme={{ colors: { primary: 'blue' } }}
                    placeholder='XXXXXXX'
                />

                <Text style={styles.subText}>(In case of non-acceptance of the Degree Number, please email to attestation@dadabhoy.edu.pk )</Text>

                <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly'}}> 
                    <Button style={styles.btn1} mode="contained">
                        Submit
                </Button>


                    <Button style={styles.btn2} mode="contained">
                        Cancel
                </Button>
                </View>
            </View>
        );
    }
}




const styles = StyleSheet.create({
    attesView: {
        flex: 1,
        width: '95%',
        alignSelf: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        marginTop: 50,
        textAlign: 'center',
        fontWeight: "bold",
    },
    subText: {
        marginTop: 10,
        textAlign: 'center',
        fontWeight: "bold",
    },
    btn1: {
        backgroundColor: 'rgb(92, 184, 92)',
        borderColor: 'rgb(92, 184, 92)',

    },
    btn2: {
        backgroundColor: 'rgb(217, 83, 79)',
        borderColor: 'rgb(217, 83, 79)',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
});