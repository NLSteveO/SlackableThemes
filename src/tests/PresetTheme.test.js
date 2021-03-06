import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import PresetTheme from '../components/PresetTheme';

Enzyme.configure({ adapter: new Adapter() });

describe('PresetTheme', () => {
    let wrapper;
    const defaultProps = {
        theme: 'Aubergine',
        image: 'images/aubergine.png',
        themeColor: [
            '#3F0E40',
            '#350d36',
            '#1164A3',
            '#FFFFFF',
            '#350D36',
            '#FFFFFF',
            '#2BAC76',
            '#CD2553'
        ],
    }

    beforeEach(() => {
        wrapper = shallow(<PresetTheme {...defaultProps} />)
    })

    it('Properly renders', () => {
        expect(wrapper).toBeDefined();
    })

    describe('Renders props', () => {
        it('renders a theme', () => {
            expect(wrapper.find('span.theme-text').text()).toEqual(defaultProps.theme);
        })
        it('renders an image', () => {
            expect(wrapper.find('img.theme-thumb').prop('src')).toEqual(defaultProps.image);
        })
    })
});
