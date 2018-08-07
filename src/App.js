import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'

// Component imports
import Header from './components/layout/Header'
import Routes from './Routes'
import { containerStyle } from './util/Constants'
import BreadcrumbView from './components/layout/BreadcrumbView'
import store from './store'
import { setCurrentStudent } from './actions'

// TODO: ADD QUERY BATCHING
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        )
      if (networkError) console.log(`[Network error]: ${networkError}`)
    }),
    new HttpLink({
      uri: 'https://advisemebetaserver.herokuapp.com/advisemeserver/dev',
      credentials: 'same-origin'
    })
  ]),
  cache: new InMemoryCache({
    dataIdFromObject: o => {
      return o.id || null
    }
  })
})

export default class App extends Component {
  render() {
    store.dispatch(setCurrentStudent('cjkab5xca7am40172xazvahh8'))
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <React.Fragment>
            <Header />
            <Container style={containerStyle}>
              <BreadcrumbView />
              <Routes />
            </Container>
          </React.Fragment>
        </Provider>
      </ApolloProvider>
    )
  }
}

//  <Query query={GET_STUDENT_PLAN_INFORMATION}>
//       {({ loading, error, data }) => {
//         if (loading) console.log('leel')
//         if (error) console.log('leel')
//         if (data) return <span>testing</span>
//       }}
//     </Query>
