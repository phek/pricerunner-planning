import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Option from './option/Option'

class Poll extends Component {
    render() {
        const POLL_QUERY = gql`
            {
                polls {
                    question
                    options {
                        id
                        description
                    }
                }
            }
        `
        const polls = [
            {
                id: '1',
                description: 'Yes',
            },
            {
                id: '2',
                description: 'No',
            },
        ]

        return (
            <Query query={POLL_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>{error.toString()}</div>

                    const optionsToRender = data.options

                    return (
                        <div>
                            {optionsToRender.map(option => <Option key={option.id} option={option} />)}
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default Poll