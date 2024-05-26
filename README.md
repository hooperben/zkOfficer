# zk0fficer

zk0fficer allows for the reusing and validation of existing digital
credentials, while keeping your credentials private. You can present your
credentials to the zk0fficer, and they can validate their legitimacy,
without knowing anything about them.

### Repo Contents

- [protocol](./protocol): this directory contains the zk0fficer protocol and test suite. It is a hardhat project, that has a `noir` program within it that compiles to smart contracts that can be tested with the test suite. It also makes use of the noir TS libraries that allow for proof generation and verification within typescript.

- [client](./client/): this directory contains the code for the front end deployed at [zk-officer.vercel.app](https://zk-officer.vercel.app). This is a NextJS app that is deployed with vercel.

### Demo Videos

#### Registering a Credential

https://ethberlin-81237t46r2387fg.s3.ap-southeast-2.amazonaws.com/REGISTER_WORKING.mov

#### QR Code Generation of Credential Proof

https://ethberlin-81237t46r2387fg.s3.ap-southeast-2.amazonaws.com/QR_PROOF.mov

#### Token Claim with Proof

https://ethberlin-81237t46r2387fg.s3.ap-southeast-2.amazonaws.com/TOKEN_CLAIM.mov
