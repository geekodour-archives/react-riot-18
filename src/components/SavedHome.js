import React from 'react'
import { bindActionCreators } from 'redux'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'

import * as uiActions from '../actions/uiActions'
import * as graphActions from '../actions/graphActions'
import { GET_MAP, USER_QUERY } from '../queries'

import Editor from './Editor'
import GraphContainer from './GraphContainer'
import SaveDialog from './SaveDialog'
import ShareDialog from './ShareDialog'
import Dock from './Dock'

const SavedHome = props => {
  if(props.data.loading){
     return <p/>
  }
  return (<section className="section">
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
      dataType="mapNodeDataORmyMapsData"
      useMaps="userMaps"
      mapNodeData="mapNodeData"
      dockOpen={props.ui.dockOpen}
      toggleDock={props.uiActions.toggleDock}
    />

    <div className="container is-fluid">
      <div className="columns">
        <div className="column is-one-quarter">
          <Editor mindmap={props.data.Mindmap} />
        </div>
        <div className="column">
          <GraphContainer/>
        </div>
      </div>
    </div>
  </section>)
}

const SavedHomeWithMap = graphql(GET_MAP,{
 options: (ownProps)=>({
    variables: {
	  id: ownProps.match.params.mindmapid
    }
  })
})(SavedHome)

const SavedHomeWithUserData = graphql(USER_QUERY,{ options: { fetchPolicy: 'network-only' } })(SavedHomeWithMap)

const mapStateToProps = state => ( { ui: state.ui });

const mapDispatchToProps = dispatch => (
  {
    graphActions: bindActionCreators(graphActions, dispatch),
    uiActions: bindActionCreators(uiActions, dispatch)
  }
);

export default connect( mapStateToProps, mapDispatchToProps)(SavedHomeWithUserData)
