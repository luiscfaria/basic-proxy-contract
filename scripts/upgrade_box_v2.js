const { ethers, upgrades } = require("hardhat");

const PROXY = "0x58b81e3358ef1D8DfF0bA17688C0C69E436b13f2";

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Upgrading Box...");
    await upgrades.upgradeProxy(PROXY, BoxV2);
    console.log("Box upgraded");
}

main();