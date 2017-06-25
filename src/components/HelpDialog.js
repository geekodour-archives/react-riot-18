import React from 'react'
import Dialog from 'material-ui/Dialog'

const HelpDialog = props => (
  <Dialog
    title="How to?"
    modal={false}
    open={props.helpDialogOpen}
    onRequestClose={props.toggleHelpDialog}>
    You just have to write in markdown, use "#" for headings
    for eg.<br/>
    # node1<br/>
    ## node2<br/>
        ### node3
  </Dialog>
)

export default HelpDialog
