import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as graphActions from '../actions/graphActions'
import * as uiActions from '../actions/uiActions'


// graphql
import { graphql, compose } from 'react-apollo'
import { USER_QUERY } from '../queries'
import { CREATE_MINDMAP, CREATE_MINDMAP_USER_RELATION } from '../mutations'

// cool stuff, this should be in the action creator file but design choices!
import {genGraph} from '../utils'


import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const Editor = props => {
  const handleSave = () => {
    // check if new or old mindmap create and update accordingly
    // check if graph and names are valid: todo
    // do error if name or editor field is empty
    let graph = genGraph(props.graph.mdText);
    let name = props.graph.graphName;
    if(props.data.user){
      props.createMindMap({variables: { name, graph }})
        .then((res) => {
          let mindmapsMindmapId = res.data.createMindmap.id;
          let userUserId = props.data.user.id;
          props.createMindMapRelation({variables: {userUserId, mindmapsMindmapId}})
        })
    }
    props.uiActions.toggleSaveDialog();
  }

  const handleEditorChange = (o,mdText) => {
    let graph = genGraph(mdText);
    props.graphActions.updateGraph(mdText,graph);
  }
  const handleNameChange = (o,name) => {
    props.graphActions.updateGraphName(name);
  }

  return(
  <Card>
      <CardHeader title={props.graph.graphName}/>
      <CardText>
        <TextField
          hintText="Write in markdown"
          multiLine={true}
          rows={10}
          onChange={handleEditorChange}
          rowsMax={10}
        />
        <TextField
          onChange={handleNameChange}
          hintText="Name" />
      </CardText>
      <CardActions>
        <RaisedButton
          label="save"
          onTouchTap={handleSave}
          backgroundColor='#494949'
          labelColor='#FFF'/>
        <RaisedButton
          label="share"
          onTouchTap={props.uiActions.toggleShareDialog}
          backgroundColor='#494949'
          labelColor='#FFF'/>
      </CardActions>
    </Card>
  )
}



const EditorWithMutions = compose(
  graphql(USER_QUERY,{
    options: { fetchPolicy: 'network-only' }
  }),
  graphql(CREATE_MINDMAP,{
    name: 'createMindMap'
  }),
  graphql(CREATE_MINDMAP_USER_RELATION,{
    name: 'createMindMapRelation'
  })
)(Editor)

const mapStateToProps = state => ({ graph: state.graph });
const mapDispatchToProps = dispatch => (
  {
    graphActions: bindActionCreators(graphActions, dispatch),
    uiActions: bindActionCreators(uiActions, dispatch)
  }
);

export default connect( mapStateToProps, mapDispatchToProps)(EditorWithMutions)
