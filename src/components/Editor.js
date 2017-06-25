import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as graphActions from '../actions/graphActions'
import * as uiActions from '../actions/uiActions'


// graphql
import { graphql } from 'react-apollo'
import { USER_QUERY } from '../queries'
import { CREATE_MINDMAP } from '../mutations'


import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const Editor = props => (
  <Card>
      <CardHeader title="Markdown Editor" />
      <CardText>
        <TextField hintText="Name" />
        <TextField
          hintText="Write in markdown"
          multiLine={true}
          rows={10}
          onChange={(o,n)=>{console.log(n);props.graphActions.parseMd(n)}}
          rowsMax={10}
        />
      </CardText>
      <CardActions>
        <p>{JSON.stringify(props.data.user)}</p>
        <RaisedButton
          label="save"
          onTouchTap={props.uiActions.toggleSaveDialog}
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

const EditorWithCreateMindmap = graphql(CREATE_MINDMAP,{
  props: ({ownProps, mutate}) => ({
    createMindMap: ({ name, graph }) => {
      return (
        mutate({
          variables: { name, graph }
        })
      )
    }
  })
})(Editor);

const EditorWithUserData = graphql(USER_QUERY,{ options: { fetchPolicy: 'network-only' } })(EditorWithCreateMindmap)

const mapStateToProps = state => ({ auth: state.apollo });
const mapDispatchToProps = dispatch => (
  {
    graphActions: bindActionCreators(graphActions, dispatch),
    uiActions: bindActionCreators(uiActions, dispatch)
  }
);

//export default connect( mapStateToProps, mapDispatchToProps)(Editor)
export default connect( mapStateToProps, mapDispatchToProps)(EditorWithUserData)
