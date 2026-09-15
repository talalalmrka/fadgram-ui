import { Generator } from "../Generator";
import { colors } from "../helpers";
interface OverviewCardOptions {
  title?: string;
  number?: number | string;
  icon?: string;
  className?: string;
}
class OverviewCardGenerator extends Generator {
  constructor() {
    super("components/overview-card.md", {
      icon: "bi-postcard-heart-fill",
      // order: 12,
    });
  }

  overViewCards(fill?: boolean): OverviewCardOptions[] {
    return [
      {
        title: "Users",
        number: 30,
        icon: "bi-people",
        className: fill ? "overview-card-fill-blue" : "overview-card-blue",
      },
      {
        title: "Products",
        number: 300,
        icon: "bi-bag-fill",
        className: fill ? "overview-card-fill-green" : "overview-card-green",
      },
      {
        title: "Views",
        number: "13.6k",
        icon: "bi-eye-fill",
        className: fill ? "overview-card-fill-cyan" : "overview-card-cyan",
      },
      {
        title: "Alerts",
        number: "22",
        icon: "bi-shield-fill-exclamation",
        className: fill ? "overview-card-fill-red" : "overview-card-red",
      },
    ];
  }

  async overviewCard({
    title = "Users",
    number = 30,
    icon = "bi-people",
    className = "",
  }: OverviewCardOptions = {}): Promise<string> {
    const cssClassName = className ? ` ${className}` : "";
    return await this.html(`
        <div class="overview-card ${cssClassName}">
            <div class="flex items-center justify-between">
                <div>
                    <div class="overview-card-title">${title}</div>
                    <div class="overview-card-number">${number}</div>
                </div>
                <div>
                    <i class="icon ${icon} overview-card-icon"></i>
                </div>
            </div>
        </div>
    `);
  }

  async overviewCardLayout(fill?: boolean, level: number = 4): Promise<string> {
    return await this.codePreview(
      await this.html(`
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      ${await this.contents(
        this.overViewCards(fill).map(
          async (overviewCard: OverviewCardOptions) =>
            await this.html(`
        <div class="col">
        ${await this.overviewCard(overviewCard)}
        </div>
        `),
        ),
      )}
      </div>
      `),
    );
  }

  async overviewCardColor(fill?: boolean, level: number = 4): Promise<string> {
    return await this.codePreview(
      await this.html(`
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      ${await this.contents(
        colors.map(
          async (color) =>
            await this.html(`
      <div class="col">
      ${await this.overviewCard({
        title: this.ucfirst(color),
        className: fill
          ? `overview-card-fill-${color}`
          : `overview-card-${color}`,
      })}
      </div>
      `),
        ),
      )}
      </div>
      `),
    );
  }
  async content(): Promise<string[]> {
    return [
      // Basic
      this.h2("Overview card (basic)"),
      await this.codePreview(
        await this.overviewCard({ className: "max-w-64" }),
      ),

      // Overview card color
      this.h3("Overview card color"),
      await this.overviewCardColor(),

      // Overview card layout
      this.h3("Overview card layout"),
      await this.overviewCardLayout(),

      // Fill
      this.h2("Overview card (fill)"),
      await this.codePreview(
        await this.overviewCard({
          className: "overview-card-fill-primary max-w-64",
        }),
      ),

      // Overview card fill color
      this.h3("Overview card fill color"),
      await this.overviewCardColor(true),

      // Overview card fill layout
      this.h3("Overview card fill layout"),
      await this.overviewCardLayout(true),
    ];
  }
}

new OverviewCardGenerator().generate();
