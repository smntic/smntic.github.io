import React from 'react';
import Window from '../../Window';
import { CodeBlock, zenburn } from 'react-code-blocks'
import hueMasterResult from '../../../assets/images/huemaster_result.png';

interface HueMasterWindowProps {
    onClose: () => void;
    onClick: () => void;
    zIndex: number;
    focused: boolean;
}

const HueMasterWindow: React.FC<HueMasterWindowProps> = (props) => {
    const DSLSample = `cursor: capitaine-cursors-$$LIGHT?light:dark$$
background: $$BACKGROUND.alpha(-20)$$`;

    return (
        <Window title="HueMaster" windowWidth={1000} windowHeight={700} {...props}>
        <div>
            <h1>HueMaster</h1>
            <h3>Create a Usable Color Scheme from an Image</h3>
            <h4>
                <a className="link" href="https://github.com/smntic/cp-tool">GitHub Repository</a>
            </h4>
            <p>
                <strong>HueMaster</strong> is a color scheme generator that extracts a usable palette from an image, such as a wallpaper. 
                It is written in C++ and leverages the <code>OpenCV</code> and <code>toml11</code> libraries.
            </p>
            <p>
                The tool uses OpenCV's <code>cv::kmeans</code> for K-means clustering and several heuristics to determine a color set from the input image. 
                These heuristics calculate a score for each color based on factors such as:
                <ul className="list">
                    <li>Distance to other colors in the scheme</li>
                    <li>Contrast with the background color</li>
                    <li>Proportion of the color in the original image</li>
                </ul>
                The color with the best score is selected for the scheme.
            </p>
            <p>
                I ensured the code follows the <strong>Single Responsibility Principle (SRP)</strong> by dividing it into concise classes. 
                For example, configuration tasks are handled across three separate files:
                <ul className="list">
                    <li><code>configurator.cpp</code> - Reads the HueMaster config</li>
                    <li><code>parser.cpp</code> - Parses individual program config files</li>
                    <li><code>writer.cpp</code> - Writes the final configuration files</li>
                </ul>
            </p>
            <p>
                HueMaster also includes a domain-specific language (DSL) for specifying colors in config files. 
                The DSL allows commands like <code>lighten</code> and <code>alpha</code>, and it supports a ternary
                operator: <code>LIGHT?STRING_1:STRING_2</code>, which selects a string depending on whether the scheme is light or dark.
            </p>
            <CodeBlock text={DSLSample} language="text" theme={zenburn} />
            <p>
                Below is one of my previous <a className="link" href="https://github.com/smntic/void-nullptr">i3 setups</a>, which uses HueMaster for the color scheme:
            </p>
            <img 
                src={hueMasterResult} 
                alt="Linux i3 setup using HueMaster" 
                className="image" 
                style={{ width: "100%" }} 
            />
            <p>
                In the future, I plan to integrate machine learning to replace the current heuristics, enabling the tool to generate more consistent and aesthetically-pleasing color schemes.
            </p>
        </div>
        </Window>
    );
}

export default HueMasterWindow;
