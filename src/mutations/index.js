import gql from 'graphql-tag'

export const CREATE_USER = gql`mutation ($idToken: String!){
    createUser(authProvider: {auth0: {idToken: $idToken}}) {
      id
    }
}`
