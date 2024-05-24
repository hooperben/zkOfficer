import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre, { deployments } from "hardhat";

describe("Merkle Tree Testing", function () {
  before("hello", async () => {
    await deployments.fixture("testbed");
  });

  it.only("should run", async () => {});
});
