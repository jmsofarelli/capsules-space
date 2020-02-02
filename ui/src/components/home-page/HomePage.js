import React from 'react';

const HomePage = () => {
    return (
        <div style={{ margin: '20px'}}>
            <div >
                <h2 style={{ marginTop: '50px'}}>Welcome to Capsules Space</h2>
                <p>Using this App, content creators can easily:</p>
                <ul>
                    <li>Upload content to a distributed file storage network (IPFS)</li> 
                    <li>Digitally sign the content using an uPort ID, creating a Capsule</li>
                    <li>Register the Capsule in a Smart Contract deployed in an Ethereum Blockchain</li>
                    <li>Share the Capsule URL with others so they can visualize it and check the creator's signature</li> 
                </ul>
            </div>
            <h2 style={{ marginTop: '50px'}}>What is a Capsule</h2>
            <p>A Capsule is simply a content encapsulated with the content creator's digital signature. Contains:</p>
            <ul>
                <li>A reference (or link) to the content</li>
                <li>The digital signature of the content creator</li>
            </ul>
            <h2 style={{ marginTop: '50px'}}>Why should I create Capsules?</h2>
            <ul>
                <li>Content consumers know exactly who exactly who created and signed he content</li>
                <li>The signature in a Capsule ensures that the content was not modified</li>
                <li>Capsules reinforces a trust relationship between creator and consumers</li>
            </ul>
        </div>
    );
}

export default HomePage;