import React, { useState } from 'react';
import './Workspace.css';
import { Editor } from '@monaco-editor/react';

const Workspace = () => {
    const [code, setCode] = useState('// Write your code here...');
    const [language, setLanguage] = useState('javascript');
    const [theme, setTheme] = useState('vs-dark');
    const [output, setOutput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [folders, setFolders] = useState([]);
    const [activeFile, setActiveFile] = useState(null);

    const languageMappings = {
        js: 'javascript',
        py: 'python',
        cpp: 'cpp',
        java: 'java',
        html: 'html',
        css: 'css',
        c: 'c',
        php: 'php',
        rb: 'ruby',
        go: 'go',
        swift: 'swift',
        rs: 'rust',
    };

    const handleEditorChange = (value) => {
        setCode(value);
    };

    const runCode = async () => {
        if (!activeFile) {
            alert('No file selected.');
            return;
        }

        setIsLoading(true);
        try {
            // Simulate code execution based on language
            const fakeOutput = `Running ${language} code for ${activeFile}...`;
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
        const fileName = prompt('Enter file name with extension (e.g., main.js):');
        if (fileName) {
            const extension = fileName.split('.').pop();
            if (!languageMappings[extension]) {
                alert('Unsupported file extension.');
                return;
            }

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
        if (activeFile === fileName) {
            setActiveFile(null);
            setCode('// Write your code here...');
        }
    };

    const openFile = (fileName) => {
        setActiveFile(fileName);
        const extension = fileName.split('.').pop();
        setLanguage(languageMappings[extension] || 'plaintext');
        setCode('// Start coding here...'); // Reset editor content
    };

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
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
                                        <span onClick={() => openFile(file)}>{file}</span>
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
                    <h2>
                        Editor - {activeFile ? activeFile : 'No File Selected'}
                    </h2>
                    <div className="editor-options">
                        <select
                            value={language}
                            onChange={(e) => changeLanguage(e.target.value)}
                            className="language-selector"
                        >
                            {Object.values(languageMappings).map((lang) => (
                                <option key={lang} value={lang}>
                                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                                </option>
                            ))}
                        </select>
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
