import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Component } from 'react';
import { render } from 'react-dom';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import Header from './components/header';

export default class App extends Component {
  // const [data, setData] = useState([]);
  // const [name, setName] = useState('');
  // const [abilities, setAbilities] = useState('');
  // const [id, setId] = useState(0);


  state = {
    data: []
  };


  componentWillMount() {
    this.fetchPokemons();
  }

fetchPokemons = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const json = await response.json();
  this.setState({data: json.results});
}


render() {
  return (
    <View style={styles.container}>
      {/*header*/}
      <Header />
      <View style={styles.list}>
        <FlatList
          data={this.state.data}
          style={styles.list}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            <Text style={styles.txt}>
              Nome : {`${item.name}`}
            </Text>}
        />
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 50,
    color: '#bbb',
    margin: 40,
    flex: 1,
    justifyContent: 'center',
    width: 250,
    borderWidth: 2,
    borderRadius: 10,
  },
  list: {
    textAlign: 'center',
    margin: 20,
  },
  txt: {
    fontSize: 20,

  }
});
