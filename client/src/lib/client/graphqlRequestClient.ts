import { GraphQLClient } from 'graphql-request';

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string;

const requestHeaders = {
  authorization: 'Bearer MY_TOKEN',
};

const graphqlRequestClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: requestHeaders,

  // enable cookie
  credentials: 'include',
  mode: 'cors',
});

export default graphqlRequestClient;
