import React from 'react'
import Auth0Lock from 'auth0-lock'
import { graphql } from 'react-apollo'
import { CREATE_USER } from '../mutations'
import { USER_QUERY } from '../queries'

const LoginAuth0 = props => {
  if(props.data.loading){
    return(<p/>)
  }

  const _logout = () => {window.localStorage.removeItem('auth0IdToken');window.location.reload();};
  const _lock = new Auth0Lock('lnmp9wVNrodTjefsFd0EuhrvcNghhfX4', 'geekodour.auth0.com');

  //  if (props.data.user || window.localStorage.getItem('auth0IdToken') === null) {
  if (props.data.user) {
    return (
       <a className="nav-item is-tab" onClick={()=>(_logout())}>Logout</a>
    )
  }

  _lock.on('authenticated', (authResult) => {
    window.localStorage.setItem('auth0IdToken', authResult.idToken);
    createUser();
  })

  const createUser = () => {
    const variables = {
      idToken: window.localStorage.getItem('auth0IdToken')
    }

    props.createUser({ variables })
      .then((response) => {
        window.location.reload();
      }).catch((e) => {
        window.location.reload();
        //console.error(e)
      })
  }

  return (
     <a className="nav-item is-tab" onClick={()=>(_lock.show())}>Login</a>
  )
}

const LoginCREATE_USER = graphql(CREATE_USER,{ name: 'createUser'})(LoginAuth0)
export default graphql(USER_QUERY,{ options: { fetchPolicy: 'network-only' } })(LoginCREATE_USER)
