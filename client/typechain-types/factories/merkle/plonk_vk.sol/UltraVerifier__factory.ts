/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  UltraVerifier,
  UltraVerifierInterface,
} from "../../../merkle/plonk_vk.sol/UltraVerifier";

const _abi = [
  {
    inputs: [],
    name: "INVALID_VERIFICATION_KEY",
    type: "error",
  },
  {
    inputs: [],
    name: "MOD_EXP_FAILURE",
    type: "error",
  },
  {
    inputs: [],
    name: "OPENING_COMMITMENT_FAILED",
    type: "error",
  },
  {
    inputs: [],
    name: "PAIRING_FAILED",
    type: "error",
  },
  {
    inputs: [],
    name: "PAIRING_PREAMBLE_FAILED",
    type: "error",
  },
  {
    inputs: [],
    name: "POINT_NOT_ON_CURVE",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actual",
        type: "uint256",
      },
    ],
    name: "PUBLIC_INPUT_COUNT_INVALID",
    type: "error",
  },
  {
    inputs: [],
    name: "PUBLIC_INPUT_GE_P",
    type: "error",
  },
  {
    inputs: [],
    name: "PUBLIC_INPUT_INVALID_BN128_G1_POINT",
    type: "error",
  },
  {
    inputs: [],
    name: "getVerificationKeyHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_proof",
        type: "bytes",
      },
      {
        internalType: "bytes32[]",
        name: "_publicInputs",
        type: "bytes32[]",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506180006103805260016103a0527f2d1ba66f5941dc91017171fa69ec2bd0022a2a2d4115a009a93458fd4e26ecfb6103c0527f3063edaa444bddc677fcd515f614555a777997e0a9287d1e62bf6dd004d820016103e0527f03bd2fc43c6603a5b377d8196fc3458174962e51f60abbbbb57a66abaf532cc9610400527f1812e4570e1cc73224797584e047245096e9694d72dd0e7429da28c540741e47610420527f29335f37e9b93bae4f15363379386ab436c8b91cd0ee3aed92fb3c13ad61b77a610440527f19ad59cffc98096a197dbfba10887c1c374754f2b66b768275d15d4908a94bda610460527f03d348593a17e620e89f08c8adeb90a7d4096a35f57cb2ad8d81756131e4fc76610480527e3191e75bf3df5c24ff5109d171a667ed06cf16a6f43fa769ca2822420370146104a0527f2a1a4064bc6ef924bed1e22784c9d45441b37b332af09988d2f7be7c008be3556104c0527f29b121efdfb14341241f24629e5f0940311477193ffd0718d7fbf983920862f06104e0527f08c98a22bcfaa6e86450b6aeffd13cf59e8ea20741255c31bf4e527796a832fe610500527f078598e496e5ccc0ce80027af9464f4cfc44ead50de48c1e8f665a2399440f4b610520527f13f99bb5313186dee964cc19243bf065f5f3849f9e4ac6e8e884ee69033e975f610540527f1fff6be78f02f69354de8dde2af4f4283cf032603bba4969b546b434fd6d7fec610560527f206dff8afe4918bf3ec68e1e8d83de4cdde98b56d2fd6e6235315ddb88ab9a37610580527f0b4590965b9a2cd158c36335e01d0ad2dd21508dd995043e399004b82fd682d06105a0527f17de1ad04387d41136801f4a1b8ed7ac6147858366cce063f6820f5229cc10ca6105c0527f2af0a108ed7faa4f4e968b871de1d39983518b22bcd43ff0c98bf36892763dd96105e0527f21959276775cd4749236c8bf773a9b2403cecb45fbf70e6439f73d75442e8850610600527f017714509f01d1a9ee7ebaf4d50745e33a14150b4fe9850a27e44de56d88cb14610620527f2e76c4474fcb457db84fb273ccc10a4647a1a37444369f2f275bb74540f5e2d0610640527f209035caddd02a78acd0ed617a85d782533bd142c6cad8e3338f3142b919c3a4610660527f15fb4b25fe082a013e1bc0fbaa7c88c5e28f5c2b6851e2cea38a66f168e54820610680527f26540b2cc498f5a2af4fab731a146f645faab12329dfc55e8dc318d2eb2f5ddb6106a0527f1fcdd647a41eb3343555b4229e1be53f89f93f6ca202694f27ac6d74ebccd7256106c0527f1e274121b89ba4d821bd5176810226084555c2fe05195a65347536d244774b886106e0527f1cb411ee866a90fb77a59b6e4e06191a247684c6e3f5ce14546246184251c878610700527e59bedf69ee914b4b81707d2f7b0fed4c0c0277a64e3628a987c920db86b20e610720527f2ea75aacd221f3b8c032eb0006af07b0c87f0e6e4f17088753596bf3cb83f067610740527f2e482532a96cc3b710307421cfe861a9f75d183e5208aa1becffe985c07e50e9610760527f0c14de0a66a29fef89dd6b25fd3dad2c934048825338d32c9be06295d6895cd3610780527f27e139fd5f94a95aed910fc16c4497e04e258a714b90ff5b7cb6a25af764b5526107a0527f2d283760e83465149e358f2910d2515f4df4e281eb18f1ef89f9ad7e72bbf9bf6107c0527f1e7bc1bdd03c522b54abfc3879fea26bcda8b544a524e1ca08ef3d5c5f615c066107e0527f26ac63c1f22adb0e7f8bbcb49f009546c50d24b1247a743a505416bd4bf12e27610800527f1542e08ee844541bb7f00b5d7e456b1454a0f66a8793e87ee99a04b4686631b1610820527f2c5519e9f4218e2873b91dacf2c455670a5bbbd72ce413230f8b88aea0b1cda8610840527f207960ab6d379cbcdd1ec8b7d562f474d2df14bcf4faa4346a82d4dcbba683dd610860527f254c7c79f29e6f05184889d52a7c01375832d53ea8dd60b93162a5805d715657610880527f23558713233600d8847c983db3c2771210aad83fc39e33f4821c4b483fe579c16108a0527ede2b3ab70d576c103b56b12473a67c5bd6b0066fb5261cf1830241d13759006108c0527f26a54a7978f61d304fd1872bea378a60fa063819486d5c538c8cf38389c6593f6108e0527f15d9ec402790b1e430cbf895ea56e3d999bd75d2d40116d511fe24240b699217610900527f11af74b3980a8952cc0c6fd7e35648c4e584686f2185fa62bd045947df284309610920527f21f23f21a0d51bf1126df7c7f110fb0c0f93bb7d0a6a371141296d04c8efe015610940527f1da6ed91138a8feacee3d848f689a0b0fec63b028b1f45ad4b272ade1f8faa06610960527f2eea648c8732596b1314fe2a4d2f05363f0c994e91cecad25835338edee2294f610980527f0ab49886c2b94bd0bd3f6ed1dbbe2cb2671d2ae51d31c1210433c3972bb645786109a05260006109c08190526109e0527f260e01b251f6f1c7e7ff4e580791dee8ea51d87a358e038b4efe30fac09383c1610a00527f0118c4d5b837bcc2bc89b5b398b5974e9f5944073b32078b7e231fec938883b0610a20527f04fc6369f7110fe3d25156c1bb9a72859cf2a04641f99ba4ee413c80da6a5fe4610a40527f22febda3c0c0632a56475b4214e5615e11e6dd3f96e6cea2854a87d4dacc5e55610a60527f05d33766e4590b3722701b6f2fa43d0dc3f028424d384e68c92a742fb2dbc0b4613300527f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47600161040051610420518382830984600386838609088583840914841693505050506104405161046051838283098460038683860908858384091484169350505050610480516104a0518382830984600386838609088583840914841693505050506104c0516104e051838283098460038683860908858384091484169350508160005280602052505061050051610520518382830984600386838609088583840914841693505050506105405161056051838283098460038683860908858384091484169350505050610580516105a0518382830984600386838609088583840914841693505050506105c0516105e05183828309846003868386090885838409148416935050505061060051610620518382830984600386838609088583840914841693505050506106405161066051838283098460038683860908858384091484169350505050610680516106a0518382830984600386838609088583840914841693505050506106c0516106e05183828309846003868386090885838409148416935050505061070051610720518382830984600386838609088583840914841693505050506107405161076051838283098460038683860908858384091484169350505050610780516107a0518382830984600386838609088583840914841693505050506107c0516107e05183828309846003868386090885838409148416935050505061080051610820518382830984600386838609088583840914841693505050506108405161086051838283098460038683860908858384091484169350505050610880516108a0518382830984600386838609088583840914841693505050506108c0516108e05183828309846003868386090885838409148416935050505061090051610920518382830984600386838609088583840914841693505050506109405161096051838283098460038683860908858384091484169350505050610980516109a05183828309846003868386090885838409148416935050505080610af157637e5769bf60e01b60005260046000fd5b5050612d3180610b026000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063937f6a101461003b578063ea50d0e414610072575b600080fd5b7f01360107064060a6c39993264b74d83eb026a840d4e3c33169917d5dfbf62f5a6040516100699190612b99565b60405180910390f35b610085610080366004612c4a565b610092565b6040516100699190612ccb565b6180006103805260016103a0527f2d1ba66f5941dc91017171fa69ec2bd0022a2a2d4115a009a93458fd4e26ecfb6103c0527f3063edaa444bddc677fcd515f614555a777997e0a9287d1e62bf6dd004d820016103e0527f03bd2fc43c6603a5b377d8196fc3458174962e51f60abbbbb57a66abaf532cc9610400527f1812e4570e1cc73224797584e047245096e9694d72dd0e7429da28c540741e47610420527f29335f37e9b93bae4f15363379386ab436c8b91cd0ee3aed92fb3c13ad61b77a610440527f19ad59cffc98096a197dbfba10887c1c374754f2b66b768275d15d4908a94bda610460527f03d348593a17e620e89f08c8adeb90a7d4096a35f57cb2ad8d81756131e4fc76610480527e3191e75bf3df5c24ff5109d171a667ed06cf16a6f43fa769ca2822420370146104a0527f2a1a4064bc6ef924bed1e22784c9d45441b37b332af09988d2f7be7c008be3556104c0527f29b121efdfb14341241f24629e5f0940311477193ffd0718d7fbf983920862f06104e0527f08c98a22bcfaa6e86450b6aeffd13cf59e8ea20741255c31bf4e527796a832fe610500527f078598e496e5ccc0ce80027af9464f4cfc44ead50de48c1e8f665a2399440f4b610520527f13f99bb5313186dee964cc19243bf065f5f3849f9e4ac6e8e884ee69033e975f610540527f1fff6be78f02f69354de8dde2af4f4283cf032603bba4969b546b434fd6d7fec610560527f206dff8afe4918bf3ec68e1e8d83de4cdde98b56d2fd6e6235315ddb88ab9a37610580527f0b4590965b9a2cd158c36335e01d0ad2dd21508dd995043e399004b82fd682d06105a0527f17de1ad04387d41136801f4a1b8ed7ac6147858366cce063f6820f5229cc10ca6105c0527f2af0a108ed7faa4f4e968b871de1d39983518b22bcd43ff0c98bf36892763dd96105e0527f21959276775cd4749236c8bf773a9b2403cecb45fbf70e6439f73d75442e8850610600527f017714509f01d1a9ee7ebaf4d50745e33a14150b4fe9850a27e44de56d88cb14610620527f2e76c4474fcb457db84fb273ccc10a4647a1a37444369f2f275bb74540f5e2d0610640527f209035caddd02a78acd0ed617a85d782533bd142c6cad8e3338f3142b919c3a4610660527f15fb4b25fe082a013e1bc0fbaa7c88c5e28f5c2b6851e2cea38a66f168e54820610680527f26540b2cc498f5a2af4fab731a146f645faab12329dfc55e8dc318d2eb2f5ddb6106a0527f1fcdd647a41eb3343555b4229e1be53f89f93f6ca202694f27ac6d74ebccd7256106c0527f1e274121b89ba4d821bd5176810226084555c2fe05195a65347536d244774b886106e0527f1cb411ee866a90fb77a59b6e4e06191a247684c6e3f5ce14546246184251c878610700527e59bedf69ee914b4b81707d2f7b0fed4c0c0277a64e3628a987c920db86b20e610720527f2ea75aacd221f3b8c032eb0006af07b0c87f0e6e4f17088753596bf3cb83f067610740527f2e482532a96cc3b710307421cfe861a9f75d183e5208aa1becffe985c07e50e9610760527f0c14de0a66a29fef89dd6b25fd3dad2c934048825338d32c9be06295d6895cd3610780527f27e139fd5f94a95aed910fc16c4497e04e258a714b90ff5b7cb6a25af764b5526107a0527f2d283760e83465149e358f2910d2515f4df4e281eb18f1ef89f9ad7e72bbf9bf6107c0527f1e7bc1bdd03c522b54abfc3879fea26bcda8b544a524e1ca08ef3d5c5f615c066107e0527f26ac63c1f22adb0e7f8bbcb49f009546c50d24b1247a743a505416bd4bf12e27610800527f1542e08ee844541bb7f00b5d7e456b1454a0f66a8793e87ee99a04b4686631b1610820527f2c5519e9f4218e2873b91dacf2c455670a5bbbd72ce413230f8b88aea0b1cda8610840527f207960ab6d379cbcdd1ec8b7d562f474d2df14bcf4faa4346a82d4dcbba683dd610860527f254c7c79f29e6f05184889d52a7c01375832d53ea8dd60b93162a5805d715657610880527f23558713233600d8847c983db3c2771210aad83fc39e33f4821c4b483fe579c16108a0527ede2b3ab70d576c103b56b12473a67c5bd6b0066fb5261cf1830241d13759006108c0527f26a54a7978f61d304fd1872bea378a60fa063819486d5c538c8cf38389c6593f6108e0527f15d9ec402790b1e430cbf895ea56e3d999bd75d2d40116d511fe24240b699217610900527f11af74b3980a8952cc0c6fd7e35648c4e584686f2185fa62bd045947df284309610920527f21f23f21a0d51bf1126df7c7f110fb0c0f93bb7d0a6a371141296d04c8efe015610940527f1da6ed91138a8feacee3d848f689a0b0fec63b028b1f45ad4b272ade1f8faa06610960527f2eea648c8732596b1314fe2a4d2f05363f0c994e91cecad25835338edee2294f610980527f0ab49886c2b94bd0bd3f6ed1dbbe2cb2671d2ae51d31c1210433c3972bb645786109a05260006109c08190526109e08190527f260e01b251f6f1c7e7ff4e580791dee8ea51d87a358e038b4efe30fac09383c1610a00527f0118c4d5b837bcc2bc89b5b398b5974e9f5944073b32078b7e231fec938883b0610a20527f04fc6369f7110fe3d25156c1bb9a72859cf2a04641f99ba4ee413c80da6a5fe4610a40527f22febda3c0c0632a56475b4214e5615e11e6dd3f96e6cea2854a87d4dacc5e55610a60527f05d33766e4590b3722701b6f2fa43d0dc3f028424d384e68c92a742fb2dbc0b4613300526103a05182811461089d576040517f7667dc9b0000000000000000000000000000000000000000000000000000000081526108949082908590600401612cd9565b60405180910390fd5b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd477f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016024600435018281350661122052826020820135066112005282604082013506611260528260608201350661124052826080820135066112a0528260a082013506611280528260c0820135066112e0528260e0820135066112c05282610100820135066113205282610120820135066113005282610140820135066113605282610160820135066113405282610180820135066113a052826101a08201350661138052826101c0820135066113e052826101e0820135066113c05282610200820135066114205282610220820135066114005282610240820135066114605282610260820135066114405282610280820135066114a052826102a08201350661148052816102c08201350661160052816102e0820135066116205281610300820135066116405281610320820135066116605281610340820135066116805281610360820135066116a05281610380820135066116c052816103a0820135066116e052816103c08201350661170052816103e0820135066117205281610400820135066117405281610420820135066117605281610440820135066117805281610460820135066117a05281610480820135066117c052816104a0820135066117e052816104c08201350661180052816104e0820135066119605281610500820135066119805281610520820135066119a05281610540820135066119c052816105608201350661184052816105808201350661186052816105a08201350661188052816105c0820135066118a052816105e0820135066118c05281610600820135066118e05281610620820135066119005281610640820135066119205281610660820135066119405281610680820135066119e052816106a08201350661200052816106c08201350661202052816106e0820135066120405281610700820135066120605281610720820135066120805281610740820135066120a05281610760820135066120c05281610780820135066120e052816107a08201350661210052816107c08201350661212052826107e08201350661232052826108008201350661230052826108208201350661236052826108408201350661234052506109c05115610d18576024803501806109e05160051b0190508035602082013560441b81019050604082013560881b81019050606082013560cc1b81019050608082013560a083013560441b8101905060c083013560881b8101905060e083013560cc1b8101905061010083013561012084013560441b8101905061014084013560881b8101905061016084013560cc1b810190506101808401356101a085013560441b810190506101c085013560881b810190506101e085013560cc1b810190508361340052826134205281613440528061346052868110878410168783108886101616610d12577feba9f4a60000000000000000000000000000000000000000000000000000000060005260046000fd5b50505050505b6103805160e01b6000526103a05160e01b60045260086000208061348052602480350160206103a05102808260206134800137600435602401915060c0826134a083013760e0016134802083810661266081905290925090508281800961268052828161268051096126a05250806000526112e0516020526112c051604052611320516060526113005160805260a0600020905081810661260052806000526001602053506021600090812082810661262052815261136051602052611340516040526113a0516060526113805160805260a09020818106612640819052828180096133205282816133205109613340528281613340510961336052806133805250806000526113e0516020526113c05160405261142051606052611400516080526114605160a0526114405160c0526114a05160e052611480516101005261012060002090508181066126c052806126e0525061260051612620516103c051600180856001602480350160206103a0510281018360058a0984600c8b0999505b81831015610ed857823585811085169450858a82089050858183018909975085818c01880996505084888209905084888b099950602083019250610e99565b50505080610f0a577f374a972f0000000000000000000000000000000000000000000000000000000060005260046000fd5b50508161300052806130205250505050508081600161260051086126205109806103805160015b81811015610f46578483840992508001610f31565b5050613100528181800990508181820961312052506126c05161038051819060015b81811015610f7d578483840992508001610f68565b50508061304052826001840382089050613300518084036103e051858286088684840992508687848808820990508684840992508687848808820990508687888686098808820990506103c051925086828609915086600188038708878485099450876001890389898b888d8b8c0909090896506130205194508493508782860994508488878709955085898388099650868a61312051890997508760206000526020805260206040528b8b8a0960605260028c036080528b60a0526020600060c0600060055afa611073577ff894a7bc0000000000000000000000000000000000000000000000000000000060005260046000fd5b60005198508b818a0990508b8b8a0998508b828a0991508b613120518a0998508b838a0992508b858a0998508b848a0993508b8a8a0998508b888a0997508b868a0998508b613020518d8b8c090998508b896130005109613060528b888b09613080528b848709613680528b8388096130a0528b826131005109613140528b8188096130c052505050505050505050505061264051506126005161262051828361190051840982611620510101846118e051850983611600510101098384611940518509836116605101018561192051860984611640510101098485868385096116a051096133805109858661198051870985611620510101876119605188098661160051010109925085866119c051870985611660510101876119a0518809866116405101010991508586878885870961208051096133805109870382089050856126405161338051096133805285868788613060518a0361208051086130c0510961338051098208905085612640516133805109613380528586878860018a036116a051086130a05109613380510982086135005250505050508061264051613380510961338052806117205161266051098182836120205161178051096116405108820890508161266051820990508182836120005161176051096116205108820890508161266051820990508182836119e0516117005109611600510882089050816118405183846126605161186051098586612680516118805109876126a0516118a05109080808826120c0518485612660516120e051098687612680516121005109886126a051612120510908080883846001612600510861262051098461262051866118c051870908935084818687612600518609860808925084838509935084856001612600510885099350846130a05161264051099250848385089350846116c0518509935084838603850893508481868761260051612060510961168051080892505050826130c05161332051098381850383089150836120a05183099150838461314051830983089150508261338051848386038508096135205250508061334051613380510961338052806116e0516116005109816117005161162051098261172051611640510983611740516116605109847f183227397098d014dc2822db40c0ac2e9419f4243cdcb848a1f0fac9f80000008687600389036117a0510888611760518a6116205161160051090909098586878889858a08880886088408611780510894505050505081828384856116605161160051086119e051870308611760510884600286036117a05108096126405109828384858685612040510887600189036117a051080985086117a05109613380510961354052505080613320516133805109613380526002810360038203826116005184036116205108836116205185036116405108846116405186036116605108856116605187036119e05108866133805188898888088a8b8b8a088c8a8e038e8c8d09080909099350868788612640516133805109898a8988088b8c8c8a088d8a8f038f8c8d090809090985089350868788613320516133805109898a8987088b8c8c89088d898f038f8b8c090809090985089350868788613340516133805109898a8986088b8c8c88088d888f038f8a8b090809090985089350505050836117c051820961356052505061336051613380518392500961338052806116205182036119e051088161204051612040510982611640516116405109836116e05185612040516116405109098485868384088785870888030886878788098889611620516119e0510861200051080908925050508261338051848561176051870360010884090990508261202051611640510883611640518503856116e05161204051090884858287611620518903612000510809868685090893505050828361264051613380510984856117605187036001088509099150826117e0518484840809613580525050806116205161162051098161164051611640510982611620518460118408098360048309915083600982099050836003840992508381850385848788611620516116205108612000510809089150508283846120205161164051088561164051611640510809840384856120005187036116205108850908915082613380518209905082836126405161338051098309915082611760518209905082611760518309915082836117e0518585850809613580510861358052505080613360516133805109613380528081611620516119e05109826120005161160051090881612020518303838461164051611620510985611660516116005109080882681000000000000000008209905082612040518403820890508282820890508261174051820990508268100000000000000000830991508283612000516119e05109830891508261172051848561166051611640510886038508098361176051858661204051612020510887038761166051880808099250836117005185858786860808096135c0525050612000518291506140009009816119e0518208905081614000820990508161164051820890508161400082099050816116205182089050816140008209905081611600518208905081611660518303820890508161174051820990508161400061202051098261200051820890508261400082099050826119e05182089050826140008209905082611660518208905082614000820990508261164051820890508261204051840382089050826117605182099050826117205184838508096135e0525050806126605161164051098161162051820890508161266051820990508161160051820890508161266051820990508161178051820890508082611660518403830891508161364052826116005184036119e05108836116605185036120405108848560018703840883098586848803600108830991508585876126405189858b61264051890908090861362052856126605161202051099450856120005186089450856126605186099450856119e0518608945085612660518609945085858703612040510894508561164051870361202051089150858687878903600108840987858903600108099150858487036116605108868760018903830882099050868760018903880887099550866126405184099250868284089250866126405184099250868684089250866126405184099250868184089250508161360052505083611620518503612000510892508361164051850385868488036001088609089250836117005161362051099150838461174051850983089150838461176051613640510983089150836116e0518309915083846117a051613600510983089150836135c05183089250836135e05184089250836118005184099250836133805184099250826135a05283613340516133805109613380525050508061368051826135a0518461358051866135605188613540518a61352051613500510808080808096136608190526126e0516136a08190526136c0919091526102e460043501610520816136e03750506105606136a020818106612700526000819052600160205381602160002006612720526002602053816021600020066127405260036020538160216000200661276052600460205381602160002006612780526005602053816021600020066127a0526006602053816021600020066127c0526007602053816021600020066127e0526008602053816021600020066128005260096020538160216000200661282052600a6020538160216000200661284052600b6020538160216000200661286052600c6020538160216000200661288052600d602053816021600020066128a052600e602053816021600020066128c052600f602053816021600020066128e05260106020538160216000200661290052601160205381602160002006612920526012602053816021600020066129405260136020538160216000200661296052601460205381602160002006612980526015602053816021600020066129a0526016602053816021600020066129c0526017602053816021600020066129e052601860205381602160002006612a0052601960205381602160002006612a2052601a60205381602160002006612a4052601b60205381602160002006612a6052601c60205381602160002006612a8052601d60205381602160002006612aa052601d6020535060216000908120828106612ac05281526123205160205261230051604052612360516060526123405160805260a08120829006612b00526113c0516113e0518482800985600387838609088683840914611ce4576328f6b59560e21b60005260046000fd5b50613160919091526131805261140051611420518482800985600387838609088683840914611d1e576328f6b59560e21b60005260046000fd5b50816000528060205250506130405160405260406131a06060600060075afa90506040613160608061316060065afa8116905061144051611460518482830985600387838609088683840914611d7f576328f6b59560e21b60005260046000fd5b50600091909152602052613040518290800960405260406131a06060600060075afa16604061316060808160065afa81169050611480516114a0518482830985600387838609088683840914611de0576328f6b59560e21b60005260046000fd5b50600091909152602052613040518290818180090960405260406131a06060600060075afa16604061316060808160065afa8116905061120051611220518482830985600387838609088683840914611e44576328f6b59560e21b60005260046000fd5b50816000528060205250508161270051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa8116905061124051611260518482830985600387838609088683840914611eac576328f6b59560e21b60005260046000fd5b50816000528060205250508161272051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050611280516112a0518482830985600387838609088683840914611f14576328f6b59560e21b60005260046000fd5b50816000528060205250508161274051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa811690506112c0516112e0518482830985600387838609088683840914611f7c576328f6b59560e21b60005260046000fd5b50816000528060205250508161276051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa8116905061130051611320518482830985600387838609088683840914611fe4576328f6b59560e21b60005260046000fd5b50816000528060205250508161278051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa811690506113405161136051848283098560038783860908868384091461204c576328f6b59560e21b60005260046000fd5b5081600052806020525050816127a051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050611380516113a05184828309856003878386090886838409146120b4576328f6b59560e21b60005260046000fd5b5081600052806020525050816127c051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa8116905061040051600052610420516020526127e05160405260406131a06060600060075afa16604061316060808160065afa8116905061044051600052610460516020526128005160405260406131a06060600060075afa16604061316060808160065afa81169050610480516000526104a0516020526128205160405260406131a06060600060075afa16604061316060808160065afa811690506104c0516000526104e0516020526128405160405260406131a06060600060075afa16604061316060808160065afa8116905061050051600052610520516020526128605160405260406131a06060600060075afa16604061316060808160065afa8116905061054051600052610560516020526128805160405260406131a06060600060075afa16604061316060808160065afa81169050610580516000526105a0516020526128a05160405260406131a06060600060075afa16604061316060808160065afa811690506105c0516000526105e0516020526128c05160405260406131a06060600060075afa16604061316060808160065afa8116905061060051600052610620516020526128e05160405260406131a06060600060075afa16604061316060808160065afa8116905061064051600052610660516020526129005160405260406131a06060600060075afa16604061316060808160065afa81169050610680516000526106a0516020526129205160405260406131a06060600060075afa16604061316060808160065afa811690506106c0516000526106e0516020526129405160405260406131a06060600060075afa16604061316060808160065afa8116905061070051600052610720516020526129605160405260406131a06060600060075afa16604061316060808160065afa8116905061074051600052610760516020526129805160405260406131a06060600060075afa16604061316060808160065afa81169050610780516000526107a051602052816129a051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa811690506107c0516000526107e051602052816129c051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa811690506108005160005261082051602052816129e051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050610840516000526108605160205281612a0051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050610880516000526108a051602052612a205160405260406131a06060600060075afa16604061316060808160065afa811690506108c0516000526108e051602052612a405160405260406131a06060600060075afa16604061316060808160065afa811690506109005160005261092051602052612a605160405260406131a06060600060075afa16604061316060808160065afa811690506109405160005261096051602052612a805160405260406131a06060600060075afa16604061316060808160065afa81169050610980516000526109a051602052612aa05160405260406131a06060600060075afa16604061316060808160065afa8116905081826116005184612b00516119e051090861270051098283846116205186612b00516120005109086127205109820890508283846116405186612b00516120205109086127405109820890508283846116605186612b00516120405109086127605109820890508283846116805186612b00516120605109086127805109820890508283846116a05186612b00516120805109086127a05109820890508283846116c05186612b00516120a05109086127c051098208905082836116e0516127e051098208905082836117005161280051098208905082836117205161282051098208905082836117405161284051098208905082836117605161286051098208905082836117805161288051098208905082836117a0516128a051098208905082836117c0516128c051098208905082836117e0516128e051098208905082836118005161290051098208905082836119605161292051098208905082836119805161294051098208905082836119a05161296051098208905082836119c0516129805109820890508283846118405186612b00516120c05109086129a05109820890508283846118605186612b00516120e05109086129c05109820890508283846118805186612b00516121005109086129e05109820890508283846118a05186612b0051612120510908612a0051098208905082836118c051612a2051098208905082836118e051612a40510982089050828361190051612a60510982089050828361192051612a80510982089050828361194051612aa0510982089050826136605182089050600160005260026020528083036040525060406131a06060600060075afa16604061316060808160065afa1680612850577f4e7197630000000000000000000000000000000000000000000000000000000060005260046000fd5b612b00516126c05161230051612320518682830987600389838609088883840914612886576328f6b59560e21b60005260046000fd5b50816000528060205250508060405260406131a06060600060075afa92506040613160608061316060065afa83169250612340516123605186828309876003898386090888838409146128e4576328f6b59560e21b60005260046000fd5b5081600052806020525050836103c05185838509096040525060406131a06060600060075afa821691506040613220608061316060065afa8216915061230051600052612320516020526123405160405261236051606052806080526040806060604060075afa8216915060406131e06080600060065afa82169150613200518403613200526109c05115612a4557613400516134205185828309866003888386090887838409146129a1576328f6b59560e21b60005260046000fd5b50600091909152602052828180096040526040606080600060075afa82169150613440516134605185828309866003888386090887838409146129ef576328f6b59560e21b60005260046000fd5b50600091825260205260409060608160075afa821691506132205160a0526132405160c05260406132206080606060065afa821691506131e0516040526132005160605260406131e06080600060065afa821691505b5080612a75577f01882d810000000000000000000000000000000000000000000000000000000060005260046000fd5b61322051600052613240516020527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c26040527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6060527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b6080527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa60a0526131e05160c0526132005160e052610a005161010052610a205161012052610a405161014052610a60516101605260206000610180600060085afa90506000518116612b83577fd71fd2630000000000000000000000000000000000000000000000000000000060005260046000fd5b505050600160005260206000f35b805b82525050565b60208101612ba78284612b91565b92915050565b60008083601f840112612bc257612bc2600080fd5b50813567ffffffffffffffff811115612bdd57612bdd600080fd5b602083019150836001820283011115612bf857612bf8600080fd5b9250929050565b60008083601f840112612c1457612c14600080fd5b50813567ffffffffffffffff811115612c2f57612c2f600080fd5b602083019150836020820283011115612bf857612bf8600080fd5b60008060008060408587031215612c6357612c63600080fd5b843567ffffffffffffffff811115612c7d57612c7d600080fd5b612c8987828801612bad565b9450945050602085013567ffffffffffffffff811115612cab57612cab600080fd5b612cb787828801612bff565b95989497509550505050565b801515612b93565b60208101612ba78284612cc3565b60408101612ce78285612b91565b612cf46020830184612b91565b939250505056fea2646970667358221220fe73bf699fa0b2da7e9ae4e01f1bfc863b30afcfce822a71f3cd3af21ac6564864736f6c63430008180033";

type UltraVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UltraVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UltraVerifier__factory extends ContractFactory {
  constructor(...args: UltraVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      UltraVerifier & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): UltraVerifier__factory {
    return super.connect(runner) as UltraVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UltraVerifierInterface {
    return new Interface(_abi) as UltraVerifierInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): UltraVerifier {
    return new Contract(address, _abi, runner) as unknown as UltraVerifier;
  }
}