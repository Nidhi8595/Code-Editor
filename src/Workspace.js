import React, { useState } from 'react';
import './Workspace.css';
import { Editor } from '@monaco-editor/react';

const Workspace = () => {
    const [code, setCode] = useState('// Write your code here...');
    const [language, setLanguage] = useState('javascript');
    const [theme, setTheme] = useState('vs-dark'); // Default theme
    const [output, setOutput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [folders, setFolders] = useState([]);

    const handleEditorChange = (value) => {
        setCode(value);
    };

    const runCode = async () => {
        setIsLoading(true);
        try {
            // Simulating API execution (Replace this with your JDoodle integration)
            const fakeOutput = `Executing ${language} code...`;
            setTimeout(() => {
                setOutput(fakeOutput);
                setIsLoading(false);
            }, 1000);
        } catch (error) {
            console.error("Error executing code:", error);
            setOutput("Error executing code.");
        }
    };

    const addFolder = () => {
        const folderName = prompt('Enter folder name:');
        if (folderName) {
            setFolders((prevFolders) => [
                ...prevFolders,
                { name: folderName, files: [] },
            ]);
        }
    };

    const addFileToFolder = (folderIndex) => {
        const fileName = prompt('Enter file name (e.g., main.js):');
        if (fileName) {
            setFolders((prevFolders) =>
                prevFolders.map((folder, index) =>
                    index === folderIndex
                        ? { ...folder, files: [...folder.files, fileName] }
                        : folder
                )
            );
        }
    };

    const deleteFileFromFolder = (folderIndex, fileName) => {
        setFolders((prevFolders) =>
            prevFolders.map((folder, index) =>
                index === folderIndex
                    ? {
                        ...folder,
                        files: folder.files.filter((file) => file !== fileName),
                    }
                    : folder
            )
        );
    };

    return (
        <div className="workspace">
            <nav className="workspace-nav">
                <ul>
                    <li onClick={addFolder}>Create New Folder</li>
                    {folders.map((folder, folderIndex) => (
                        <li key={folder.name}>
                            <span>{folder.name}</span>
                            <ul>
                                {folder.files.map((file) => (
                                    <li key={file}>
                                        {file}{' '}
                                        <button
                                            onClick={() =>
                                                deleteFileFromFolder(folderIndex, file)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </li>
                                ))}
                                <li>
                                    <button onClick={() => addFileToFolder(folderIndex)}>
                                        Add File
                                    </button>
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>
            <main className="workspace-main">
                <div className="editor-header">
                    <h2>Editor</h2>
                    <div className="editor-options">
                        <select
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                            className="theme-selector"
                        >
                            <option value="vs-dark">Dark</option>
                            <option value="light">Light</option>
                        </select>
                        <button className="run-btn" onClick={runCode} disabled={isLoading}>
                            {isLoading ? 'Running...' : 'Run'}
                        </button>
                    </div>
                </div>
                <Editor
                    height="60vh"
                    language={language}
                    value={code}
                    onChange={handleEditorChange}
                    theme={theme}
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
