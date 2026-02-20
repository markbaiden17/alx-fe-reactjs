import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders the TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  });

  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  test('toggles a todo item', () => {
    render(<TodoList />);
    const todoText = screen.getByText('Learn React');
    
    // Toggle completion
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');
    
    // Toggle back
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const todoToDelete = screen.getByText('Learn React');
    // Find the button that is a sibling of the text we found
    const deleteButton = screen.getAllByText('Delete')[0];

    fireEvent.click(deleteButton);
    expect(todoToDelete).not.toBeInTheDocument();
  });
});