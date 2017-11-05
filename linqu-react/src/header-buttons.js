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

var HeaderButton = createClass({
  
    clickHandler: function(reffie) {
        smoothScroll.scrollTo(reffie);
    },
    render: function() {
    	var reference = this.props.data[3];
            return (
            	<Details
                message={this.props.data[0]}
                divklasse={this.props.data[1]}
                aklasse={this.props.data[2]}
                ref={reference}
                onClick={this.clickHandler.bind(this, reference)}
                />
            );
    }
});

//format for data = [message,divklasse,aklasse,reference]
//message is what comes between <a></a>
//div- and aklasse are the class of the div and a respectively
// reference is the href of the component
export class HeaderButtons extends Component {
	render () {
		var data1 = ["Watch the video!","brn-btn aboutlinqnpmu","btn btn-download","feature"];
		var data2 = ["Get in touch with us!","low aboutlinqu","knopcontact btn btn-download","Contact"];
		var data3 = [<i class="fa fa-angle-down" id="arrow"></i>,"overlay-detail","","feature"];
		return (
			<div>
        		<h2>Choose a company that fits your personality!</h2>
        		<HeaderButton data= {data1}/>
        		<HeaderButton data= {data2}/>
        		<HeaderButton data= {data3}/>
        	</div>
		)
	}
};