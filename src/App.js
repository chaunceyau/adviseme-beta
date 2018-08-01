import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Provider } from 'react-redux'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

// Component imports
import Header from './components/layout/Header'
import Routes from './Routes'
import { containerStyle } from './util/Constants'
import BreadcrumbView from './components/layout/BreadcrumbView'
import store from './store'

const client = new ApolloClient({ uri: 'https://api.graph.cool/simple/v1/cjjpxah2l102u0189cbdxckg4' })

export default class App extends Component {
  render() {
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
