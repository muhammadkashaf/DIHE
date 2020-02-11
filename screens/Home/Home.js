import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  home = () => {
    { this.props.navigation.navigate('Graduates Degree Attestation Notice') }
  }


  render() {
    return (
      <View style={styles.HomeView}>


        <Text style={styles.firstText}>Welcome to</Text>


        <Text style={styles.secondText}>DADABHOY INSTITUTE OF HIGHER EDUCATION</Text>
        <View style={styles.ViewBorder} />


        <Text style={styles.fourthText}>Admission are open (Spring 2020)</Text>

        <Button theme={{ colors: { primary: 'blue' } }} style={styles.btn} mode="contained" onPress={this.home}>
          Admission Notice
        </Button>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  HomeView: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
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
  fourthText: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 18,
    fontWeight: 'bold',
  },
  ViewBorder: {
    borderBottomColor: 'blue',
    borderBottomWidth: 4,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 100,
    marginTop: 4,
  },
  btn: {
    marginTop: 20,
  },
});