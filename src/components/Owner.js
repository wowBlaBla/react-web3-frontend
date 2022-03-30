import React from 'react';

const Owner = (props) => {
    
	return (
		<div className='mt-5'>
			<h2 className='text-center'>The owner of SD contract:</h2>
			<h4 className='text-center text-primary'>{ props.owner }</h4>
		</div>
	)
}

export default Owner;
