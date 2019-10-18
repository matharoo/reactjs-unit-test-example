import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

it('renders Button component', () => {
    const component = renderer.create(
        <Button label="Click Me"/>,
    ).toJSON();
    expect(component).toMatchSnapshot();
})