---
sidebar_position: 1
---

# Brief History

## AI is a Tool
[AI-assisted coding](https://github.com/resources/articles/ai/what-is-ai-code-generation) began with tools like [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense), which provided code suggestions and [autocompletions](https://en.wikipedia.org/wiki/Code_completion). AI coding assistants are an advanced evolution of this technology, converting human language into code. However, we must remember that AI assistants are just tools, **not autonomous entities capable of reasoning like humans**.

Programming has evolved from binary code to high-level languages like C++ and Python, improving accessibility. Yet, even in structured languages, humans frequently introduce errors like [buffer overflows](https://en.wikipedia.org/wiki/Buffer_overflow), [Race Conditions](https://en.wikipedia.org/wiki/Race_condition) and [logic bugs](https://en.wikipedia.org/wiki/Logic_error).

Natural language code generation increases accessibility—but also risks, as AI **interprets human language**, which is inherently vague.

### Not smarter than it's creator
:::note[Important]
AI recognizes patterns, not meaning (true understanding). To avoid errors, be as specific as possible when prompting
:::

This is why we must stay vigilant and **be as specific as possible** when generating code or writing [prompt](https://en.wikipedia.org/wiki/Prompt_engineering). Let’s look at some real-world examples where AI-generated code led to unintended outcome.

## Examples of AI-Generated Code Mistakes

### 1) AI-generated regex

- You prompt to generate a regex pattern to validate emails.
- It produces a pattern that seems correct but **rejects valid emails** (e.g., john.doe@email.travel) or **allows invalid ones** (user@com).
  :::note[Lesson]
  AI can generate code, but **validation and testing are your responsibility**.
  :::

### 2) AI needs context

- You prompt: _"Write a function to find prime numbers in Python."_
- It generates a function that works but is inefficient (O(n) instead of O(√n)).
  :::note[Lesson]
  AI often generates functional but non-optimized solutions unless **specifically prompted for efficiency**.
  :::


:::danger[Takeaway]
Would the generated code be secure or follow [SOLID](https://en.wikipedia.org/wiki/SOLID) and [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) principles if you didn’t explicitly ask for it?
:::