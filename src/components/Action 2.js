import React from 'react';

const Action = (props) => (
         <button
         className = "big-button" 
         onClick = {props.handlePick}
         disabled = {props.hasOption}>What should I do? </button>
        
);

// class Action extends React.Component{
    //handlePick(){
        //alert('handlePick');
    //}
    // render(){
        // return (
            // <button onClick = {this.props.handlePick}
            // disabled = {!this.props.hasOptions}> What should I do? </button>
        // );
    //}
// }

export default Action;