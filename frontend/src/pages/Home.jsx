import axios from 'axios';
import React, { useEffect } from 'react';

function Home() {
	useEffect(() => {
		const fetchAllBooks = async () => {
			let data = await axios
				.post('http://localhost:8800/login')
				.then((response) => console.log(response));
		};
		fetchAllBooks();
	}, []);
	return (
		<div className='bg-[#2d7dbd] w-full h-full'>
			<div className='container mx-auto flex h-[89vh] items-center justify-center'>
				<h1 className='text-4xl text-center text-blue-300 font-bold '>
					WELCOME TO{' '}
					<span className='text-white'>ALPHACODE DEV. 👋</span>
				</h1>
			</div>
		</div>
	);
}

export default Home;
