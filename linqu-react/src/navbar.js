import React, {Component} from 'react';
import PropTypes from 'prop-types';
import createClass from 'create-react-class';
import classNames from 'classnames';
import smoothScroll from './SmoothScroll';

var ListItem = createClass({
    propTypes: {
        onClick: PropTypes.func.isRequired,
        isSelected: PropTypes.bool
    },
    getDefaultProps: function() {
        return {
            isSelected: false
        };
    },
    getInitialState: function() {
        return {
            hover_flag: false
        };
    },
    hoverEvent: function() {
        this.setState({hover_flag: !this.state.hover_flag});
    },
    render: function() {
        var klas = classNames({
            'active': this.props.isSelected
        });
        return (
            <li
                onClick={this.props.onClick}
                className={klas}>
                <a href='#'>{this.props.name}</a>
            </li>
        );
    }
});
var List = createClass({
    getInitialState: function() {
        return {
            selectedItem: 0
        };
    },
    clickHandler: function(item, idx) {
        this.setState({selectedItem: idx});
        smoothScroll.scrollTo(item.name);
    },
    render: function() {
        var items = this.props.data.map(function (item, idx) {
            var is_selected = this.state.selectedItem == idx;
            return <ListItem
                key={idx}
                name={item.name}
                onClick={this.clickHandler.bind(this, item, idx)}
                isSelected={is_selected}
                />;
        }.bind(this));
        return (
            <ul class="nav navbar-nav navbar-right">
                {items}
            </ul>
        );
    }
});

export class Navbar extends Component {
    render() {
        var data = [];
        data.push({name: 'Home'});
        data.push({name: 'Why'});
        data.push({name: 'How'});
        data.push({name: 'Contact'});

    return (
        <div>
            <List data={data} />
        </div>
    )

    }
};

