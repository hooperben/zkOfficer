// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "./merkle/plonk_vk.sol";

import "./MerkleTreeWithHistory.sol";

contract Registry is MerkleTreeWithHistory {
    UltraVerifier public verifier;

    address public owner;

    constructor(
        address _verifier,
        address hasher
    )
        MerkleTreeWithHistory(
            8,
            hasher,
            0x220e4b4823da0db552468228884e3a4675fc1bee50cb697891977312ae922800
        )
    {
        verifier = UltraVerifier(_verifier);
        owner = msg.sender;
    }

    function addLeaf(bytes32 _leaf) public {
        require(msg.sender == owner, "Only owner can add leaf");
        _insert(_leaf, bytes32("111111111111111111"));
    }

    function verifyProof(
        bytes calldata _proof,
        bytes32[] calldata _publicInputs
    ) public view returns (bool) {
        // check our root is known
        require(isKnownRoot(_publicInputs[0]), "Invalid root");

        return verifier.verify(_proof, _publicInputs);
    }

    // function verifyAsBusiness(

    // )
}
