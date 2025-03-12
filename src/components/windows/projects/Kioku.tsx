import React from "react";
import Window from "../../Window";

interface KiokuWindowProps {
    onClose: () => void;
    onClick: () => void;
    zIndex: number;
    focused: boolean;
}

const KiokuWindow: React.FC<KiokuWindowProps> = (props) => {
    return (
        <Window
            title="Kioku"
            windowWidth={1000}
            windowHeight={700}
            {...props}
        >
            <div>
                <h1>Kioku</h1>
                <h3>
                    "memory; recollection; remembrance"—my RL experiments...
                </h3>
                <h4>
                    <a className="link" href="https://github.com/smntic/kioku">
                        GitHub Repository
                    </a>
                </h4>
                <p>
                    Kioku is my <i>very</i> informal exploration of
                    reinforcement learning (RL) research. I aim to take a
                    cognitive science-inspired approach to building agents,
                    drawing on mechanisms from the human mind that help us solve
                    challenging environments.
                </p>
                <p>
                    So far, I have implemented three key RL algorithms: DQN,
                    A2C, and PPO. Implementing PPO has been a surprising journey
                    for me because of its complexity—many parts need to be
                    implemented correctly for the algorithm to work, and even
                    small mistakes can prevent it from converging. Now that I
                    have a working PPO implementation, I am focusing on making
                    it more sample-efficient and exploratory.
                </p>
                <p>
                    In the near future, I want to add recurrence to my PPO
                    agent. This would act as short-term memory, allowing the
                    agent to plan and iterate with a chain-of-thought process
                    (ideally).
                </p>
                <p>
                    I also plan to implement dreaming, an off-policy learning
                    technique where the agent imagines trajectories using a
                    world model. This method is inspired by DeepMind's Dreamer
                    agents.
                </p>
                <p>
                    On the technical side, I focus on writing clear and
                    maintainable code. I use NumPy for general array operations
                    and PyTorch tensors for arrays that require gradients or are
                    input to the models. I include type hints throughout and
                    document all functions and classes with docstrings. I
                    abstract complex parts of the system into reusable
                    components, such as memory management and function
                    approximation modules, to keep the main script simple and
                    modular.
                </p>
                <p>
                    For environment creation, I provide an abstract base class
                    that I use to develop specific environments, such as a
                    Gymnasium wrapper or custom environments for testing
                    features.
                </p>
                <p>
                    I also prioritize extensive logging, which makes debugging
                    much easier. For example, in my A2C implementation, I
                    noticed that the gradient norms of one of my function
                    approximators were zero, which helped me identify that the
                    gradients were being detached. I currently use TensorBoard
                    for logging but may switch to a tool with a more
                    user-friendly interface in the future.
                </p>
            </div>
        </Window>
    );
};

export default KiokuWindow;
