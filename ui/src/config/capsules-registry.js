export const registryAddrs = {
  private: "0x0D9ccC7af8459218AdedbDcB7E33612656Ae7202",
  rinkeby: "0x7eF3CB8720658a87dadd90B1b44EaE695e76Af6F",
  kovan: "0xAab7913A5330b38DAFbb4a8362Cb656AE9Ed0C2D"
};

export const registryAbi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "_contentHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "CapsuleRegistered",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "capsuleIDsByHash",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "capsules",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "ipfsDigest",
        "type": "bytes32"
      },
      {
        "internalType": "uint8",
        "name": "hashFunction",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "hashSize",
        "type": "uint8"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "numCapsules",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_contentHash",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "_ipfsDigest",
        "type": "bytes32"
      },
      {
        "internalType": "uint8",
        "name": "_hashFunction",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "_hashSize",
        "type": "uint8"
      }
    ],
    "name": "registerCapsule",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_contentHash",
        "type": "bytes32"
      }
    ],
    "name": "getOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_contentHash",
        "type": "bytes32"
      }
    ],
    "name": "getCapsule",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "ipfsDigest",
        "type": "bytes32"
      },
      {
        "internalType": "uint8",
        "name": "hashFunction",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "hashSize",
        "type": "uint8"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];
