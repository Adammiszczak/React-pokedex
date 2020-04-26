import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PokemonCarouselBt from './PokemonCarouselBt';

configure({adapter: new Adapter()});

describe('<PokemonCarouselBt/>', () => {
    it('Should has got 4 images inside', () => {
        const wrapper = shallow(<PokemonCarouselBt/>);
        expect(wrapper.find('img')).toHaveLength(4);
    });
});

describe('<PokemonCarouselBt/>', () => {
    it('Should has got props named "imageBack" and "imageFront"', () => {
        const wrapper = shallow(<PokemonCarouselBt/>);
        expect(wrapper.prop(['imageFront','imageBack']));
    });
});

describe('<PokemonCarouselBt/>', () => {
    it('Should has got prop named "imageFront"', () => {
        const wrapper = shallow(<PokemonCarouselBt/>);
        expect(wrapper.props().imageFrontShiny);
    });
});