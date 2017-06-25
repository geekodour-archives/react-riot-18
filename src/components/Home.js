import React from 'react'
import { bindActionCreators } from 'redux'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'

import * as uiActions from '../actions/uiActions'
import { GET_LIST, USER_QUERY } from '../queries'

import Editor from './Editor'
import GraphContainer from './GraphContainer'
import SaveDialog from './SaveDialog'
import ShareDialog from './ShareDialog'
import Dock from './Dock'

const Home = props => (
  <section className="section">
    <SaveDialog
      userInfo={props.data.user}
      saveDialogOpen={props.ui.saveDialogOpen}
      toggleSaveDialog={props.uiActions.toggleSaveDialog} />
    <ShareDialog
      userInfo={props.data.user}
      shareDialogOpen={props.ui.shareDialogOpen}
      toggleShareDialog={props.uiActions.toggleShareDialog} />
    <Dock
      userInfo={props.data.user}
      dockOpen={props.ui.dockOpen}
      toggleDock={props.uiActions.toggleDock}
    />

    <div className="container is-fluid">
      <div className="columns">
        <div className="column is-one-quarter">
          <Editor/>
        </div>
        <div className="column">
          <GraphContainer/>
        </div>
      </div>
    </div>
  </section>
)

const HomeWithGQLData = graphql(GET_LIST,{name: 'getMindMaps'})(Home)
const HomeWithUserData = graphql(USER_QUERY,{ options: { fetchPolicy: 'network-only' } })(HomeWithGQLData)

const mapStateToProps = state => ( { ui: state.ui });

const mapDispatchToProps = dispatch => (
  {
    uiActions: bindActionCreators(uiActions, dispatch)
  }
);

export default connect( mapStateToProps, mapDispatchToProps)(HomeWithUserData)
