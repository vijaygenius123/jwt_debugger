import React, {useState} from 'react';
import './App.css';

function App() {

    const [token, setToken] = useState('');
    const [error, setError] = useState(false)

    const [header, setHeader] = useState('');
    const [payload, setPayload] = useState('');
    const [signature, setSignature] = useState('');


    const handleToken = (e) => {
        if (e.target.value) {

            const tokens = e.target.value.split('.');
            if (tokens.length === 3) {
                setError(false);

            } else {
                setError(true);
            }

            console.log(tokens)

        }
        console.log(e.target.value);


        setToken(e.target.value);
    }

    return (
        <div>
            <header>
                <nav>JWT Debugger</nav>
            </header>
            <div className="container">
                <div className={`input ${error ? 'error' : ''}`}>
                    <h1>JWT Token</h1>
                    <textarea type="text" value={token} onChange={handleToken}/>
                </div>
                <div className="output">
                    <h2>Header</h2>
                    <div></div>
                    <h2>Payload / Claims</h2>
                    <div></div>
                    <h2>Signature</h2>
                    <div></div>
                </div>
            </div>

        </div>
    );
}

export default App;
