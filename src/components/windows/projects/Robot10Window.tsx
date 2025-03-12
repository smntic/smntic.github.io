import React from 'react';
import Window from '../../Window';
import robot34300A from '../../../assets/images/34300A.jpg';

interface Robot10WindowProps {
    onClose: () => void;
    onClick: () => void;
    zIndex: number;
    focused: boolean;
}

const Robot10Window: React.FC<Robot10WindowProps> = (props) => {
    return (
        <Window title="Robot10" windowWidth={1000} windowHeight={700} {...props}>
            <div>
                <h1>Robot10</h1>
                <h3>2023-2024 VEX Robotics Code</h3>
                <h4>
                    <a className="link" href="https://github.com/smntic/Robot10">GitHub Repository</a>
                </h4>
                <p>
                    <strong>Robot10</strong> is the final version of my VEX Robotics code for the 2023-2024 season. 
                    It is written in C++ and utilizes the&nbsp;
                    <a className="link" href="https://github.com/purduesigbots/pros">PROS</a> and&nbsp;
                    <a className="link" href="https://github.com/LemLib/LemLib">LemLib</a> libraries.
                </p>
                <p>
                    <code>LemLib</code> simplifies many complex features necessary for creating autonomous programs, including&nbsp;
                    <a className="link" href="https://en.wikipedia.org/wiki/Proportional%E2%80%93integral%E2%80%93derivative_controller">PID</a> control 
                    and <a className="link" href="https://wiki.purduesigbots.com/software/odometry">odometry</a>.
                </p>
                <p>
                    The robot's path was determined through a combination of online mapping tools, field measurements, and trial-and-error. 
                    In addition to driving, the robot was required to control several functions autonomously and with driver input, including 
                    "wings" (essentially snow plows, which were crucial for that season's competitive strategy) and a catapult that also served as a climbing mechanism.
                </p>
                <img 
                    src={robot34300A} 
                    alt="34300A VEX robot" 
                    className="image" 
                    style={{ width: "70%" }} 
                />
                <p>
                    During our final competition, there were multiple instances where the robot would unexpectedly turn around and attempt to escape the field. 
                    We discovered that the uploaded code was corrupted, and re-uploading it resolved the issue. This experience emphasized the importance of thoroughly testing the software before matches, even when everything <i>appears</i> to be functioning correctly.
                </p>
            </div>
        </Window>
    );
}

export default Robot10Window;
