---
layout: project
title: SynthScript
description: >
  A dynamically-typed interpreted scripting language
  designed for human-readable syntax.
start_date: 2023-12-01
end_date: 2024-10-01
---

SynthScript is a dynamically-typed interpreted scripting language designed to be
read by humans. It interfaces with the user's computer through built-in
functions such as `input`, `output`, `read`, and `write`.

All core components were implemented from scratch in C++, including:

- A lexer built using custom regular expressions
- A recursive descent parser to construct the AST
- A semantic analysis visitor to analyze the AST for compile-time typing checking
- An interpreter visitor to execute code from the AST

The language is no longer actively maintained, though I returned in late 2024
to add integration tests and fix several bugs.

## Language Design

SynthScript's syntax is intentionally simple and avoids some common points of
confusion in other languages. For example, assignment uses `a <- b` rather than
`a = b`, allowing `a = b` to be used for comparison. Also, fucntions are
treated as data and assigned to variables similarly to lambda expressions in
other languages.

Here is an example program to count the number of words in a text file:

<!-- using python for highlighting, but this is actual SynthScript code -->
```python
count_words_in_file <- function(file_path) {
    file_text <- read(file_path)
    current_word <- ""
    word_count <- 0
    for ch in file_text {
        if ch = " " {
            if len(current_word) > 0 {
                word_count <- word_count + 1
                current_word <- ""
            }
        } else {
            current_word <- current_word + ch
        }
    }
    if len(current_word) > 0 {
        word_count <- word_count + 1
    }

    return word_count
}

output(count_words_in_file("example_file.txt"))
```

The overall goal was to create a simple scripting language that reads
naturally.

## Motivation

SynthScript was created as my capstone project for a high school careers class.
I wanted to work on a challenging project and creating my own programming
language seemed like the most interesting idea.

I structured the project into three phases:

1. Learning about programming language design and studying existing languages
2. Building a simple C-style language as a proof-of-concept and writing a
   [public guide on Medium](https://medium.com/@simonashton37/laymans-guide-to-making-a-programing-language-1be808d38bab)
   to share my knowledge
3. Applying that learning to design and implement SynthScript

## Challenges

One of the main technical challenges was managing memory in C++. I initially
struggled with raw pointers, but chose to resolve many issues using smart
pointers. While I generally consider heavy use of smart pointers to be
indicative of a larger problem, they proved to be an effective solution for
SynthScript.

The final presentation was also a challenge. One of my previous technical
presentations went poorly, so I made a better effort to tailor the material to
my non-technical audience this time.

## What I Learned

Through SynthScript, I gained a strong foundation in programming language
design. Understanding how code is processed by a language has made it
significantly easier for me to learn new languages and reason about code
behavior.

I plan to extend this learning further through *CMPT 379: Principles of
Compiler Design*, where I create a compiled language with code generation and
optimization.
