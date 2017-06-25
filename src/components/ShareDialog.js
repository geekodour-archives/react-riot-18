import React from 'react'
import Dialog from 'material-ui/Dialog'

const ShareDialog = props => {
  if(props.params.mindmapid){
  return (
  <Dialog
    title="Share MindMap"
    modal={false}
    open={props.shareDialogOpen}
    onRequestClose={props.toggleShareDialog}>
    Share this url <pre>{`http://sentry-aaron-10753.netlify.com/${props.params.mindmapid}`}</pre>
  </Dialog>
  )
  }
  return (
  <Dialog
    title="Only saved maps can be shared, please save first"
    modal={false}
    open={props.shareDialogOpen}
    onRequestClose={props.toggleShareDialog}>
    Share url from here
  </Dialog>
  )
}

//const mapStateToProps = state => ({ auth: state.auth, ui: state.ui });
//const mapDispatchToProps = dispatch => (
//  {
//    uiActions: bindActionCreators(uiActions, dispatch)
//  }
//);

//export default connect( mapStateToProps, mapDispatchToProps)(DialogBox)
export default ShareDialog
