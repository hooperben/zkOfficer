// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

import "./merkle/plonk_vk.sol";

contract NonSybilERC20 is ERC20, ERC20Permit {
    UltraVerifier public verifier;

    mapping(bytes32 => bool) public nullifiers;

    constructor(
        address _verifier
    ) ERC20("MyToken", "MTK") ERC20Permit("MyToken") {
        verifier = UltraVerifier(_verifier);
    }

    function mint(
        address to,
        bytes calldata _proof,
        bytes32[] calldata _publicInputs
    ) public {
        require(!nullifiers[_publicInputs[1]], "Nullifier used");
        require(verifier.verify(_proof, _publicInputs), "Invalid proof");
        nullifiers[_publicInputs[1]] = true;
        _mint(to, 100e18);
    }
}