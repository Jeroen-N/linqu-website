import React, {Component} from 'react';
import PropTypes from 'prop-types';
import createClass from 'create-react-class';
import smoothScroll from './SmoothScroll';
import EventSystem from './EventSystem';



var Details = createClass({
    propTypes: {
        onClick: PropTypes.func.isRequired
    },
    render: function() {
        return (
            <div
                onClick={this.props.onClick}
                class={this.props.divklasse}>
                <a class={this.props.aklasse}>{this.props.message}</a>
            </div>
        );
    }
});

var HeaderButton = createClass({
  
    clickHandler: function(reffie) {
        if(reffie == 'Video') {
            EventSystem.publish('change-comp', 3);
        } else if(reffie == 'Contact'){
            smoothScroll.scrollTo(reffie);    
        } else if(reffie == 'Register'){
            EventSystem.publish('change-comp', 4);
        }
        
    },

    render: function() {
    	var reference = this.props.data[3];
            return (
            	<Details
                message={this.props.data[0]}
                divklasse={this.props.data[1]}
                aklasse={this.props.data[2]}
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
        var data1 = ["Watch the video!","brn-btn aboutlinqnpmu","btn btn-download","Video"];
        var data2 = ["let's get started!","low aboutlinqu","knopcontact btn btn-download","Register"];
        var data3 = ["Get in touch with us!","low aboutlinqu","knopcontact btn btn-download","Contact"];
        var data4 = [<i class="fa fa-angle-down" id="arrow"></i>,"overlay-detail","","Contact"];
        return (
            <div>
                <h2>Choose a company that fits your personality!</h2>
                <HeaderButton data= {data1}/>
                <HeaderButton data= {data2}/>
                <HeaderButton data= {data3}/>
                <HeaderButton data= {data4}/>
            </div>
        )
    }
};