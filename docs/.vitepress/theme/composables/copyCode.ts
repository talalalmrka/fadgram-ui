import { inBrowser } from "vitepress";

const shellLangs = ["shellscript", "shell", "bash", "sh", "zsh"];
const ignoredNodes = [".vp-copy-ignore", ".diff.remove"].join(", ");

export function useCopyCode() {
  if (inBrowser) {
    const timeoutIdMap: WeakMap<HTMLElement, number> = new WeakMap();
    window.addEventListener("click", (e) => {
      const el = e.target as HTMLElement;

      const btnCopy: HTMLElement | null = el.closest("button.copy");
      if (btnCopy) {
        const ic = btnCopy.querySelector("i");
        const parent = btnCopy.closest('div[class*="language-"]');
        const header = btnCopy.parentElement;
        if (!parent || !header) {
          return;
        }
        const sibling = header.nextElementSibling;
        if (!sibling) {
          return;
        }
        const clone = sibling.cloneNode(true) as HTMLElement;
        clone.querySelectorAll(ignoredNodes).forEach((node) => node.remove());
        // remove extra newlines left after removing ignored nodes (affecting textContent because it is inside `<pre>`)
        // doesn't affect the newlines already in the code because they are rendered as `\n<span class="line"></span>`
        clone.innerHTML = clone.innerHTML.replace(/\n+/g, "\n");

        let text = clone.textContent || "";

        // NOTE: Any changes to this the code here may also need to update
        // `transformerDisableShellSymbolSelect` in `src/node/markdown/plugins/highlight.ts`
        const lang = /language-(\w+)/.exec(parent.className)?.[1] || "";
        if (isShell(lang)) {
          text = text.replace(/^ *(\$|>) /gm, "").trim();
        }
        copyToClipboard(text).then(() => {
          btnCopy.classList.add("copied");
          toggleIcon(ic, true);
          clearTimeout(timeoutIdMap.get(btnCopy));
          const timeoutId = window.setTimeout(() => {
            btnCopy.classList.remove("copied");
            toggleIcon(ic, false);
            btnCopy.blur();
            timeoutIdMap.delete(btnCopy);
          }, 2000);
          timeoutIdMap.set(btnCopy, timeoutId);
        });
      }
    });
  }
}

function toggleIcon(icon: HTMLElement | null, copied: boolean) {
  if (icon) {
    if (copied) {
      icon.classList.add("bi-clipboard-check");
    } else {
      icon.classList.remove("bi-clipboard-check");
    }
  }
}

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;

    element.value = text;

    // Prevent keyboard from showing on mobile
    element.setAttribute("readonly", "");

    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.insetInlineStart = "-9999px";
    element.style.fontSize = "12pt"; // Prevent zooming on iOS

    const selection = document.getSelection();
    const originalRange = selection
      ? selection.rangeCount > 0 && selection.getRangeAt(0)
      : null;

    document.body.appendChild(element);
    element.select();

    // Explicit selection workaround for iOS
    element.selectionStart = 0;
    element.selectionEnd = text.length;

    document.execCommand("copy");
    document.body.removeChild(element);

    if (originalRange) {
      selection!.removeAllRanges(); // originalRange can't be truthy when selection is falsy
      selection!.addRange(originalRange);
    }

    // Get the focus back on the previously focused element, if any
    if (previouslyFocusedElement) {
      (previouslyFocusedElement as HTMLElement).focus();
    }
  }
}

export function isShell(lang: string): boolean {
  return shellLangs.includes(lang);
}
