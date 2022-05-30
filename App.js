import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  getMoviesFromApiAsync() {
    fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({movies: responseJson.movies});
        this.state.movies = responseJson.movies;
        console.log(this.state.movies);
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    const movies = this.getMoviesFromApiAsync();
  }
  _onPressText() {
    alert('点击成功');
  }
  renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={this._onPressText}>
        <Text style={styles.button}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.movies} renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: '100%',
    flex: 1,
  },
  button: {
    // width: 100,
    height: 100,
    fontSize: 40,
    textAlign: 'center',
    lineHeight: 100,
  },
  item1: {
    width: 100,
    height: 50,
    backgroundColor: 'red',
  },
  item2: {
    width: 100,
    height: 80,
    backgroundColor: 'blue',
  },
  item3: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
  },
});

export default App;
