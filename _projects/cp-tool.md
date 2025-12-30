---
layout: project
title: cp-tool
description: >
  A CLI utility for quickly generating competitive programming
  problem files from templates.
start_date: 2023-08-01
end_date: 2025-08-01
---

cp-tool is a command-line utility designed to automate setup for competitive
programming problem files. It creates a directory and copies solution files
from language-specific templates.

The tool supports generating files for individual problems, entire contests, or
just to copy your template. It supports different programming languages for the
template based on file extensions. Here is an example:

```bash
$ cpt problem test_problem # create directory and template file for a new problem
$ ls
test_problem
$ cd test_problem
$ ls
test_problem.cpp
$ cpt -ex=py template another_problem # copy python template for another problem
another_problem.py test_problem.cpp
```

I built cp-tool because I wanted a simple command-line solution to automate my
setup and the only existing solutions I could find were VSCode extensions (I
use Neovim, btw).

## Technical Notes

cp-tool is implemented in Python and distributed via PyPI (and nix flakes!).
You can easily install it yourself with:

```bash
pip install cptool-py
```

This was the first time I've ever created a public installation package for any
of my projects, and I was surprised by how easy it was with PyPI.

An early version used ad hoc command-line argument parsing, but I revisited the
project in 2025 to migrate to argparse. This introduced new challenges
regarding argument ordering and subcommands, which I resolved by simplifying
the command syntax at the cost of some ease-of-use. Overall, it significantly
simplified the code and made cp-tool more robust.

I also migrated from running file I/O commands explicitly in python to using
library support to support Windows.

## Results & Learning

While I no longer heavily rely on cp-tool, it saved me an estimated ~10 seconds
per problem in 2023--2024. This compounded quickly, considering I've solved
thousands of problems in the past.

I also gained experience through cp-tool in scripting and automation using
Python, and the benefits and drawbacks of using an existing library like
argparse.
