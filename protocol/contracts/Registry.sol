// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./merkle/plonk_vk.sol";
import "./MerkleTreeWithHistory.sol";

contract Registry is MerkleTreeWithHistory {
    event NewLeaf(bytes32 indexed indexedleaf, uint256 indexed leafIndex);

    UltraVerifier public verifier;
    address public authority;

    // bytes32 public constant zk_leaf_root_______ = keccak256("ZK_0FFICER");
    bytes32 public constant zk_leaf_root_______ =
        0x220e4b4823da0db552468228884e3a4675fc1bee50cb697891977312ae922800;

    constructor(
        address _verifier,
        address hasher
    ) MerkleTreeWithHistory(8, hasher, zk_leaf_root_______) {
        verifier = UltraVerifier(_verifier);
        authority = msg.sender;
    }

    function addLeaf(bytes32 _leaf) public {
        require(
            msg.sender == authority,
            "Only an authority can add a record leaf"
        );
        // we insert in 2s because it's easier?
        _insert(_leaf, zk_leaf_root_______);

        // we need to emit our new leafs in the tree so users can use them later
        emit NewLeaf(_leaf, nextIndex - 2);
        emit NewLeaf(zk_leaf_root_______, nextIndex - 1);
    }

    function verifyProof(
        bytes calldata _proof,
        bytes32[] calldata _publicInputs
    ) external view returns (bool) {
        // check our root is known
        require(isKnownRoot(_publicInputs[0]), "Invalid root");
        return verifier.verify(_proof, _publicInputs);
    }
}
