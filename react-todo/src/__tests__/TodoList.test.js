import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders the TodoList component and initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'Test Testing Library' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Test Testing Library')).toBeInTheDocument();
  });

  test('toggles a todo completion status', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    
    // Initial state: not completed (no line-through)
    expect(todoItem.parentElement).not.toHaveStyle('text-decoration: line-through');
    
    // Click to toggle
    fireEvent.click(todoItem);
    expect(todoItem.parentElement).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Build a Todo App');
    const deleteButton = todoItem.nextSibling; // The "Delete" button next to the span

    fireEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();
  });
});