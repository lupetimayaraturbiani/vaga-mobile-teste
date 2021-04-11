import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Pokedex</Text>
            <img width={50} height={50}  src={require('../assets/pokebola-go.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        backgroundColor: '#428bff',
    },
    txt: {
        fontSize: 30,
        color: '#ffff',
        fontWeight: 'bold',
        marginLeft: 20,
        marginEnd: 20
    },
});