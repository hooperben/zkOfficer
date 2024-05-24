// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "./merkle/plonk_vk.sol";

contract Registry {
    UltraVerifier public verifier;

    constructor(address _verifier) {
        verifier = UltraVerifier(_verifier);
    }
}
