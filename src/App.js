import React, {useState} from 'react';
import './App.css';

function App() {

    const [token, setToken] = useState('')

    return (
        <div>
            <header>
                <nav>JWT Debugger</nav>
            </header>
            <div className="container">
                <div className="input">
                    <h1>JWT Token</h1>
                        <textarea type="text" value={token} onChange={e=> setToken(e.target.value)}/>
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
