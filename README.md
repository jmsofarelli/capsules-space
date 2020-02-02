# Capsules Spaces Project

## Introduction

Welcome to Capsules Space
Using this project, content creators can easily:

* Upload content to a distributed file storage network (IPFS)
* Digitally sign the content using an uPort ID, creating a Capsule
* Register the Capsule in a Smart Contract deployed in an Ethereum Blockchain
* Share the Capsule URL with others to they can visualize it and check the creator's signature
* For more information about Capsules, please visit our website at [Capsules Space](http://capsules.space) 

### What is a Capsule
A Capsule is simply a content encapsulated with the content creator's digital signature. Contains:
* A reference (or link) to the content
* The digital signature of the content creator

### Why should I create Capsules?
* Content consumers know exactly who created and signed the content
* The signature in a Capsule ensures the integrity of the content 
    * It's easy to identify if the content was tampered or modified
* Capsules reinforces a trust relationship between content creator and consumers

### Image Licensing
* Additionally to the basic functionality of registering Capsules, this projects also provides an use case for it: image licensing. 
* The images registered as Capsules will be available for other users to license, paying a  fee to the image owner 
* **Warning**: The image licensing functionality is only a demo and maybe changed radically  in the near future. 


## Project Structure

## Backend 

* The backend of project is composed of two Smart Contracts (`CapsulesRegisty` and `ImageLicensing`)  written in Solidity inside a Truffle project.
* The basic Truffle commands can be run from the root of the project:
`truffle compile`, `truffle test`, `truffle migrate`


## UI

* The UI of the project was created using the **React** framework (`create-react-app`).
* In order to start it you should go tothe `ui` root directory, install the dependencies and run the app:
  * `cd ui`
  * `npm install`
  * `npm start`
* The application will be served on port 3000: http://localhost:3000




