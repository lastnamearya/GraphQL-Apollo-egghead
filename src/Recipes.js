import React, { Component } from 'react';
import { Query } from 'react-apollo';
import recipesQuery from './recipesQuery';

class Recipes extends Component {
  state = {
    vegetarian: false
  };

  updateVegetarian = ({ target: { checked } }) => {
    this.setState({
      vegetarian: checked
    });
  };

  render() {
    return (
      <React.Fragment>
        <label>
          <input
            type="checkbox"
            onChange={this.updateVegetarian}
            checked={this.state.vegetarian}
          />
          <span>Vegetarian</span>
        </label>
        <Query
          query={recipesQuery}
          variables={{ vegetarian: this.state.vegetarian }}
        >
          {({ data, loading, error }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Something went wrong.</p>;

            return (
              <ul>
                {data.recipes.map(({ id, title }) => (
                  <li key={id}>{title}</li>
                ))}
              </ul>
            );
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default Recipes;
