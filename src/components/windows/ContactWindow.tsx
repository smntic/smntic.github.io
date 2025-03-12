import React from 'react';
import Window from '../Window';
import { Icon } from '@iconify/react';

interface WelcomeWindowProps {
    onClose: () => void;
    onClick: () => void;
    zIndex: number;
    focused: boolean;
}

const ContactWindow: React.FC<WelcomeWindowProps> = (props) => {
    return (
        <Window title="Contact" windowWidth={600} windowHeight={380} {...props}>
            <p>
                <Icon className="icon" icon="ic:baseline-email" />&nbsp;-&nbsp;
                <a className="link" href="mailto:simonashton.dev@gmail.com">
                    simonashton.dev@gmail.com
                </a> (preferred method of communication)
            </p>
            <p>
                <Icon className="icon" icon="ic:baseline-phone" />&nbsp;-&nbsp;
                <a className="link" href="tel:778.917.9843">
                    778.917.9843
                </a>
            </p>
            <p>
                <Icon className="icon" icon="ic:baseline-house" />&nbsp;-
                Please contact me directly if you need my address.
            </p>
            <br />
            <p>
                <Icon className="icon" icon="mdi:github" />&nbsp;-&nbsp;
                <a className="link" href="https://github.com/smntic" target="_blank" rel="noopener noreferrer">
                    smntic (Simon Ashton)
                </a>
            </p>
            <p>
                <Icon className="icon" icon="mdi:discord" />&nbsp;-
                smntic (Simon)
            </p>
            <p>
                <Icon className="icon" icon="simple-icons:codeforces" />&nbsp;-&nbsp;
                <a className="link" href="https://codeforces.com/profile/MrPerson" target="_blank" rel="noopener noreferrer">
                    MrPerson
                </a>
            </p>
            <p>
                <Icon className="icon" icon="mdi:youtube" />&nbsp;-&nbsp;
                <a className="link" href="https://www.youtube.com/@smntic" target="_blank" rel="noopener noreferrer">
                    @smntic (Simon Ashton)
                </a>
            </p>
        </Window>
    );
}

export default ContactWindow;
