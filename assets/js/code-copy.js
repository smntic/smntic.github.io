document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre > code").forEach((codeBlock) => {
    const pre = codeBlock.parentElement;

    // Wrap <pre> in a container
    const wrapper = document.createElement("div");
    wrapper.className = "code-block-wrapper";

    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    // Create copy button
    const button = document.createElement("button");
    button.className = "copy-button";
    button.type = "button";
    button.innerText = "Copy";

    button.addEventListener("click", () => {
      navigator.clipboard.writeText(codeBlock.innerText).then(() => {
        button.innerText = "Copied!";

        if (button._resetTimeout) {
          clearTimeout(button._resetTimeout);
        }

        button._resetTimeout = setTimeout(() => {
          button.innerText = "Copy";
          button._resetTimeout = null;
        }, 1500);
      });
    });

    wrapper.appendChild(button);
  });
});
