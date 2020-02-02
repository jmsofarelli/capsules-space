import "./NavBar.css";
import React from 'react';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import web3 from '../../util/web3';
import { abi, address } from '../../config/image-licensing';
import { abi as capsulesAbi, address as capsulesAddress } from '../../config/capsules-registry';
import { formatHash, getIpfsHash } from '../../util/format';
import { IPFS_BASE_URL } from '../../config/ipfs';

class NavBar extends React.Component {

    state = {
        network: '',
        account: ''
    }

    componentDidMount = async() => {
        const network = await web3.eth.net.getNetworkType();
        const accounts = await web3.eth.getAccounts();
        this.setState({ network, account: accounts[0]});
    }

    render = () => {
        return (
            <div className="nav-bar">
                <div className="nav-items">
                    <div className="nav-item"><Link to="/">Home</Link></div>
                    <div className="nav-item"><Link to="/launch">Launch</Link></div>
                    <div className="nav-item"><Link to="/images">Images</Link></div>
                    <div className="nav-item"><Link to="/licenses">Licensing</Link></div>
                </div>
                <div className="nav-status">
                    <div>
                        <span style={{ fontWeight: 'bold'}}>Network: </span>
                        {this.state.network || 'Not connected'}
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        <span style={{ fontWeight: 'bold'}}>Account: </span>
                        {this.state.account || 'Not connected'}</div>
                </div>
            </div>
        );
    }
}

export default withRouter(NavBar);