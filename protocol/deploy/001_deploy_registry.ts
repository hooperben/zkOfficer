import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

import { poseidonContract } from "circomlibjs";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const {
    ethers,
    deployments,
    deployments: { deploy, save },
  } = hre;

  const [Deployer] = await ethers.getSigners();

  // we need to deploy the poseidon hasher contract for the merkletreewithhistory contract
  const hasherAbi = poseidonContract.generateABI(2);
  const HasherFactory = new ethers.ContractFactory(
    hasherAbi,
    poseidonContract.createCode(2),
    Deployer
  );

  const tx = await HasherFactory.deploy();
  await tx.waitForDeployment();
  const hasherAddress = await tx.getAddress();

  await save("Hasher", {
    abi: hasherAbi,
    address: hasherAddress,
  });

  await deploy("UltraVerifier", {
    from: Deployer.address,
    log: true,
    autoMine: true,
    waitConfirmations: 2,
  });

  const UltraVerifier = (await deployments.get("UltraVerifier")).address;

  await deploy("Registry", {
    from: Deployer.address,
    args: [UltraVerifier, hasherAddress],
    log: true,
    autoMine: true,
    waitConfirmations: 2,
  });

  // next we deploy our test ERC20 contract
  await deploy("NonSybilERC20", {
    from: Deployer.address,
    args: [UltraVerifier],
    log: true,
    autoMine: true,
    waitConfirmations: 2,
  });
};

export default func;
func.tags = ["testbed"];
