import React from 'react'
import { graphql } from 'react-apollo'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { GET_USER_MAPS } from '../queries'

const DockWithoutData = props => {
  return(
  <Drawer
    docked={false}
    width={400}
    openSecondary={true}
    open={props.dockOpen}
    onRequestChange={props.toggleDock}>
    {props.data.allMindmaps?props.data.allMindmaps.map(mindmap=><MenuItem key={mindmap.id}>{mindmap.name}</MenuItem> ):<p/>}
  </Drawer>
  )
}

const Dock = graphql(GET_USER_MAPS,{
 options: (ownProps)=>({
    variables: {
	  id: ownProps.userInfo?ownProps.userInfo.id:null
    }
  })
})(DockWithoutData)

export default Dock
