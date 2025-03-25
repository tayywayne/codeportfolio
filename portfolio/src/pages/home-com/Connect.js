import React, { useState } from "react";

function Connect() {
    const email = "taywaydev@gmail.com";
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Hide after 2 seconds
            })
            .catch((err) => console.error("Failed to copy: ", err));
    };

    return (
        <div className="connect">
            <div className="connect1">
                <h2>LETS GET CONNECTED</h2>
            </div>
            <div className="connect1">
                <div className="connect-link">
                    <a onClick={copyToClipboard}>
                        taywaydev@gmail.com
                    </a>
                    {copied && <span className="popup">Copied!</span>}
                </div>
                <div className="connect-link">
                    <a href="https://www.linkedin.com/in/taywayne/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
                <div className="connect-link">
                    <a href="https://github.com/tayywayne" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </div>
                <div className="connect-link">
                    <a href="https://gitlab.com/taywaydev" target="_blank" rel="noopener noreferrer">
                        GitLab
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Connect;
