import React from 'react';
import { mount } from 'enzyme';
import Home from '../../app/components/Home';
import { expect } from 'chai';
import sinon from 'sinon';
//var webdriver = require('selenium-webdriver');
//var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.safari()).build();
//driver.get('https://www.wikipedia.org');

describe('<Home/>', function() {
    var wrapper;
 
    it('calls componentDidMount once only', function() {
        // 1
        var spy = sinon.spy(Home.prototype, 'componentDidMount');
        // 2
        wrapper = mount(<Home text="Hello, world!"/>);
        // 3
        expect(spy.calledOnce).to.equal(true);
    });
 
    it('`props` contains a `text` property with a value of "Hello, world!"', function() {
        // 4
        expect(wrapper.props().text).to.equal('Hello, world!');
    });
 
    it('has an `h1` tag with the text "Home page"', function() {
        // 5
        expect(wrapper.contains(<h1>Home page</h1>)).to.equal(true);
    });
 
    after(function() {
        // 6
        global.window.close();
    });
});