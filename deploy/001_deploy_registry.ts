import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const {
    ethers,
    deployments,
    deployments: { deploy },
  } = hre;

  const [Deployer] = await ethers.getSigners();

  await deploy("UltraVerifier", {
    from: Deployer.address,
    log: true,
    autoMine: true,
  });

  const UltraVerifier = (await deployments.get("UltraVerifier")).address;

  await deploy("Registry", {
    from: Deployer.address,
    args: [UltraVerifier],
    log: true,
    autoMine: true,
  });
};

export default func;
func.tags = ["btc", "testbed"];
