import React from 'react';
import Window from '../../Window';
import { CodeBlock, zenburn } from 'react-code-blocks';

interface CPToolWindowProps {
    onClose: () => void;
    onClick: () => void;
    zIndex: number;
    focused: boolean;
}

const CPToolWindow: React.FC<CPToolWindowProps> = (props) => {
    const commands = `$ cpt help
Usage: cpt <commands> [args]
cpt help
cpt problem <name>
cpt contest <num_problems> <name>
cpt template <name>
--extension=<ext> or -e=<ext> to specify file extension`;

    return (
        <Window title="CPTool" windowWidth={1000} windowHeight={700} {...props}>
        <div>
            <h1>cp-tool</h1>
            <h3>A CLI for Creating Competitive Programming Files</h3>
            <h4>
                <a className="link" href="https://github.com/smntic/cp-tool">GitHub Repository</a>
            </h4>
            <p>
                <strong>cp-tool</strong> is a lightweight Python script for generating folder structures 
                and solution files for competitive programming problems. It supports both individual problems 
                and entire contests.
            </p>
            <p>
                Competitive programmers often start with a template, and cp-tool makes that easy by 
                allowing users to specify a template file, which is copied into each new solution.
            </p>
            <p>
                To simplify the command from <code>python cp-tool.py</code> to just <code>cpt</code>, 
                I wrote a shell script. This script also enables users to automatically <code>cd</code> into
                the new directory by sourcing it or using an alias (<code>alias cpt='source cpt'</code>).
            </p>
            <p>
                Here are all the available commands:
            </p>
            <CodeBlock text={commands} language="text" showLineNumbers={false} theme={zenburn} />
            <p>
                Additionally, I utilized GitHub Actions to automate the process of publishing cp-tool to PyPI.
                So installation is as simple as <code>pip install cptool-py</code>.
            </p>
            <p>
                I may support other platforms in the future, but for now, cp-tool is only available for Linux.
            </p>
        </div>
        </Window>
    );
}

export default CPToolWindow;
