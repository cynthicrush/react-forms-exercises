import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import BoxList from './BoxList';

function createBox(box, height=7, width=7, color='hotpink') {
    const h = box.getByLabelText('Height')
    const w = box.getByLabelText('Width')
    const backgroundColor = box.getByLabelText('Background Color')
    fireEvent.change(h, { target: {value: height}})
    fireEvent.change(w, { target: {value: width}})
    fireEvent.change(backgroundColor, { target: {value: color}})
    const button = box.getByText('Add Box')
    fireEvent.click(button)
}

it('renders without crashing', () => {
    render(<BoxList />);
});

it("matches snapshot", function() {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it('adds a box', function() {
    const boxList = render(<BoxList />)

    createBox(boxList)

    const removeBtn = boxList.getByText('X')
    expect(removeBtn).toBeInTheDocument()
    expect(removeBtn.previousSibling).toHaveStyle(`
        width: 7em;
        height: 7em;
        background-color: hotpink;
    `)
})

it('removes a box', function() {
    const boxList = render(<BoxList />)

    createBox(boxList)

    const removeBtn = boxList.getByText('X')
    fireEvent.click(removeBtn)
    expect(removeBtn).not.toBeInTheDocument()
})