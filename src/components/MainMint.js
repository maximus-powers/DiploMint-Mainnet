import { useState } from 'react';
import { ethers } from 'ethers'; //a better alternative to web3.js
import diplomint from '../Diplomint.json';

const diplomintContractAddress = '0xbcf9ee134E4451e65Ea780c90814aC947Eb60988';

const MainMint = ({ accounts, setAccounts }) => {
    // Hooks
    const isConnected = Boolean(accounts[0]);

    const [institution, setInstitution] = useState(''); // change this to update automatically when I setup auth
    const [studentWallet, setStudentWallet] = useState('');

    const [studentName, setStudentName] = useState('');
    const [studentMajor, setStudentMajor] = useState('');
    const [studentGraduationDate, setStudentGraduationDate] = useState('');

    // Input Change Handlers
    const handleSetInstitution = (e) => { setInstitution(e.target.value); }
    const handleSetStudentWallet = (e) => { setStudentWallet(e.target.value); }
    const handleSetStudentName = (e) => { setStudentName(e.target.value); }
    const handleSetStudentMajor = (e) => { setStudentMajor(e.target.value); }
    const handleSetStudentGraduationDate = (e) => { setStudentGraduationDate(e.target.value); }

    async function mintDiploma(e) {
        e.preventDefault()
        // Opens an ethereum session through the wallet
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum); // this allows ethers to connect to chain
            const signer = provider.getSigner(); // this allows us to sign transactions
            const contract = new ethers.Contract(diplomintContractAddress, diplomint.abi, signer); // this allows us to interact with the contract's functions
            console.log('Contract Connected');

            // This calls the contract's mint function
            try {
                const response = await contract.mintWithMetadata(studentWallet, studentName, studentMajor, studentGraduationDate, institution);
                console.log('Response:', response);
            }
            catch (err) { console.log('Error Minting:', err); }
        }
    }

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }); // gives all the accounts in the metamask wallet accessing site
            setAccounts(accounts); // updates the state
        }
        console.log('Account Connected');
    }

    return (
        <div className="text-center mt-3">
        <h1>Mint a Diploma</h1> {/* change this to update automatically when I setup auth */}
        <p>Please fill out all fields for your student's diploma:</p>
        
        {/* Asks them to sign in with wallet before they can mint a diploma */}
            {isConnected ? (
            <form>
                <input type="text" value={institution} onChange={handleSetInstitution} placeholder="Institution"/>
                <input type="text" value={studentName} onChange={handleSetStudentName} placeholder="Student Name"/>
                <input type="text" value={studentWallet} onChange={handleSetStudentWallet} placeholder="Student Wallet Address"/>
                <input type="text" value={studentMajor} onChange={handleSetStudentMajor} placeholder="Major"/>
                <input type="date" value={studentGraduationDate} onChange={handleSetStudentGraduationDate} placeholder="Graduation Date"/>
                <button onClick={mintDiploma}>Mint Diploma</button>
            </form>
            ) : (
                <div>
                    <p>Please connect your wallet to mint</p>
                    {isConnected ? (<div>Connected</div>) : (<button onClick={connectAccount}>Connect</button>)}
                </div>
            )}
        </div>
    );
}

export default MainMint; // makes it so app can import this