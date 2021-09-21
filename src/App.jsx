import React, { useState, useEffect } from 'react';

const App = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCount(c => c + 1);
		}, 1000);

		return () => clearTimeout(timer);
	}, [count, setCount]);

	return (
		<div className='main'>
			<div className='counter'>{count}</div>
			<div>Snowpack + React</div>
		</div>
	);
};

export default App;
