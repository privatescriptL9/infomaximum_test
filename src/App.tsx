import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import AuthLayout from './components/layouts/AuthLayout'
import HomeLayout from './components/layouts/HomeLayout'
import ProcessPage from './components/pages/ProcessPage'
import ProfilePage from './components/pages/ProfilePage'
import AuthPage from './components/pages/AuthPage'
import RegPage from './components/pages/RegPage'

const App: React.FC = () => {
  const token = sessionStorage.getItem('token')
  let routing

  if (token) {
    routing = (
      <HomeLayout>
        <Switch>
          <Route path="/process" component={ProcessPage} />
          <Route path="/profile" component={ProfilePage} />
          <Redirect to="/process" />
        </Switch>
      </HomeLayout>
    )
  } else {
    routing = (
      <AuthLayout>
        <Switch>
          <Route path="/auth" component={AuthPage} />
          <Route path="/reg" component={RegPage} />
          <Redirect to="/auth" />
        </Switch>
      </AuthLayout>
    )
  }

  return routing
}

export default App
