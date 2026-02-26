// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Authentiq {
    address public admin;
    mapping(bytes32 => bool) private validatedHashes;

    constructor() {
        admin = msg.sender;
    }

    function addCertificate(bytes32 _certHash) public {
        require(msg.sender == admin, "Only admin can add certificates");
        require(!validatedHashes[_certHash], "Certificate already exists");
        validatedHashes[_certHash] = true;
    }

    function checkCertificate(bytes32 _certHash) public view returns (bool) {
        return validatedHashes[_certHash];
    }
}