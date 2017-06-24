import gql from 'graphql-tag'

export const GET_LIST = gql`query allQuestions {
  allQuestions(orderBy: createdAt_DESC) {
    id
    title
    description
  }
}`;
