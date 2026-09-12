import {
  type ToastType,
  type ToastPosition,
  type ToastSize,
  type ToastOptions,
  toastTypes,
  toastPositions,
  toastSizes,
} from "@js/toast";
import { Generator } from "../Generator";
import { strTitle } from "../helpers";

interface ToastButtonOptions {
  label?: string;
  content?: string;
  className?: string;
  options?: ToastOptions;
}

interface TabItem {
  title: string;
  content: string;
}

interface TabsOptions {
  variant?: string;
  key?: string;
}

class ToastGenerator extends Generator {
  constructor() {
    super("toast.md");
  }

  usage() {
    return `
import Toast from "fadgram-ui";

// make
Toast.make(
  "Toast message",
  {
    type: "success",
    position: "top-end",
  }
);

// success
Toast.success("This is success toast");

// info
Toast.info("This is info toast");

// warning
Toast.warning("This is warning toast");

// error
Toast.error("This is error toast");
`;
  }

  toastCall(content: string = "This is toast.", options: ToastOptions) {
    const optionsString = Object.entries(options)
      .map(([key, value]) => {
        if (typeof value === "string") {
          return `${key}: '${value}'`;
        }

        return `${key}: ${JSON.stringify(value)}`;
      })
      .join(", ");

    return optionsString
      ? `Toast.make('${content}', { ${optionsString} })`
      : `Toast.make('${content}')`;
  }

  toastButton(options: ToastButtonOptions = {}) {
    const {
      label = "Show toast",
      content = "This toast.",
      className = "btn-primary",
      options: toastOptions = {},
    } = options;

    const classes = this.cssClasses("btn", className);
    const call = this.toastCall(content, toastOptions);
    return `<button type="button" class="${classes}" onclick="${call}">${label}</button>`;
  }

  async toastTypeButtons(className?: string) {
    return await this.html(`
      <div class="${this.cssClasses(
        "flex flex-wrap items-baseline gap-3",
        className,
      )}">
        ${await this.contents(
          toastTypes.map((type: ToastType) =>
            this.toastButton({
              label: `Toast ${type}`,
              content: `This is toast ${type}.`,
              className: `btn-${type}`,
              options: {
                type,
              },
            }),
          ),
        )}
      </div>
    `);
  }

  async toastPositionButtons(className?: string) {
    return await this.html(`
      <div class="${this.cssClasses(
        "flex flex-wrap items-baseline gap-3",
        className,
      )}">
        ${await this.contents(
          toastPositions.map((position: ToastPosition) =>
            this.toastButton({
              label: `Toast ${position}`,
              content: `This is toast ${position}.`,
              className: "btn-primary",
              options: {
                position,
              },
            }),
          ),
        )}
      </div>
    `);
  }

  async toastSizeButtons(className?: string) {
    return await this.html(`
      <div class="${this.cssClasses(
        "flex flex-wrap items-baseline gap-3",
        className,
      )}">
        ${await this.contents(
          toastSizes.map((size: ToastSize) =>
            this.toastButton({
              label: `Toast ${size}`,
              content: `This is toast ${size}.`,
              className: "btn-primary",
              options: {
                size,
              },
            }),
          ),
        )}
      </div>
    `);
  }

  async mdTabs(tabs: TabItem[], options: TabsOptions = {}): Promise<string> {
    const start = Object.entries(options)
      .map(([key, value]) => {
        if (typeof value === "string") {
          return `${key}:${value}`;
        }
        return false;
      })
      .filter(Boolean)
      .join(" ");

    return await this.md(
      [
        `::: tabs ${start}`,
        ...tabs.map((tab: TabItem) =>
          [`== ${tab.title}`, tab.content].join("\n"),
        ),
        ":::",
      ].join("\n"),
    );
  }

  async toastOptionsPreview(options: ToastOptions) {
    const optionKey = Object.keys(options)[0];
    const optionValue = Object.values(options)[0];
    const label = ["Toast", optionKey, optionValue].filter(Boolean).join(" ");
    const content = ["This is toast", optionKey, optionValue]
      .filter(Boolean)
      .join(" ");
    return await this.contents([
      this.h3(strTitle(optionKey)),
      await this.mdTabs(
        [
          {
            title: "Preview",
            content: this.toastButton({ label: label, options: options }),
          },
          {
            title: "ts",
            content: await this.code(this.toastCall(content, options), {
              language: "ts",
            }),
          },
        ],
        { variant: "code" },
      ),
    ]);
  }
  async content(): Promise<string[]> {
    return [
      this.h2("Basic usage"),
      await this.code(this.usage(), {
        language: "js",
        parser: "babel",
      }),

      this.h2("Toast options"),

      this.h3("Toast type"),
      await this.toastTypeButtons(),

      this.h3("Toast position"),
      await this.toastPositionButtons(),

      this.h3("Toast size"),
      await this.toastSizeButtons(),

      await this.toastOptionsPreview({ duration: 8000 }),

      await this.toastOptionsPreview({ showCloseButton: false }),

      await this.toastOptionsPreview({ showProgress: false }),

      await this.toastOptionsPreview({ pauseOnHover: false }),

      this.h2("Toast options api"),
      await this.include("../src/js/toast.ts", "ts"),
    ];
  }
}

new ToastGenerator().generate();
