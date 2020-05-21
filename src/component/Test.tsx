import React from 'react';
import ReactDOM from 'react-dom';
import CytoscapeComponent from 'react-cytoscapejs';

class MyApp extends React.Component {


   cy:any;

   selected: string = `
   <select class=".select">
    <option>step1</option>
    <option>step2</option>
    <option>step3</option>
    <option>step4</option>
    </select>
   `;

   addNode(node:string,sourceNode:string) {
    this.cy.add([{ group: "nodes", data: { id: node, name: node} },
    { group: "edges", data: { id: sourceNode+'-'+node, source: sourceNode, target: node } }]);
   }

   makeNode(currentNodeId:string) { 
    let newNodeId = parseInt(currentNodeId)+1;
    this.addNode(newNodeId.toString(),currentNodeId)
   }
   
   

  render(){
      
    const elements = [
        { data: { id: '22222', label: 'Node 1',name:"test1" }, position: { x: 500, y: 500 } },];
    return(
         <CytoscapeComponent cy={(cy: any) => { 
             this.cy=cy; 
             this.cy.on('click','node', (_evt: any) => {
                this.makeNode(_evt.target.id());
              })
            }}elements={elements} style={ { width: '1600px', height: '1600px' } }/>
    )
    // return <CytoscapeComponent  cy={(cy: { on: (arg0: string, arg1: string, arg2: (_evt: any) => void) => any; layout: (arg0: any) => { (): any; new(): any; run: { (): void; new(): any; }; }; fit: () => void; }) =>
    //     cy.on('click', 'node', _evt => {
            
    //         // console.log(_evt.target.id());
    //     //   cy.layout(layoutOptions).run()
    //     //   cy.fit()
    //     })
        
    //   }  elements={elements} style={ { width: '1600px', height: '1600px' } } />;
  }
}

export default MyApp