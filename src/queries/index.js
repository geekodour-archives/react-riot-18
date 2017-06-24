import gql from 'graphql-tag'

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
