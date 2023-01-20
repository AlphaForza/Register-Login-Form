import React, { useState } from 'react';
import { useEffect } from 'react';

function Profile() {
	const [profileUser, setProfileUser] = useState(null);

	useEffect(() => {
		setProfileUser(JSON.parse(localStorage.getItem('logged')));
	}, []);

	return (
		<div className='bg-[#2d7dbd] w-full h-full'>
			{profileUser && (
				<div className='container mx-auto h-[89vh] flex items-center justify-center '>
					<div className='flex flex-col items-center justify-center gap-5 border border-blue-300 h-[400px] w-[400px] rounded-3xl'>
						<img
							src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
							alt='profileImg'
							className='w-[100px] h-[100px] rounded-full object-cover'
						/>
						<h2 className='text-blue-300 text-4xl'>
							{profileUser.name}
						</h2>
						<h4 className='text-lg text-blue-100'>
							{profileUser.email}
						</h4>
						<p className='text-md text-blue-100'>
							Number Of User: {profileUser.id}
						</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default Profile;
