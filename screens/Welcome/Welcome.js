import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('LOGIN');
        }, 2000);
    }


    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 140, height: 80 }} source={require('../../assets/images/logo.png')} />
                <ActivityIndicator style={{ marginTop: 10 }} size="large" color="blue" />
            </View>
        );
    }
}
