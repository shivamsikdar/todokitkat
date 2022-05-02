import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
//#1A237E
const App = () => {
	return (
		<div style={{background:'#1A237E'}} >
		<div style={{background:'#1A237E'}} className='container p-4 '>
			<h1 style={{color: 'white',textAlign: 'center', fontFamily:'cursive'}}>My what-<span style={{color:'darkgoldenrod'}}>Todo's List</span> </h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
		</div>
		</div>
	);
};

export default App;