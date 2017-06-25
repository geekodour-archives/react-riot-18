import gql from 'graphql-tag'


export const GET_MAP = gql`query Mindmap($id: ID!) {
  Mindmap(id: $id) {
    id
    name
    mdText
    user {
      id
    }
  }
}`


export const GET_USER_MAPS = gql`query allMindmaps($id: ID!) {
  allMindmaps(filter: {user: {id: $id} }) {
    id
    name
  }
}`;


export const USER_QUERY = gql`
  query {
    user {
      id
    }
  }
`;
