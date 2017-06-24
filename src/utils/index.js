import marked from 'marked'

export const genGraph = src => {
  const tokens = marked.lexer(src);
  let d3Graph = {nodes:[],edges:[]};

  let headNode = { depth: 0, head: null };

  tokens.forEach(token=>{
    switch (token.type) {
      case 'heading':

        let currentNode = { name : token.text, depth : token.depth };

        // add to the nodes array
        d3Graph.nodes.push({id:currentNode.name,text:currentNode.name,tokens:[]})

        if (currentNode.depth > headNode.depth) {

          // check if the hirarchy is wrong and raise SyntaxError
          if(currentNode.depth !== headNode.depth+1){
            throw(new SyntaxError('please check if headings are nested properly'));
          }

          headNode.depth = currentNode.depth;
          currentNode = Object.assign(currentNode,{parent:headNode.head});
          headNode.head = hideParent(currentNode);

          // add to the edges array
          if(headNode.head.parent){
            d3Graph.edges.push({target:currentNode.name,source:headNode.head.parent.name,curve:{}})
          }
        }
        else {

          while (headNode.depth !== currentNode.depth) {
            headNode.depth -= 1;
            headNode.head = headNode.head.parent;
          }

          // add to the edges array
          if(headNode.head.parent){
            d3Graph.edges.push({target:currentNode.name,source:headNode.head.parent.name,curve:{}})
          }

          currentNode = Object.assign(currentNode,{parent:headNode.head.parent});
          headNode.head = hideParent(currentNode);
        }
        break;
      default:
        if(d3Graph.nodes.length){
          let lastNodeIndex = d3Graph.nodes.length-1;
          // issue1
          d3Graph.nodes[lastNodeIndex].tokens.push(token);
        }
        break;
    }
  });

  return d3Graph;
}

const hideParent = obj => {
  Object.defineProperty(obj, 'parent', { value: obj.parent, enumerable: false });
  return obj;
};
