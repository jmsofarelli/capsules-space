export const licensingAddrs = {
  private: "0x8177613ADaB30127F167c844e9d579FD804ccdA7",
  rinkeby: "0xC85b84Dc7443c9ACDA5ce90b2AC4C66422D02a21",
  kovan: "0xFB60c29F32210824632A3926f001A9354a3d0a15"
};

export const licensingAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_registryAddr",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "contentHash",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "licensee",
        type: "address"
      }
    ],
    name: "LicenseApproved",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "contentHash",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "address",
        name: "licensee",
        type: "address"
      }
    ],
    name: "LicenseCancelled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "contentHash",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "licensee",
        type: "address"
      }
    ],
    name: "LicenseRefused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "contentHash",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "licensee",
        type: "address"
      }
    ],
    name: "LicenseRequested",
    type: "event"
  },
  {
    constant: true,
    inputs: [],
    name: "licensePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "licenseeRequests",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "licenses",
    outputs: [
      {
        internalType: "bytes32",
        name: "contentHash",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "licensee",
        type: "address"
      },
      {
        internalType: "enum ImageLicensing.LicenseStatus",
        name: "status",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "ownerRequests",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "registryAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "stopContract",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "resumeContract",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getLicensableImages",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "ipfsDigest",
            type: "bytes32"
          },
          {
            internalType: "uint8",
            name: "hashFunction",
            type: "uint8"
          },
          {
            internalType: "uint8",
            name: "hashSize",
            type: "uint8"
          },
          {
            internalType: "address",
            name: "owner",
            type: "address"
          }
        ],
        internalType: "struct ImageLicensing.Capsule[100]",
        name: "images",
        type: "tuple[100]"
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes32",
        name: "_contentHash",
        type: "bytes32"
      }
    ],
    name: "requestLicense",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes32",
        name: "_contentHash",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "_licensee",
        type: "address"
      }
    ],
    name: "approveLicenseRequest",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes32",
        name: "_contentHash",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "_licensee",
        type: "address"
      }
    ],
    name: "refuseLicenseRequest",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes32",
        name: "_contentHash",
        type: "bytes32"
      }
    ],
    name: "cancelLicenseRequest",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getIncomingRequests",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "contentHash",
            type: "bytes32"
          },
          {
            internalType: "address",
            name: "licensee",
            type: "address"
          },
          {
            internalType: "enum ImageLicensing.LicenseStatus",
            name: "status",
            type: "uint8"
          }
        ],
        internalType: "struct ImageLicensing.License[10]",
        name: "incomingRequests",
        type: "tuple[10]"
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getOutGoingRequests",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "contentHash",
            type: "bytes32"
          },
          {
            internalType: "address",
            name: "licensee",
            type: "address"
          },
          {
            internalType: "enum ImageLicensing.LicenseStatus",
            name: "status",
            type: "uint8"
          }
        ],
        internalType: "struct ImageLicensing.License[10]",
        name: "outgoingRequests",
        type: "tuple[10]"
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
