// Components/Search.js

import React from 'react'
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = ""
        this.state = { films: [] }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }

    _loadFilms() {
        console.log(this.searchedText) // Un log pour vérifier qu'on a bien le texte du TextInput
        if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
          getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
              this.setState({ films: data.results })
          })
        }
    }

    render() {
        console.log("RENDER")
        return (
            <View style={styles.main_container}>
                <TextInput 
                    style={styles.textinput} 
                    placeholder='Titre du film' 
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                />
                <Button title='Rechercher' onPress={() => this._loadFilms()}/>
                <FlatList 
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem movie={item}/>}// tour de magie
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      marginTop: 20
    },
    textinput: {
      margin: 5,
      borderRadius: 10,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    }
  });

export default Search
