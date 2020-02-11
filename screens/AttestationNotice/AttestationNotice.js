import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';


export default class AttestationNotice extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    attestation = () => {
        { this.props.navigation.navigate('Degree Supplement Information Form') }
    }

    render() {
        return (
            <View style={styles.HomeView}>
                <ScrollView>
                    <View>
                        <Image
                            style={styles.attesprocess}
                            source={require('../../assets/images/Attestation-process.jpg')}
                        />
                    </View>



                    <View style={styles.HomeView}>
                        <Image
                            style={styles.flowchart1}
                            source={require('../../assets/images/flow-chart-1.jpg')}
                        />
                    </View>


                    <View style={styles.HomeView}>
                        <Image
                            style={styles.flowchart2}
                            source={require('../../assets/images/flow-chart-2.jpg')}
                        />
                    </View>


                    <Button theme={{ colors: { primary: 'blue' } }} style={styles.textInput} mode="contained" onPress={this.attestation}>
                        Online Application (DSIF) Form
                    </Button>

                </ScrollView>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    HomeView: {
       
        flex: 1,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: 'white',
    },
    attesprocess: {
        width: 380,
        height: 500,
        alignSelf: 'center',
    },
    flowchart1: {
        width: 450,
        height: 600,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    flowchart2: {
        width: 450,
        height: 600,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
});
