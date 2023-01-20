import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
	const [userLogged, setUserLogged] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		setUserLogged(JSON.parse(localStorage.getItem('logged')));
	}, []);

	const logOut = () => {
		setUserLogged(localStorage.removeItem('logged'));
		navigate('/login');
	};

	return (
		<div className='bg-gradient-to-t from-[#2d7dbd] to-[#042c57] w-full h-[100px]'>
			<div className='container mx-auto h-full w-full flex justify-between items-center'>
				<h1 className='text-white font-bold text-2xl '>
					<Link to='/'> AlphaCode Dev. </Link>
				</h1>

				<ul className='flex gap-10 '>
					{userLogged ? (
						<div className='flex items-center w-full gap-10'>
							<div>
								<Link
									to='/profile'
									className='uppercase text-blue-200 underline'>
									{userLogged.name}👋
								</Link>
							</div>
							<button
								type='submit'
								onClick={logOut}
								className='text-lg text-white border border-blue-300 rounded-full px-5 py-2'>
								Log Out
							</button>
						</div>
					) : (
						<div className='flex gap-5'>
							<Link className='text-white text-2xl' to='/register'>
								Register
							</Link>
							<Link className='text-white text-2xl' to='/login'>
								Login
							</Link>
						</div>
					)}
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
