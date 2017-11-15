/* eslint react/style-prop-object: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const Todo = props => (
  <tr>
    <td style="border: '1px solid black';">{ props.title }</td>
    <td style="border: '1px solid black';">{ props.children }</td>
  </tr>
);

Todo.defaultProps = {
  title: '',
  children: '',
};

Todo.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
};

const TodoList = () => (
  <div className="todoList">
    <table style="border: '2px solid black';">
      <tbody>
        <Todo title="Shopping">Milk</Todo>
        <Todo title="Hair cut">13:00</Todo>
      </tbody>
    </table>
  </div>
);

const TodoForm = () => <div className="todoForm">I am a TodoForm.</div>;

const TodoBoxComponent = () => (
  <div className="todoBox">
    <h1>Todos</h1>
    <TodoList />
    <TodoForm />
  </div>
);

export default TodoBoxComponent;
