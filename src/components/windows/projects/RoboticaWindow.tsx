import React from 'react';
import Window from '../../Window';
import roboticaSnap from '../../../assets/images/robotica_snap.png';
import roboticaGroup from '../../../assets/images/robotica_group.png';

interface RoboticaWindowProps {
    onClose: () => void;
    onClick: () => void;
    zIndex: number;
    focused: boolean;
}

const RoboticaWindow: React.FC<RoboticaWindowProps> = (props) => {
    return (
        <Window title="Robotica" windowWidth={1000} windowHeight={700} {...props}>
            <div>
                <h1>Robotica</h1>
                <h3>Open Source VEX Prototyping Software</h3>
                <h4>
                    <a className="link" href="https://github.com/smntic/Robotica">GitHub Repository</a>
                </h4>
                <p>
                    <strong>Robotica</strong> is a VEX prototyping and CAD software developed using the <a className="link" href="https://godotengine.org">Godot</a> game engine with C# and GDScript,
                    alongside Blender for creating 3D models.
                </p>
                <p>
                    This software was designed as an enhancement over another VEX prototyping tool, <a className="link" href="https://protobot.web.app/">Protobot</a>.
                </p>
                <p>
                    This project marked my first experience working on a software development effort that spanned more than a few months.
                    In total, I dedicated three months to importing new parts and implementing core functionalities. However, due to time constraints, the project was rushed, leading to various challenges later on.
                </p>
                <p>
                    Key features of Robotica include a transform tool for repositioning parts and a move tool that enables users to quickly snap components together.
                </p>
                <img
                    src={roboticaSnap}
                    alt="A nut being snapped onto a screw in Robotica"
                    style={{ width: "80%" }}
                />
                <p>
                    Robotica also incorporates automatic grouping of parts, based on a system involving "fasteners," "inserts," and "holes."
                </p>
                <img
                    src={roboticaGroup}
                    alt="A C-channel automatically grouped with connected parts."
                    style={{ width: "80%" }}
                />
                <p>
                    The main improvements of Robotica over <a className="link" href="https://protobot.web.app/">Protobot</a> include significantly enhanced performance (often achieving 10 times the framerate),
                    faster load times, an expanded parts library, more consistent automatic grouping, manual grouping capabilities, reliable saving and loading functionality, and a <i>substantial</i> increase in settings.
                </p>
                <p>
                    However, several enhancements could be made to the code design. For instance, separating the lengthy <code>Control.cs</code> class would facilitate cleaner and more maintainable control logic.
                    Additionally, the part system could be made more abstract to simplify the process of adding new parts, eliminating the need to edit multiple files to introduce a single component.
                    Without these improvements, the project becomes increasingly challenging to maintain and develop further.
                </p>
            </div>
        </Window>
    );
}

export default RoboticaWindow;
