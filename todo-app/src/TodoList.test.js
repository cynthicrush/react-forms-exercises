import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TodoList from './TodoList'

function createTodo(todoList, task = 'meeting with boss') {
    const taskContent = todoList.getByLabelText('Task:')
    fireEvent.change(taskContent, {target: {value: task}})
    const submitBtn = todoList.getByText('Add Todo')
    fireEvent.click(submitBtn)
}

it('renders without crashing', function() {
    render(<TodoList />)
})

it("matches snapshot", function() {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it('add a todo', function() {
    const todoList = render(<TodoList />)
    createTodo(todoList)

    expect(todoList.getByText('Edit')).toBeInTheDocument()
    expect(todoList.getByText('X')).toBeInTheDocument()
})

it('update a toda', function() {
    const todoList = render(<TodoList />)
    createTodo(todoList)

    fireEvent.click(todoList.getByText('Edit'))
    const editInput = todoList.getByDisplayValue("meeting with boss");
    fireEvent.change(editInput, { target: { value: "eat" }});
    fireEvent.change(todoList.getByText('Update'))

    expect(todoList.getByDisplayValue('eat')).toBeInTheDocument()
    expect(todoList.queryByText('meeting with boss')).not.toBeInTheDocument()
})

it('delete a todo', function() {
    const todoList = render(<TodoList />)
    createTodo(todoList)

    fireEvent.click(todoList.getByText('X'))

    expect(todoList.queryByText('meeting with boss')).not.toBeInTheDocument()
})
