import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Todo from './Todo'

it('renders without crashing', function() {
    render(<Todo />)
})

it("matches snapshot", function() {
    const { asFragment } = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
});

it('update works on form submit', function() {
    const updateMock = jest.fn()
    const { getByText } = render(<Todo update={updateMock} />)
    const editBtn = getByText('Edit')
    fireEvent.click(editBtn)
    const updateBtn = getByText('Update')
    fireEvent.click(updateBtn)
    expect(updateMock).toHaveBeenCalled()
})

it('delete works on button click', function() {
    const removeMock = jest.fn()
    const { getByText } = render(<Todo remove={removeMock} />)
    const deleteBtn = getByText('X')
    fireEvent.click(deleteBtn)
    expect(removeMock).toHaveBeenCalled()
})
