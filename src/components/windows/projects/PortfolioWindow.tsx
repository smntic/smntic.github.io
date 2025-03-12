import React from "react";
import Window from "../../Window";
import portfolioScreenshot from '../../../assets/images/portfolio.png'

interface PortfolioWindowProps {
    onClose: () => void;
    onClick: () => void;
    zIndex: number;
    focused: boolean;
}

const PortfolioWindow: React.FC<PortfolioWindowProps> = (props) => {
    return (
        <Window
            title="Portfolio"
            windowWidth={1000}
            windowHeight={700}
            {...props}
        >
            <div>
                <h1>Portfolio</h1>
                <h3>(This website)</h3>
                <h4>
                    <a
                        className="link"
                        href="https://github.com/smntic/smntic.github.io"
                    >
                        GitHub Repository
                    </a>
                </h4>
                <p>
                    Many developers eventually decide to create a portfolio website to showcase
                    their unique talent. I wanted this portfolio to be different from all the
                    others, and so I decided to go back to my childhood operating system: Windows
                    XP.
                </p>
                <p>
                    This website was programmed using React and TypeScript. I wanted to ensure the
                    Window system was clean and would allow me to add more functionality in the
                    future. I have some ideas for extensions of the website, including adding an
                    awards window if I receive more notable awards.
                </p>
                <p>
                    Feel free to play around with the website, including playing a game of
                    Minesweeper!
                </p>
                <img src={portfolioScreenshot} alt="Screenshot of the portfolio website" width="100%" />
            </div>
        </Window>
    );
};

export default PortfolioWindow;
