import React from 'react';
import Window from '../../Window';
import { CodeBlock, zenburn } from 'react-code-blocks'

interface SynthScriptWindowProps {
    onClose: () => void;
    onClick: () => void;
    zIndex: number;
    focused: boolean;
}

const SynthScriptWindow: React.FC<SynthScriptWindowProps> = (props) => {
    const wordsInFileSample = `count_words_in_file <- function(file_path) {
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

output(count_words_in_file("example_file.txt"))`
    const equalsSample = `a <- 2
output(a = 2) # true`;
    const loopSample = `for i in 1..5 {
    output(i)
}`;

    return (
        <Window title="SynthScript" windowWidth={1000} windowHeight={700} {...props}>
            <div>
                <h1>SynthScript</h1>
                <h3>The Human-Centric Scripting Language</h3>
                <h4>
                    <a className="link" href="https://github.com/smntic/SynthScript">GitHub Repository</a>
                </h4>
                <p>
                    <strong>SynthScript</strong> is a dynamically-typed, interpreted scripting language designed from the ground up to utilize intuitive syntax and accessible built-in functions, including capabilities for reading from and writing to files.
                </p>
                <p>
                    The language is implemented in C++ without relying on external libraries like Yacc or Bison. It employs a polymorphic approach to dynamic typing, utilizing an <code>std::map</code> for the symbol table to store variables and functions. The abstract syntax tree is constructed recursively, leveraging polymorphism to define classes for the tree nodes.
                </p>
                <p>
                    Various design decisions were made to enhance intuitiveness. For example, the assignment operator is represented by an arrow (←), allowing the comparison operator to use a single equals sign (=):
                </p>
                <CodeBlock text={equalsSample} language="R" theme={zenburn} />
                <p>
                    Additionally, SynthScript simplifies loop syntax by adopting a Python-like approach with a more intuitive <code>range</code> operator:
                </p>
                <CodeBlock text={loopSample} language="R" theme={zenburn} />
                <p>
                    Below is an example of a program written in SynthScript that counts the number of words in a file:
                </p>
                <CodeBlock text={wordsInFileSample} language="R" theme={zenburn} />
                <p>
                    SynthScript also includes testing using <b>doctest</b>. This was a significant improvement to the stability of the language, as it caught many bugs that appeared during early development.
                    It uses <b>GitHub Actions</b> for continuous integration, which automatically runs the test suite on a gamut of compilation environments for every push to the repository.
                </p>
                <p>
                    The project is unlikely to be maintained at this point, since the language is not intended for practical use. However, it was a valuable learning experience in language design and implementation, and I practiced my testing skills by writing a comprehensive test suite.
                </p>
            </div>
        </Window>
    );
}

export default SynthScriptWindow;
