import React, { Component } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Poll from '../poll/Poll';
import './AppContainer.css';

class AppContainer extends Component {
  render() {
    const POLL_QUERY = gql`
    {
      polls{
        id,
        question,
        options {
          description
        },
        postedBy{name}
      }
    }
  `

    return (
      <div className="App">
        <Query query={POLL_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>{error.toString()}</div>

            const polls = data.polls;

            return polls.map((poll, index) => <Poll key={index} id={poll.id} question={poll.question} options={poll.options} />)
          }}
        </Query>
      </div>
    );
  }
}

export default AppContainer;
