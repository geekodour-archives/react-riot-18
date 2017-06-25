import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { lifecycle } from 'recompose'
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
  //
  //
  // add modify mutation, call that in handle save when in params page
  const handleSave = () => {
    if(props.graph.graphName && props.graph.graph.nodes.length ){
      let graph = genGraph(props.graph.mdText);
      let name = props.graph.graphName;
      let mdText = props.graph.mdText;
      if(props.data.user){
        props.createMindMap({variables: { name, graph, mdText }})
          .then((res) => {
            let mindmapsMindmapId = res.data.createMindmap.id;
            let userUserId = props.data.user.id;
            props.createMindMapRelation({variables: {userUserId, mindmapsMindmapId}})
          })
      }
      props.uiActions.toggleSaveDialog();
    }
    else {
      if(!props.graph.graphName){
        props.graphActions.updateGraphNameError(`Please give a name to save`);
      }
      if(!props.graph.graph.nodes.length){
        props.graphActions.updateEditorError(`Something is wrong with the markdown`);
      }
    }
  }

  const handleEditorChange = (o,mdText) => {
    try{
      let graph = genGraph(mdText);
      props.graphActions.updateEditorError('');
      props.graphActions.updateGraph(mdText,graph);
    }
    catch(err){
      props.graphActions.updateEditorError('Wrong syntax');
    }
  }
  const handleNameChange = (o,name) => {
    props.graphActions.updateGraphNameError(``);
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
          defaultValue={props.mindmap?props.mindmap.mdText:''}
          errorText={props.graph.editorError}
          onChange={handleEditorChange}
          rowsMax={10}
        />
        <TextField
          onChange={handleNameChange}
          errorText={props.graph.graphNameError}
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
  }),
  lifecycle({
    componentDidMount(){
      if(this.props.mindmap){
        let graph = genGraph(this.props.mindmap.mdText);
        this.props.graphActions.updateGraph(this.props.mindmap.mdText,graph);
      }
    }
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
