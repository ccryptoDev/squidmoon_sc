const { ethers, upgrades } = require("hardhat");
// const minters = require('../minters.json');
const minters = [
  '0x2fdbb649b70dE4ac73903949b95b01ab75233b2C', 
  '0xf2d09a2B2Db41B37C90509aB554A7aaf5e19956f', 
  '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'
];

async function main() {
  const baseInstance = await ethers.getContractFactory("NFT");
  const NFTContract = await baseInstance.deploy("https://gateway.pinata.cloud/ipfs/QmenD8SBwsX7XwGJqa8f2LT4oBwrDmAesNS8THG8boRFcj/", {'0x2fdbb649b70dE4ac73903949b95b01ab75233b2C', '0xf2d09a2B2Db41B37C90509aB554A7aaf5e19956f'}, 1642093000, 1643000000);
  console.log("NFT Contract is deployed to:", NFTContract.address);
}

main();