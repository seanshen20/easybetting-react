import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navbar from './navbar';
configure({adapter: new Adapter()});

describe('Test navigation Items', () => {
    it('should render 3 Navlink elements when started', () => {
        const wrapper = shallow(<Navbar />);
        expect(wrapper.find('div')).toHaveLength(3)
    })
})