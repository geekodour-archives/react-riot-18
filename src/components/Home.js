import React from 'react'
import { bindActionCreators } from 'redux'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'

import * as uiActions from '../actions/uiActions'
import { GET_LIST } from '../queries'

import Editor from './Editor'
import GraphContainer from './GraphContainer'
import SaveDialog from './SaveDialog'
import ShareDialog from './ShareDialog'
import Dock from './Dock'

const Home = props => (
  <section className="section">
    <SaveDialog
      saveDialogOpen={props.ui.saveDialogOpen}
      toggleSaveDialog={props.uiActions.toggleSaveDialog} />
    <ShareDialog
      shareDialogOpen={props.ui.shareDialogOpen}
      toggleShareDialog={props.uiActions.toggleShareDialog} />
    <Dock
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

const HomeWithGQLData = graphql(GET_LIST)(Home)

const mapStateToProps = state => ( { ui: state.ui });

const mapDispatchToProps = dispatch => (
  {
    uiActions: bindActionCreators(uiActions, dispatch)
  }
);

export default connect( mapStateToProps, mapDispatchToProps)(HomeWithGQLData)
