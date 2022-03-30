import React, { useState, useEffect } from 'react';
import Owner from './components/Owner';
import TxCount from './components/TxCount';
import getWeb3 from './utils/getWeb3';

const App = () => {
	const [contract, setcontract] = useState(null);
  const [owner, setOwner] = useState("");
	const [tokenAddr, setTokenAddr] = useState("");
  const [txCount, setTxCount] = useState("");

	// load contract instance from getWeb3
	useEffect(() => {
		const loadContract = async () => {
			const { contractSD } = await getWeb3();
			setcontract(contractSD);
		}
		loadContract();
	}, [])

	// get owner of SD contract
	useEffect(() => {
		const loadOwner = async () => {
			setOwner("loading...");
			const _owner = await contract.methods.owner().call();
			setOwner(_owner);
		}
		
		contract && loadOwner();
		console.log('owner');
	}, [contract])

	// get the number of total fund transactions
	useEffect(() => {
		const loadTxCount = async () => {
			try {
				setTxCount("loading...");
				const _txCount = await contract.methods.getFundTxCount(tokenAddr).call();
				setTxCount(_txCount);
			} catch(err) {
				setTxCount("0");
			}
		}

		contract && loadTxCount();
		console.log('txCount');
	}, [tokenAddr, contract])
	
  return (
    <div className='container'>
			<h1 className='text-center my-5 fs-1 fw-bold text-decoration-underline'>
				Staking-Distribution Contract
			</h1>
			<Owner owner={ owner } />
			<TxCount tokenAddr={ tokenAddr } setTokenAddr={ setTokenAddr } txCount={ txCount } />
    </div>
  )
}

export default App;
