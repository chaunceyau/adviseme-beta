import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'

// Component imports
import Header from './components/layout/Header'
import Routes from './Routes'
import { containerStyle } from './util/Constants'
import BreadcrumbView from './components/layout/BreadcrumbView'
import store, { persistor } from './store'

// TODO: ADD QUERY BATCHING
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import { PersistGate } from 'redux-persist/integration/react'
import ContentLoading from './pages/ContentLoading'
import { test123 } from './actions'

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
    test123()

    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <PersistGate loading={<ContentLoading />} persistor={persistor}>
            <React.Fragment>
              <Header />
              <Container style={containerStyle}>
                <BreadcrumbView />
                <Routes />
              </Container>
            </React.Fragment>
          </PersistGate>
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
