import gql from 'graphql-tag'

export const CREATE_USER = gql`mutation ($idToken: String!){
    createUser(authProvider: {auth0: {idToken: $idToken}}) {
      id
    }
}`

export const CREATE_MINDMAP = gql`
  mutation createMindmap($name: String!, $graph: Json!) {
    createMindmap(name: $name, graph: $graph) {
      id
    }
  }
`
