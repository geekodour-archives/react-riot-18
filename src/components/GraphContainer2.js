import React, {Component} from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
//import MindMap from 'react-mindmap'
import { lifecycle } from 'recompose'
import d3 from 'd3'

import {Card, CardHeader, CardText} from 'material-ui/Card'

const width = 500;
const height = 400;
const force = d3.layout.force()
  .charge(-300)
  .linkDistance(50)
  .size([width, height]);

const enterNode = (selection) => {
  selection.classed('node', true);
  selection.append('circle')
    .attr("r", (d) => d.size)
    .call(force.drag);
  selection.append('text')
    .attr("x", (d) => d.size + 5)
    .attr("dy", ".35em")
    .text((d) => d.key);
};

const updateNode = (selection) => {
  selection.attr("transform", (d) => "translate(" + d.x + "," + d.y + ")");
};

const enterLink = (selection) => {
  selection.classed('link', true)
    .attr("stroke-width", (d) => d.size);
};

const updateLink = (selection) => {
  selection.attr("x1", (d) => d.source.x)
    .attr("y1", (d) => d.source.y)
    .attr("x2", (d) => d.target.x)
    .attr("y2", (d) => d.target.y);
};

const updateGraph = (selection) => {
  selection.selectAll('.node')
    .call(updateNode);
  selection.selectAll('.link')
    .call(updateLink);
};

//const GraphContainer2 = props => {
class GraphContainer2 extends Component {

  componentDidMount(){
    this.d3Graph = d3.select(findDOMNode(this.refs.graph));
    force.on('tick', () => { this.d3Graph.call(updateGraph); });
  }

  shouldComponentUpdate(nextProps) {
    this.d3Graph = d3.select(findDOMNode(this.refs.graph));
    const d3Nodes = this.d3Graph.selectAll('.node').data(nextProps.nodes, (node) => node.key);
    d3Nodes.enter().append('g').call(enterNode);
    d3Nodes.exit().remove();
    d3Nodes.call(updateNode);

    const d3Links = this.d3Graph.selectAll('.link').data(nextProps.links, (link) => link.key);
    d3Links.enter().insert('line', '.node').call(enterLink);
    d3Links.exit().remove();
    d3Links.call(updateLink);

    force.nodes(nextProps.nodes).links(nextProps.links);
    force.start();
    return false;
  }

  render(){
    return (
    <Card style={{height: '500px'}}>
        <CardHeader title="Graph Display" />
        <CardText>
          <svg width={width} height={height}>
              <g ref='graph' />
      	  </svg>
        </CardText>
    </Card>
    )
  }
}


const mapStateToProps = state => ({ graph: state.graph })

export default connect( mapStateToProps, null)(GraphContainer2)
