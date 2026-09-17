import type { Alpine as AlpineType } from "alpinejs";

interface AccordionStore {
  activeItems: Set<string>;

  toggle(id: string, multiple?: boolean): void;

  isOpen(id: string): boolean;
}

interface AccordionComponent {
  readonly store: AccordionStore;

  toggleItem(id: string): void;

  isOpen(id: string): boolean;
}

declare global {
  interface HTMLElement {
    _accordionId?: string;
  }
}

export default function (Alpine: AlpineType): void {
  Alpine.store("accordion", {
    activeItems: new Set<string>(),

    toggle(id: string, multiple = false): void {
      if (multiple) {
        this.activeItems.has(id)
          ? this.activeItems.delete(id)
          : this.activeItems.add(id);

        return;
      }

      this.activeItems = this.activeItems.has(id)
        ? new Set<string>()
        : new Set<string>([id]);
    },

    isOpen(id: string): boolean {
      return this.activeItems.has(id);
    },
  } satisfies AccordionStore);

  Alpine.directive(
    "accordion",
    (el, { modifiers, expression }, { evaluate }) => {
      const config = Object.assign(
        {
          multiple: modifiers.includes("multiple"),
        },
        evaluate(expression || "{}"),
      ) as {
        multiple: boolean;
      };

      Alpine.bind(el, () => ({
        "x-data"(): AccordionComponent {
          return {
            get store(): AccordionStore {
              return Alpine.store("accordion") as AccordionStore;
            },

            toggleItem(id: string): void {
              this.store.toggle(id, config.multiple);
            },

            isOpen(id: string): boolean {
              return this.store.isOpen(id);
            },
          };
        },

        ":class"(): string {
          return "accordion";
        },
      }));
    },
  );

  Alpine.directive("accordion-item", (el, { expression }) => {
    const id =
      expression ||
      (el.closest("[data-accordion-id]") as HTMLElement | null)?._accordionId ||
      crypto.randomUUID();

    el.setAttribute("data-accordion-id", id);
    (el as HTMLElement)._accordionId = id;

    Alpine.bind(el, () => ({
      ":class"(): Record<string, boolean> {
        return {
          "accordion-item": true,
          active: this.isOpen(id),
        };
      },
    }));
  });

  Alpine.directive("accordion-header", (el, { expression }) => {
    const parent = el.closest("[data-accordion-id]") as HTMLElement | null;
    const id = expression || parent?._accordionId;

    if (!id) {
      return;
    }

    el.setAttribute("tabindex", "0");
    el.setAttribute("role", "button");
    el.setAttribute("aria-controls", `accordion-body-${id}`);
    el.id = `accordion-header-${id}`;

    Alpine.bind(el, () => ({
      "x-init"(): void {
        // Initialize the accordion header.
      },

      "x-on:click"(): void {
        this.toggleItem(id);
      },

      ":class"(): string {
        return "accordion-header";
      },
    }));
  });

  Alpine.directive("accordion-body", (el, { expression }) => {
    const parent = el.closest("[data-accordion-id]") as HTMLElement | null;
    const id = expression || parent?._accordionId;

    if (!id) {
      return;
    }

    el.id = `accordion-body-${id}`;
    el.setAttribute("role", "region");
    el.setAttribute("aria-labelledby", `accordion-header-${id}`);

    Alpine.bind(el, () => ({
      "x-show"(): boolean {
        return this.isOpen(id);
      },

      "x-transition:enter"(): string {
        return "transition-all ease-out duration-300";
      },

      "x-transition:enter-start"(): string {
        return "opacity-0 max-h-0";
      },

      "x-transition:enter-end"(): string {
        return "opacity-100 max-h-screen";
      },

      "x-transition:leave"(): string {
        return "transition-all ease-in duration-200";
      },

      "x-transition:leave-start"(): string {
        return "opacity-100 max-h-screen";
      },

      "x-transition:leave-end"(): string {
        return "opacity-0 max-h-0";
      },

      ":class"(): string {
        return "accordion-body";
      },
    }));
  });
}
