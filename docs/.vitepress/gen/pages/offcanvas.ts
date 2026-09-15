import { Generator } from "../Generator";
import { colors, offcanvasPositions, strTitle } from "../helpers.js";
interface OffcanvasOptions {
  id?: string;
  color?: string;
  position?: string;
  className?: string;
}
class OffcanvasGenerator extends Generator {
  constructor() {
    super("components/offcanvas.md", {
      icon: "bi-layout-sidebar-inset",
      // order: 18,
    });
  }

  async offcanvas(options: OffcanvasOptions = {}): Promise<string> {
    const {
      id = undefined,
      color = undefined,
      position = undefined,
      className = undefined,
    } = options;
    const offcanvasId =
      id ?? ["offcanvas", color, position].filter(Boolean).join("-");
    const colorClass = color ? `offcanvas-${color}` : "";
    const positionClass = position ? `offcanvas-${position}` : "";
    const buttonClasses = this.cssClasses(
      "btn",
      color ? `btn-${color}` : "",
      !color ? "btn-primary" : "",
    );

    const classes = this.cssClasses(
      "offcanvas",
      colorClass,
      positionClass,
      className,
    );
    return await this.html(`
        <button type="button" class="${buttonClasses}" data-fg-toggle="offcanvas" data-fg-target="#${offcanvasId}">
        ${strTitle(offcanvasId)}
        </button>
        <div class="${classes}" id="${offcanvasId}">
    <div class="offcanvas-header">
        <h3 class="offcanvas-title">FadgramUi</h3>
        <button class="offcanvas-close">
            <i class="icon bi-x-lg"></i>
        </button>
    </div>
    <div class="offcanvas-body">
        <div class="nav vertical">
            <a href="#!" class="nav-link active">
                <i class="icon bi-house-fill "></i> <span>Home</span>
            </a>
            <a href="#!" class="nav-link">
                <i class="icon bi-newspaper "></i> <span>Blog</span>
            </a>
            <a href="#!" class="nav-link">
                <i class="icon bi-palette-fill "></i> <span>Design</span>
            </a>
            <a href="#!" class="nav-link">
                <i class="icon bi-info "></i> <span>About us</span>
            </a>
            <a href="#!" class="nav-link">
                <i class="icon bi-shield-fill-check "></i> <span>Privacy policy</span>
            </a>
        </div>
    </div>
</div>`);
  }

  async content(): Promise<string[]> {
    return [
      this.h2("Basic usage"),
      await this.codePreview(await this.offcanvas({ id: "basic-offcanvas" })),

      this.h2("Offcanvas color"),

      await this.contents(
        colors.map(
          async (color) =>
            await this.contents([
              this.h3(`Offcanvas ${color}`),
              await this.codePreview(await this.offcanvas({ color: color })),
            ]),
        ),
      ),

      this.h2("Offcanvas position"),

      await this.contents(
        offcanvasPositions.map(
          async (position) =>
            await this.contents([
              this.h3(`Offcanvas ${position}`),
              await this.codePreview(
                await this.offcanvas({ position: position }),
              ),
            ]),
        ),
      ),

      this.h2("Offcanvas expand"),
      await this.info(
        "Expand offcanvas with responsive breakponts (sm, md, lg, xl)",
      ),
      await this.contents(
        ["sm", "md", "lg", "xl"].map(
          async (breakpoint) =>
            await this.contents([
              this.h3(`Offcanvas expand ${breakpoint}`),
              await this.codePreview(
                await this.offcanvas({
                  className: `offcanvas-expand-${breakpoint}`,
                }),
              ),
            ]),
        ),
      ),
    ];
  }
}

new OffcanvasGenerator().generate();
