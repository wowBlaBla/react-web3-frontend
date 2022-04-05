import React from 'react';

const TxCount = (props) => {

	return (
		<div className='mt-5'>
			<h2 className='text-center'>The number of total fund transactions:</h2>
			<div className='row justify-content-center'>
				<div className=' form-group col-4'>
					<input className='form-control'
									type="text"
									value={ props.tokenAddr }
									onChange={(e) => props.setTokenAddr(e.target.value)}
									placeholder="Input token address. Ex: 0x..."
					/>
				</div>
			</div>
			<h4 className='text-center text-primary mt-2'>{ props.txCount }</h4>
		</div>
	)
}

export default TxCount;
