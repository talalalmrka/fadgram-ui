---
outline: deep
title: Fg storyboard
---

# Fg storyboard

<script setup lang="ts">
const story0 = "<button type=\"button\" class=\"btn btn-primary\">Primary</button>\n<button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\n<button type=\"button\" class=\"btn btn-light\">Light</button>\n<button type=\"button\" class=\"btn btn-dark\">Dark</button>\n<button type=\"button\" class=\"btn btn-red\">Red</button>\n<button type=\"button\" class=\"btn btn-orange\">Orange</button>\n<button type=\"button\" class=\"btn btn-amber\">Amber</button>\n<button type=\"button\" class=\"btn btn-yellow\">Yellow</button>\n<button type=\"button\" class=\"btn btn-lime\">Lime</button>\n<button type=\"button\" class=\"btn btn-green\">Green</button>\n<button type=\"button\" class=\"btn btn-emerald\">Emerald</button>\n<button type=\"button\" class=\"btn btn-teal\">Teal</button>\n<button type=\"button\" class=\"btn btn-cyan\">Cyan</button>\n<button type=\"button\" class=\"btn btn-sky\">Sky</button>\n<button type=\"button\" class=\"btn btn-blue\">Blue</button>\n<button type=\"button\" class=\"btn btn-indigo\">Indigo</button>\n<button type=\"button\" class=\"btn btn-violet\">Violet</button>\n<button type=\"button\" class=\"btn btn-purple\">Purple</button>\n<button type=\"button\" class=\"btn btn-fuchsia\">Fuchsia</button>\n<button type=\"button\" class=\"btn btn-pink\">Pink</button>\n<button type=\"button\" class=\"btn btn-rose\">Rose</button>\n<button type=\"button\" class=\"btn btn-slate\">Slate</button>\n<button type=\"button\" class=\"btn btn-gray\">Gray</button>\n<button type=\"button\" class=\"btn btn-zinc\">Zinc</button>\n<button type=\"button\" class=\"btn btn-neutral\">Neutral</button>\n<button type=\"button\" class=\"btn btn-stone\">Stone</button>";
const story1 = "@import \"tailwindcss\";\n@import \"fadgram-ui\"; /* [!code ++]*/";
const story2 = "import { initFadgramUI } from \"fadgram-ui\";\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  initFadgramUI(); // [!code ++]\n  initFadgramUI(); // [!code --]\n});";
const story3 = "\nconsole.log('Not highlighted')\nconsole.log('Highlighted') // [!code highlight]\nconsole.log('Not highlighted')\n";
</script>

## Html Buttons

<FgStory lang="html">{{ story0 }}</FgStory>

## Css code

<FgStory lang="css">{{ story1 }}</FgStory>

## Typescript

<FgStory lang="ts">{{ story2 }}</FgStory>

## Typescript highlight

<FgStory lang="ts">{{ story3 }}</FgStory>
