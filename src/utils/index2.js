import marked from 'marked'

export const genGraph2 = src => {
  const tokens = marked.lexer(src);
  let d3Graph = {nodes:[],edges:[]};

  let headNode = { depth: 0, head: null };
  let headingsCount = 0;
  tokens.forEach((token,i)=>{
    switch (token.type) {
      case 'heading':

        let currentNode = { name : token.text, depth : token.depth };


// nodes={[{key:"Hello",size:"7"},{key:"What's up!",size:"5"},{key:"W up!",size:"9"}]} links={[{source:0,target:1,key:"0,1",size:"2"},{source:0,target:2,key:"0,2",size:"2"}]} 

        // add to the nodes array
        d3Graph.nodes.push({key:currentNode.name,tokens:[],index:headingsCount});
        headingsCount += 1;

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
                  d3Graph.edges.push({
                          target:currentNode.index,
                          source:headNode.head.parent.index,
                          key:`${headNode.head.parent.index},${currentNode.index}`,
                          size: `2`
                  })
          }
        }
        else {

          while (headNode.depth !== currentNode.depth) {
            headNode.depth -= 1;
            headNode.head = headNode.head.parent;
          }

          // add to the edges array
          if(headNode.head.parent){
                  d3Graph.edges.push({
                          target:currentNode.index,
                          source:headNode.head.parent.index,
                          key:`${headNode.head.parent.index},${currentNode.index}`,
                          size: `2`
                  })
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
