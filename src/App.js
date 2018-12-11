import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AddRecipe from './AddRecipe';
import Recipes from './Recipes';
import './App.css';

const resolvers = {
  Recipe: {
    isStarred: () => {
      return false;
    }
  }
};

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  clientState: {
    resolvers
  }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AddRecipe />
        <Recipes />
      </ApolloProvider>
    );
  }
}

export default App;
