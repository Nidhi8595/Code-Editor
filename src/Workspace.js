import React, { useState } from 'react';
import './Workspace.css';
import { Editor } from '@monaco-editor/react';
import axios from 'axios';

const Workspace = () => {
    const [code, setCode] = useState('// Write your code here...');
    const [language, setLanguage] = useState('javascript');
    const [output, setOutput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleEditorChange = (value) => {
        setCode(value);
    };

    const runCode = async () => {
        setIsLoading(true);
        try {
            // Make a request to the JDoodle API
            const response = await axios.post('https://api.jdoodle.com/v1/execute', {
                script: code,
                language: language,
                clientId: 'your-client-id', // Replace with your JDoodle client ID
                clientSecret: 'your-client-secret', // Replace with your JDoodle client secret
            });
            
            if (response.data) {
                setOutput(response.data.output); // Set the output received from the API
            }
        } catch (error) {
            console.error("Error executing code:", error);
            setOutput("Error executing code.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="workspace">
            <nav className="workspace-nav">
                <ul>
                    <li>Create New Folder</li>
                    <li>Open Folder</li>
                    <li>Create New File</li>
                    <li>Open Git Repository</li>
                    <li>Extensions</li>
                </ul>
            </nav>
            <main className="workspace-main">
                <div className="editor-header">
                    <h2>Editor</h2>
                    <button className="run-btn" onClick={runCode} disabled={isLoading}>
                        {isLoading ? 'Running...' : 'Run'}
                    </button>
                </div>
                <Editor
                    height="60vh"
                    language={language}
                    value={code}
                    onChange={handleEditorChange}
                />
                <div className="output">
                    <h3>Output:</h3>
                    <pre>{output}</pre>
                </div>
            </main>
        </div>
    );
};

export default Workspace;
