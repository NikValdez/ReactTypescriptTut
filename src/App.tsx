import React from "react"
import "./App.css"
import TodoForm from "./TodoForm"

function App() {
	return (
		<div className="App">
			<h1>Typescript Intro</h1>
			<TodoForm text="test" name={{ first: "Darwin", last: "Tuts" }} />
		</div>
	)
}

export default App
