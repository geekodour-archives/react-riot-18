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


export const GET_LIST = gql`query allQuestions {
  allMindmaps(orderBy: createdAt_DESC) {
    id
    name
    graph
  }
}`;


export const USER_QUERY = gql`
  query {
    user {
      id
    }
  }
`;
