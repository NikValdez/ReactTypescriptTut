import React, { useRef, useState } from "react"

interface Shopping {
	item: string
}

interface Props {
	text: string
	homework?: boolean
	name: {
		first: string
		last: string
	}
	shopping : Shopping
}

interface User {
	name: string
}

function TodoForm(props: Props) {
	const [ text, setText ] = useState("")
	const [user, setUser] = useState<User | null>(null)
	const textRef = useRef<HTMLInputElement | null>(null)
	return (
        <>
		{props.text}
		<form>
			<input type="text" value={text} 
			onChange={(e) => setText(e.target.value)} ref={textRef}/>
		</form>
    
        </>
	)
}

export default TodoForm
