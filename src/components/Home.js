import React from 'react'
import { bindActionCreators } from 'redux'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'

import * as uiActions from '../actions/uiActions'
import { USER_QUERY } from '../queries'

import Editor from './Editor'
import GraphContainer from './GraphContainer'
import GraphContainer2 from './GraphContainer2'
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
      params={props.match.params}
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
          <GraphContainer2 nodes={[{key:"Hello",size:"7"},{key:"What's up!",size:"5"},{key:"W up!",size:"9"}]} links={[{source:0,target:1,key:"0,1",size:"2"},{source:0,target:2,key:"0,2",size:"2"}]} />
        </div>
      </div>
    </div>
  </section>
)

//const HomeWithGQLData = graphql(GET_LIST,{name: 'getMindMaps'})(Home)
const HomeWithUserData = graphql(USER_QUERY,{ options: { fetchPolicy: 'network-only' } })(Home)

const mapStateToProps = state => ( { ui: state.ui });

const mapDispatchToProps = dispatch => (
  {
    uiActions: bindActionCreators(uiActions, dispatch)
  }
);

export default connect( mapStateToProps, mapDispatchToProps)(HomeWithUserData)
