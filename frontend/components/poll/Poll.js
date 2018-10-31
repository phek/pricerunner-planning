import React, { Fragment } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Option from './option/Option'

const Poll = ({ id, question, options }) => {
    const OPTION_MUTATION = gql`
        mutation OptionMutation($pollID: ID!, $description: String!) {
            addOption(pollID: $pollID, description: $description) {
                id
                description
                createdAt
            }
        }
`

    return (
        <Fragment>
            <Mutation mutation={OPTION_MUTATION} variables={{ pollID: id, description: "Maybe" }}>
                {optionMutation => <button onClick={optionMutation}>Submit</button>}
            </Mutation>

            <div>
                <h1>{question}</h1>
                {options.map((option, index) => <Option key={index} option={option} />)}
            </div>
        </Fragment>
    )
};

export default Poll