import React from 'react'
import Dialog from 'material-ui/Dialog'

const ShareDialog = props => (
  <Dialog
    title="Share MindMap"
    modal={false}
    open={props.shareDialogOpen}
    onRequestClose={props.toggleShareDialog}>
    Share url from here
  </Dialog>
)

//const mapStateToProps = state => ({ auth: state.auth, ui: state.ui });
//const mapDispatchToProps = dispatch => (
//  {
//    uiActions: bindActionCreators(uiActions, dispatch)
//  }
//);

//export default connect( mapStateToProps, mapDispatchToProps)(DialogBox)
export default ShareDialog
