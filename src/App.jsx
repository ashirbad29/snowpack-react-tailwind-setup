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
		<div className='min-h-screen flex flex-col items-center justify-center'>
			<div className='text-gray-800 font-bold text-2xl'>{count}</div>
			<div className='text-gray-500 font-medium text-xl'>
				Snowpack + React + Tailwind <span>💚</span>
			</div>
			<a
				href='https:github.com/ashirbad29'
				className='absolute bottom-6 text-indigo-500 font-medium hover:underline'
			>
				@ashirbad29
			</a>
		</div>
	);
};

export default App;
