import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div className='bg-gradient-to-t from-[#2d7dbd] to-[#042c57] w-full h-[100px]'>
			<div className='container mx-auto h-full flex justify-between items-center'>
				<h1 className='text-white font-bold text-2xl '>
					<Link to='/'> AlphaCode Dev. </Link>
				</h1>

				<ul className='flex gap-10'>
					<Link className='text-white text-2xl' to='/register'>
						Register
					</Link>
					<Link className='text-white text-2xl' to='/login'>
						Login
					</Link>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
