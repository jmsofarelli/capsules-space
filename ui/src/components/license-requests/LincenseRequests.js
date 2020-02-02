import React from 'react';
import { withRouter } from 'react-router';
import web3 from '../../util/web3';
import { licensingAbi, licensingAddrs } from '../../config/image-licensing';
import { registryAbi, registryAddrs } from '../../config/capsules-registry';
import { formatHash } from '../../util/format';
import { LicenseStatus } from "../../enums/LicenseStatus";

class LicenseRequests extends React.Component {

    state = {
        incomingRequests: [],
        outgoingRequests: []
    }

    componentDidMount = async () => {
        const network = await web3.eth.net.getNetworkType();
        const blockNumber = await web3.eth.getBlockNumber();
        const licensingAddr = licensingAddrs[network];
        this.imageLicensing = new web3.eth.Contract(licensingAbi, licensingAddr);
        this.imageLicensing.events.LicenseRequested({fromBlock: blockNumber}, this.fetchLicenseRequests);
        this.imageLicensing.events.LicenseApproved({fromBlock: blockNumber}, this.fetchLicenseRequests);
        this.imageLicensing.events.LicenseRefused({fromBlock: blockNumber}, this.fetchLicenseRequests);
        this.imageLicensing.events.LicenseCancelled({fromBlock: blockNumber}, this.fetchLicenseRequests);
        this.fetchLicenseRequests();
    }

    componentWillUnmount = () => {

    }

    fetchLicenseRequests = async () => {
        this.fetchIncomingRequests();
        this.fetchOutgoingRequests();
    }

    fetchIncomingRequests = async () => {
        var accounts = await web3.eth.getAccounts();
        const result = await this.imageLicensing.methods.getIncomingRequests().call({ from: accounts[0] });
        const incomingRequests = [];
        const count = parseInt(result.count);
        for (let i = 0; i < count; i++) {
            const request = result.incomingRequests[i];
            const { contentHash, status, licensee } = request;
            incomingRequests.push({
                contentHash,
                licensee,
                status: parseInt(status)
            });
        }
        this.setState({ incomingRequests });
    }

    fetchOutgoingRequests = async () => {
        var accounts = await web3.eth.getAccounts();
        const result = await this.imageLicensing.methods.getOutGoingRequests().call({ from: accounts[0] });
        const outgoingRequests = [];
        const count = parseInt(result.count);
        for (let i = 0; i < count; i++) {
            const request = result.outgoingRequests[i];
            const { contentHash, status } = request;
            outgoingRequests.push({
                contentHash,
                status: parseInt(status)
            });
        }
        this.setState({ outgoingRequests });
    }

    renderIncomingRequests = () => {
        const { incomingRequests } = this.state;
        if (incomingRequests.length > 0) {
            return incomingRequests.map( request => {
                const { contentHash, licensee, status } = request;
                return (
                    <div key={contentHash} className="row">
                        <div className="col col-m">{ formatHash(contentHash) }</div>
                        <div className="col col-b">{ licensee }</div>
                        <div className="col col-s">{ LicenseStatus[status] }</div>
                        <div className="col col-s align-right">
                            <button disabled={status !== 0} onClick={() => this.approveLicenseRequest(contentHash, licensee)}>Approve</button>
                            <button disabled={status !== 0} onClick={() => this.refuseLicenseRequest(contentHash, licensee)}>Refuse</button>
                        </div>
                    </div>
                );
            });
        }
    }

    renderOutgoingRequests = () => {
        const { outgoingRequests } = this.state;
        if (outgoingRequests.length > 0) {
            return outgoingRequests.map( request => {
                const { contentHash, status } = request;
                return (
                    <div key={contentHash} className="row">
                        <div className="col col-m">{ formatHash(contentHash) }</div>
                        <div className="col col-b"></div>
                        <div className="col col-s">{ LicenseStatus[status] }</div>
                        <div className="col col-s align-right">
                            <button disabled={status !== 0} onClick={() => this.cancelLicenseRequest(contentHash)}>Cancel</button>
                        </div>
                    </div>
                );
            });
        }
    }

    approveLicenseRequest = async (contentHash, licensee ) => {
        await window.ethereum.enable();
        var accounts = await web3.eth.getAccounts();
        await this.imageLicensing.methods.approveLicenseRequest(contentHash, licensee).send({from: accounts[0]});
    }

    refuseLicenseRequest = async (contentHash, licensee) => {
        await window.ethereum.enable();
        var accounts = await web3.eth.getAccounts();
        await this.imageLicensing.methods.refuseLicenseRequest(contentHash, licensee).send({from: accounts[0]});
    }

    cancelLicenseRequest = async (contentHash) => {
        await window.ethereum.enable();
        var accounts = await web3.eth.getAccounts();
        await this.imageLicensing.methods.cancelLicenseRequest(contentHash).send({from: accounts[0]});
    }
    
    render = () => {
        return (
            <div>
                <div className="container">
                    <div className="header">Incoming License Requests</div>
                    <div className="row-header">
                        <div className="col col-m">Hash</div>
                        <div className="col col-b">Licensee</div>
                        <div className="col col-s">Status</div>
                        <div className="col col-s"></div>
                    </div>
                    { this.renderIncomingRequests() }
                </div>

                <div className="container">
                    <div className="header">Outgoing License Requests</div>
                    <div className="row-header">
                        <div className="col col-m">Hash</div>
                        <div className="col col-b"></div>
                        <div className="col col-s">Status</div>
                        <div className="col col-s"></div>
                    </div>
                    { this.renderOutgoingRequests() }
                </div>
            </div>
        );
    }
}

export default withRouter(LicenseRequests);