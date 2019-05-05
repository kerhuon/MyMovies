import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from "./Components/Search";
import FilmItem from "./Components/FilmItem";

export default class App extends React.Component {
  render() {
    return (
      <Search/>
      //<View style={styles.container}>
        //<Text>Salut ma chérie!</Text>
      //</View>
    );
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
