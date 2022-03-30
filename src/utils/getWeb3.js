import Web3 from "web3";
import { contractABI, contractAddr } from "../config";

const getWeb3 = async () => {
  let web3;
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    const networkId = await web3.eth.net.getId();
    if (networkId !== 3) {
      const provider = new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/901de4ff31434d3d9639952ce106cb9e");
      web3 = new Web3(provider);
    }
  } else {
    const provider = new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/901de4ff31434d3d9639952ce106cb9e");
    web3 = new Web3(provider);
    //console.log("No web3 instance injected, using Infura/Local web3.");
  }

  const contractSD = new web3.eth.Contract(contractABI, contractAddr);

  return { web3, contractSD };
}

export default getWeb3;
