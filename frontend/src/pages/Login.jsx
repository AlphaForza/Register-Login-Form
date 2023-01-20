import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
	const [user, setUser] = useState({
		name: '',
		password: '',
	});
	const navigate = useNavigate();

	// function for getting all fields from user
	const handleChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};
	// function for send data of user to server
	const handleRegister = async (event) => {
		event.preventDefault();
		// here is little validation if length bigger than zero...
		if (user.name.length > 0 && user.password.length > 0) {
			try {
				await axios.post('http://localhost:8800/login', user);
				navigate('/');
			} catch (err) {
				console.log(err);
			}
		}
	};

	return (
		<div className='bg-[#2d7dbd] w-full h-full'>
			<div className='container mx-auto flex gap-10 flex-col h-[89vh] items-center justify-center'>
				<h1 className='text-4xl text-center text-white font-bold uppercase'>
					Login{' '}
					<span className='text-blue-300'>ALPHACODE DEV. 👋</span>
				</h1>
				<form className='flex flex-col items-center justify-center gap-5'>
					<input
						className='bg-transparent border border-blue-300 rounded-full px-10 py-3 text-blue-100 placeholder:text-white text-lg'
						type='text'
						placeholder='Insert Name'
						onChange={handleChange}
						name='name'
					/>

					<input
						className='bg-transparent border border-blue-300 rounded-full px-10 py-3 text-blue-100 placeholder:text-white text-lg'
						type='password'
						placeholder='Insert Password'
						onChange={handleChange}
						name='password'
					/>

					<button
						onClick={handleRegister}
						className='text-blue-100 border border-blue-300 rounded-full px-10 py-3 hover:bg-blue-400 hover:text-blue-100 transition-all duration-300'>
						Login Me
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
