import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
 
class Accordion2 extends React.Component {
    constructor(props){
        super(props)
        
    }
    
    componentWillMount(){
      console.log('componentWillMount');
    }
    componentDidMount(){
      console.log('componentDidMount');
        console.log('when called again : '+this.props.location.pathname)
    }
    shouldComponentUpdate(){
        console.log('when called again : '+this.props.location.pathname)
        return true
    }

    render(){

        return<div></div>
    }
}


export default Accordion2;
