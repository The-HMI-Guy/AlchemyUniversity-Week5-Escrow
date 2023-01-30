import { ethers } from 'ethers';
import artifacts from './artifacts/contracts/Escrow.sol/Escrow';


export default async function deploy(signer, arbiter, beneficiary, value) {
  const factory = new ethers.ContractFactory(
    artifacts.abi,
    artifacts.bytecode,
    signer
    
  );
  return factory.deploy(arbiter, beneficiary, { value });

}
