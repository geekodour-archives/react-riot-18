import React from 'react'
import Auth0Lock from 'auth0-lock'
import { graphql } from 'react-apollo'
import { CREATE_USER } from '../mutations'
import { USER_QUERY } from '../queries'

const LoginAuth0 = props => {
  const _lock = new Auth0Lock('lnmp9wVNrodTjefsFd0EuhrvcNghhfX4', 'geekodour.auth0.com');

  _lock.on('authenticated', (authResult) => {
    window.localStorage.setItem('auth0IdToken', authResult.idToken);
    console.log('gotcha!');
    createUser();
  })

  const createUser = () => {
    if(!props.data.user){
      const variables = {
        idToken: window.localStorage.getItem('auth0IdToken')
      }
      props.createUser({ variables })
        .then((response) => {
            console.log('DONE');
        }).catch((e) => {
          console.error(e)
        })
    }
  }

  return (
     <button onClick={()=>(_lock.show())}>Login</button>
  )
}


const LoginCREATE_USER = graphql(CREATE_USER,{ name: 'createUser'})(LoginAuth0)
export default graphql(USER_QUERY,{ options: { fetchPolicy: 'network-only' } })(LoginCREATE_USER)
