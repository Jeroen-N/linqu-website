import React, { Component } from 'react';
import header from './Pug/header.pug';
import video from './Pug/video.pug';
import photos from './Pug/photographs.pug';
import service from './Pug/service.pug';
import todo from './Pug/whattodo.pug';
import contact from './Pug/contact.pug';
import footer from './Pug/footer.pug';
import form from './Pug/registerform.pug';
import createClass from 'create-react-class';
import EventSystem from './EventSystem';
import Slider from 'react-slick';


export default class Body extends Component{
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.listener = this.listener.bind(this)
        
    }
    next(){
        this.slider.slickNext();
        EventSystem.subscribe('change-comp', this.listener);
    }
    previous(){
        this.slider.slickPrev();
        EventSystem.subscribe('change-comp', this.listener);
    }
    listener(data) {
        this.slider.slickGoTo(data);
    }

    componentDidMount(){
        console.log("component did mount");
        EventSystem.subscribe('change-comp', this.listener);
    }

    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            beforeChange: function(currentSlide, nextSlide) {
                EventSystem.publish('extclick', nextSlide);
            },
            afterChange: function(currentSlide) {
                EventSystem.publish('comp-change', currentSlide);
                
            }
        };
        const divStyle = {
            textAlign: 'center',
            paddingBottom: '10px'
    };
        return (
            <div>
                {header.call(this)}
                <div id="Top"></div>
                <Slider ref={c => this.slider = c} {...settings}>
                    <div>{todo.call(this)}</div>
                    <div>{service.call(this)}</div>
                    <div>{photos.call(this)}</div>
                    <div>{video.call(this)}</div>
                    <div>{form.call(this)}</div>
                </Slider>
                <div style={divStyle}>
                    <a class="btn btn-download" onClick={this.previous}>Previous</a>
                    <a class="btn btn-download" onClick={this.next}>Next</a>
                </div>
                {contact.call(this)}
                {footer.call(this)}
            </div>
        )
    }
};