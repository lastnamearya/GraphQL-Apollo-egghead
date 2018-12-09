import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import './App.css';

const client = new ApolloClient({
  // The only Argument that is 100% recommended by Apollo Client ~ GraphQL endpoint
  uri: 'http://localhost:4000/'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>Hello World</div>
        <ApolloConsumer>
          {client => {
            client
              .query({
                query: gql`
                  {
                    recipes {
                      id
                      title
                    }
                  }
                `
              })
              .then(res => console.log(res));
            return null;
          }}
        </ApolloConsumer>
      </ApolloProvider>
    );
  }
}

export default App;
