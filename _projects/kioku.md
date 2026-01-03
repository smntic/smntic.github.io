---
layout: project
title: Kioku
description: >
  A modular reinforcement learning research framework for implementing
  and experimenting with classic RL algorithms in PyTorch.
start_date: 2024-10-01
end_date: 2026-01-01
---

Kioku is a reinforcement learning library built in PyTorch. It implements
classic and modern RL algorithms with a focus on clean abstractions and
modularity for agents, value functions, memory buffers and training loops.

The framework currently includes implementations of DQN, A2C and PPO.

## Technical Design

Kioku is implemented in Python using PyTorch and Gymnasium. Agents are built
from modular components, including policy/value networks, replay or on-policy
buffers, schedulers (for epsilon, learning rate, etc.) and trainers. This
structure keeps the codebase clean and facilitates construction of new agents.

It currently supports the following agents:

- [**DQN**](https://github.com/smntic/kioku/blob/main/kioku/agents/dqn_agent.py)
  - Based on: [Playing Atari with Deep Reinforcement Learning](https://arxiv.org/abs/1312.5602)
  - Uses Q-value function with Polyak averaging and epsilon decay
- [**DQN with PER**](https://github.com/smntic/kioku/blob/main/kioku/agents/dqn_per_agent.py)
  - Adds a priotized experience replay buffer based on: [Prioritized Experience Replay](https://arxiv.org/abs/1511.05952)
- [**A2C**](https://github.com/smntic/kioku/blob/main/kioku/agents/a2c_agent.py)
  - Based on: [Asynchronous Methods for Deep Reinforcement Learning](https://arxiv.org/abs/1602.01783)
  - Uses N-step returns
- [**PPO**](https://github.com/smntic/kioku/blob/main/kioku/agents/ppo_agent.py)
  - Based on: [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347)
  - Uses Generalized Advantage Estimation, N-step returns, mini-batch learning,
    multiple learning iterations per batch.

## Why Kioku?

Kioku started as an attempt to deeply understand reinforcement learning
algorithms by implementing them from scratch instead of relying on high-level
libraries. I was particularly interested in implementing PPO, since none of my
previous attempts succeeded.

I started this project in fall 2024, when I was taking *COGS 100: Exploring the
Mind*, an introductory cognitive science course at SFU. I learned about
cognitive science concepts like [constructionist and constructivist approaches](https://cdn.aaai.org/ocs/888/888-4276-1-PB.pdf),
which inspired me to take a *constructionist* approach and build a modular
framework for constructing agents.

## Challenges

The primary challenge was translating math-heavy algorithms like A2C and PPO
into reliable implementations. Small details can cause drastic changes in
performance, so a lot of trial-and-error was necessary.

Hyperparameter optimization was also difficult. I mainly manually tuned the
parameters (luckily the agent constructors make this easy), but in the future,
I will look into hyperparameter sweeps to automate this.

## Results

**DQN Cartpole:**

![DQN cartpole episde rewards](https://github.com/smntic/kioku/raw/refs/heads/main//results/dqn_cartpole/dqn_cartpole.png)
![DQN cartpole gif](https://github.com/smntic/kioku/raw/refs/heads/main//results/dqn_cartpole/dqn_cartpole.gif)

**PPO Cartpole:**

![PPO CartPole episode rewards](https://github.com/smntic/kioku/raw/refs/heads/main//results/ppo_cartpole/ppo_cartpole.png)
![PPO CartPole gif](https://github.com/smntic/kioku/raw/refs/heads/main//results/ppo_cartpole/ppo_cartpole.gif)

**PPO Lunar Lander:**

![PPO Lunar Lander episode rewards](https://github.com/smntic/kioku/raw/refs/heads/main//results/ppo_lunarlander/ppo_lunarlander.png)
![PPO Lunar Lander gif](https://github.com/smntic/kioku/raw/refs/heads/main//results/ppo_lunarlander/ppo_lunarlander.gif)
