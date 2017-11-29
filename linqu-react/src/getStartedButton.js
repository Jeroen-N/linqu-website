import React, {Component} from 'react';
import PropTypes from 'prop-types';
import createClass from 'create-react-class';
import smoothScroll from './SmoothScroll';


var Details = createClass({
    propTypes: {
        onClick: PropTypes.func.isRequired
    },
    render: function() {
        return (
            <div
                onClick={this.props.onClick}
                class={this.props.divklasse}>
                <a class={this.props.aklasse} href="#">{this.props.message}</a>
            </div>
        );
    }
});

var startButton = createClass({
  
    clickHandler: function() {
        smoothScroll.scrollTo("main-header");
    },
    render: function() {
            return (
            	<Details
                message={this.props.data[0]}
                divklasse={this.props.data[1]}
                aklasse={this.props.data[2]}
                onClick={this.clickHandler.bind(this)}
                />
            );
    }
});

//format for data = [message,divklasse,aklasse,reference]
//message is what comes between <a></a>
//div- and aklasse are the class of the div and a respectively
// reference is the href of the component
export class getStartedButton extends Component {
	render () {
		var data1 = ["Let's get started!","low aboutlinqu","knopcontact btn btn-download"];
		return (
			<div>
        		<HeaderButton data= {data1}/>
        	</div>
		)
	}
};