import React, {useState} from 'react';
import './App.css';

function App() {

    const [token, setToken] = useState('');
    const [error, setError] = useState(false)

    const [header, setHeader] = useState(null);
    const [payload, setPayload] = useState(null);
    const [signature, setSignature] = useState('');


    const handleToken = (e) => {
        if (e.target.innerText) {

            const tokens = e.target.innerText.split('.');
            if (tokens.length === 3) {
                console.log("Valid JWT ")
                setError(false);
                console.log(atob(tokens[0]))
                setHeader(JSON.parse(atob(tokens[0])));
                setPayload(JSON.parse(atob(tokens[1])));
                //setSignature(atob(tokens[2]));

                const colorCodedToken = `
                    <span class="red">${tokens[0]}</span>.
                    <span class="purple">${tokens[1]}</span>.
                    <span class="blue">${tokens[2]}</span>
                    `

                setToken(colorCodedToken)

            } else {
                setHeader('');
                setPayload('');
                setSignature('');
                setError(true);
                setToken(e.target.value);
            }

        }

    }

    return (
        <div>
            <header>
                <nav>JWT Debugger</nav>
            </header>
            <div className="container">
                <div className={`input ${error ? 'error' : ''}`}>
                    <h1>JWT Token</h1>
                    <div className="textarea" contentEditable={true} type="text"
                         dangerouslySetInnerHTML={{__html: token}}
                         onInput={handleToken}/>
                </div>
                <div className="output">
                    <h2>Header</h2>
                    <div className="red">
                        <pre>
                        {JSON.stringify(header, null, 2)}
                        </pre>
                    </div>
                    <h2>Payload / Claims</h2>
                    <div className="purple">
                        <pre>{JSON.stringify(payload, null, 2)}</pre>
                    </div>
                    <h2>Signature</h2>
                    <div className="blue">{signature}</div>
                </div>
            </div>

        </div>
    );
}

export default App;
