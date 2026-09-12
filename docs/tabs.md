---
outline: deep
title: Tabs
---

# Tabs

## Basic usage

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

## Tabs underline

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-underline">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-underline">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

## Tabs pills

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-pills">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-pills">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

## Tabs fill

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-fill">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-fill">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

## Tabs color

### Tabs primary

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-primary">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-primary">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs secondary

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-secondary">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-secondary">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs light

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-light">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-light">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs dark

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-dark">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-dark">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs red

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-red">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-red">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs orange

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-orange">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-orange">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs amber

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-amber">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-amber">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs yellow

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-yellow">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-yellow">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs lime

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-lime">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-lime">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs green

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-green">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-green">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs emerald

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-emerald">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-emerald">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs teal

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-teal">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-teal">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs cyan

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-cyan">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-cyan">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs sky

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-sky">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-sky">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs blue

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-blue">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-blue">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs indigo

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-indigo">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-indigo">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs violet

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-violet">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-violet">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs purple

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-purple">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-purple">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs fuchsia

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-fuchsia">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-fuchsia">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs pink

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-pink">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-pink">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs rose

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-rose">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-rose">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs slate

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-slate">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-slate">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs gray

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-gray">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-gray">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs zinc

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-zinc">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-zinc">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs neutral

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-neutral">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-neutral">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::

### Tabs stone

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="tabs tabs-stone">
    <div class="tabs-list" role="tablist" aria-label="Chat GPT">
      <button
        id="tab-chat-gpt"
        type="button"
        class="tab"
        role="tab"
        aria-selected="true"
        aria-controls="panel-chat-gpt"
        tab-index="-1"
      >
        Chat GPT
      </button>
      <button
        id="tab-deepseek"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-deepseek"
      >
        DeepSeek
      </button>
      <button
        id="tab-copilot"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-copilot"
      >
        Copilot
      </button>
      <button
        id="tab-gemini"
        type="button"
        class="tab"
        role="tab"
        aria-selected="false"
        aria-controls="panel-gemini"
      >
        Gemini
      </button>
    </div>
    <div class="tabs-content">
      <div
        id="panel-chat-gpt"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-chat-gpt"
        aria-hidden="false"
        tab-index="0"
      >
        ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
        interactions, offering versatile responses for tasks like answering
        queries, creative writing, and problem-solving. Its GPT architecture
        enables human-like dialogue, widely used for education, content
        creation, and customer support.
      </div>
      <div
        id="panel-deepseek"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-deepseek"
        aria-hidden="true"
        tab-index="0"
      >
        DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
        research with practical applications in healthcare, finance, and
        education. It emphasizes efficiency and accuracy, leveraging large-scale
        data to refine industry-specific solutions.
      </div>
      <div
        id="panel-copilot"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-copilot"
        aria-hidden="true"
        tab-index="0"
      >
        Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
        environments to auto-suggest code snippets, debug errors, and streamline
        development. Trained on public repositories, it accelerates programming
        workflows while adapting to user styles.
      </div>
      <div
        id="panel-gemini"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-gemini"
        aria-hidden="true"
        tab-index="0"
      >
        Gemini: Google’s multimodal AI, Gemini processes text, images, and data
        for complex tasks like analytics and creative projects. It emphasizes
        seamless integration across formats, enhancing productivity in research,
        design, and decision-making.
      </div>
    </div>
  </div>
</div>

== HTML

```html
<div class="tabs tabs-stone">
  <div class="tabs-list" role="tablist" aria-label="Chat GPT">
    <button
      id="tab-chat-gpt"
      type="button"
      class="tab"
      role="tab"
      aria-selected="true"
      aria-controls="panel-chat-gpt"
      tab-index="-1"
    >
      Chat GPT
    </button>
    <button
      id="tab-deepseek"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-deepseek"
    >
      DeepSeek
    </button>
    <button
      id="tab-copilot"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-copilot"
    >
      Copilot
    </button>
    <button
      id="tab-gemini"
      type="button"
      class="tab"
      role="tab"
      aria-selected="false"
      aria-controls="panel-gemini"
    >
      Gemini
    </button>
  </div>
  <div class="tabs-content">
    <div
      id="panel-chat-gpt"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-chat-gpt"
      aria-hidden="false"
      tab-index="0"
    >
      ChatGPT: Developed by OpenAI, ChatGPT excels in natural language
      interactions, offering versatile responses for tasks like answering
      queries, creative writing, and problem-solving. Its GPT architecture
      enables human-like dialogue, widely used for education, content creation,
      and customer support.
    </div>
    <div
      id="panel-deepseek"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-deepseek"
      aria-hidden="true"
      tab-index="0"
    >
      DeepSeek: A Chinese AI model focused on advancing AGI, DeepSeek balances
      research with practical applications in healthcare, finance, and
      education. It emphasizes efficiency and accuracy, leveraging large-scale
      data to refine industry-specific solutions.
    </div>
    <div
      id="panel-copilot"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-copilot"
      aria-hidden="true"
      tab-index="0"
    >
      Copilot: Powered by GitHub and Microsoft, Copilot integrates with coding
      environments to auto-suggest code snippets, debug errors, and streamline
      development. Trained on public repositories, it accelerates programming
      workflows while adapting to user styles.
    </div>
    <div
      id="panel-gemini"
      class="tab-panel"
      role="tabpanel"
      aria-labelledby="tab-gemini"
      aria-hidden="true"
      tab-index="0"
    >
      Gemini: Google’s multimodal AI, Gemini processes text, images, and data
      for complex tasks like analytics and creative projects. It emphasizes
      seamless integration across formats, enhancing productivity in research,
      design, and decision-making.
    </div>
  </div>
</div>
```

:::
