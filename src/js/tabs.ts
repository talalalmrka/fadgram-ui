export interface TabsOptions {
  rootSelector?: string;
  tabSelector?: string;
  panelSelector?: string;
}

class Tabs {
  private readonly root: HTMLElement;
  private readonly options: Required<TabsOptions>;

  constructor(root: HTMLElement, options: TabsOptions = {}) {
    this.root = root;

    this.options = {
      rootSelector: options.rootSelector ?? ".tabs",
      tabSelector: options.tabSelector ?? '[role="tab"]',
      panelSelector: options.panelSelector ?? '[role="tabpanel"]',
    };

    this.init();
  }

  private init(): void {
    this.root.addEventListener("click", this.handleClick);
    this.root.addEventListener("keydown", this.handleKeydown);

    const selectedTab = this.root.querySelector<HTMLElement>(
      `${this.options.tabSelector}[aria-selected="true"]`,
    );

    if (selectedTab) {
      this.activate(selectedTab, false);
    }
  }

  private handleClick = (event: Event): void => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const tab = target.closest<HTMLElement>(this.options.tabSelector);

    if (!tab || !this.root.contains(tab)) {
      return;
    }

    this.activate(tab);
  };

  private handleKeydown = (event: KeyboardEvent): void => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const tab = target.closest<HTMLElement>(this.options.tabSelector);

    if (!tab || !this.root.contains(tab)) {
      return;
    }

    const tabs = Array.from(
      this.root.querySelectorAll<HTMLElement>(this.options.tabSelector),
    );

    const index = tabs.indexOf(tab);

    if (index === -1) {
      return;
    }

    let nextIndex: number | null = null;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = (index + 1) % tabs.length;
        break;

      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = (index - 1 + tabs.length) % tabs.length;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = tabs.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();

    const nextTab = tabs[nextIndex];

    nextTab.focus();
    this.activate(nextTab);
  };

  private activate(tab: HTMLElement, focus = true): void {
    const tabs = this.root.querySelectorAll<HTMLElement>(
      this.options.tabSelector,
    );

    tabs.forEach((item) => {
      const selected = item === tab;

      item.setAttribute("aria-selected", String(selected));
      item.setAttribute("tabindex", selected ? "0" : "-1");

      const panelId = item.getAttribute("aria-controls");

      if (!panelId) {
        return;
      }

      const panel = this.root.querySelector<HTMLElement>(
        `#${CSS.escape(panelId)}`,
      );

      if (!panel) {
        return;
      }

      panel.setAttribute("aria-hidden", String(!selected));
    });

    if (focus) {
      tab.focus();
    }
  }
}

export function tabs(
  root: string | HTMLElement = ".tabs",
  options: TabsOptions = {},
): Tabs | Tabs[] {
  const elements =
    typeof root === "string"
      ? document.querySelectorAll<HTMLElement>(root)
      : [root];
  console.log("Tabs", elements);
  const instances = Array.from(elements).map(
    (element) => new Tabs(element, options),
  );

  return instances.length === 1 ? instances[0] : instances;
}

export default tabs;
