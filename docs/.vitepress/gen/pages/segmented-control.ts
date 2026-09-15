import { Generator } from "../Generator";

export interface SegmentedItem {
  value?: string | number | boolean | undefined;
  label?: string;
  icon?: string;
  className?: string;
  active?: boolean;
}

export interface SegmentedOptions {
  className?: string;
  items?: SegmentedItem[];
  itemClassName?: string;
}

export const segmentedItems: SegmentedItem[] = [
  {
    label: "Day",
    active: true,
  },
  {
    label: "Week",
  },
  {
    label: "Month",
  },
];
class SegmentedControlGenerator extends Generator {
  constructor() {
    super("components/segmented-control.md", {
      icon: "bi-toggle-on",
      // order: 20,
    });
  }

  async segmented(options: SegmentedOptions = {}): Promise<string> {
    const {
      className = undefined,
      items = segmentedItems,
      itemClassName = undefined,
    } = options;
    const classes = this.cssClasses("segmented-control", className);
    const itemClasses = this.cssClasses(
      "segmented-control-item",
      itemClassName,
    );
    return await this.html(`
      <div class="${classes}">
      ${await this.contents(
        items.map(async (item) => {
          const iClasses = this.cssClasses(
            "segmented-control-item",
            { "flex items-center gap-1.5": item.icon, active: item.active },
            itemClasses,
          );
          return await this.html(`
          <button type="button" class="${iClasses}">
          ${item.icon ? `<i class="${item.icon}"></i>` : ""}
          ${item.icon ? `<span>${item.label}</span>` : ""}
          ${!item.icon ? item.label : ""}
          </button>`);
        }),
      )}
      </div>
      `);
  }

  async scripts(): Promise<string[]> {
    return [
      await this.html(`<script setup>
import { ref } from "vue";
const view = ref("grid");
const segmentedOptions = [ 
    { label: "Grid", value: "grid" },
    { label: "List", value: "list" },
    { label: "Table", value: "table" }, 
];
</script>`),
    ];
  }
  async segmentedVue() {
    return await this.html(
      `<SegmentedControl v-model="view" :options="segmentedOptions" />`,
    );
  }
  async content(): Promise<string[]> {
    return [
      this.h2("Basic usage"),
      await this.codePreview(await this.segmented()),

      this.h2("Vue"),
      await this.segmentedVue(),
    ];
  }
}

new SegmentedControlGenerator().generate();
