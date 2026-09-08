import { Generator } from "../Generator";
import { colors } from "../helpers";

export class NavbarGenerator extends Generator {
  constructor() {
    super("navbar.md", {
      outline: 2,
    });
  }

  async navbar(className?: string): Promise<string> {
    const classes = this.cssClasses("navbar h-14", className);
    return await this.html(`<div class="${classes}">
    <button class="navbar-toggle">
        <i class="bi-list"></i>
    </button>
    <a title="FadgramUi" href="/" class="navbar-brand">
        <img src="/images/logo.svg" style="width: 35px;">
    </a>
    <div class="nav navbar-nav navbar-collapse expand-md">
        <a href="/home" class="nav-link active">
            <i class="icon bi-house-fill"></i>
            <span>Home</span>
        </a>
        <a href="/blog" class="nav-link">
            <i class="icon bi-newspaper"></i>
            <span>Blog</span>
        </a>
        <a href="/about-us" class="nav-link">
            <i class="icon bi-info"></i>
            <span>About us</span>
        </a>
        <a href="/privacy-policy" class="nav-link">
            <i class="icon bi-shield-fill-check"></i>
            <span>Privacy policy</span>
        </a>
    </div>
    <div class="nav">
        <button type="button" class="nav-link dark-mode-toggle">
            <i class="bi-sun-fill"></i>
        </button>
        <div class="dropdown">
            <button type="button" class="nav-link dropdown-toggle">
                <i class="icon bi-person-fill"></i>
                <i class="icon bi-chevron-down w-3 h-3"></i>
            </button>
            <div class="dropdown-menu dropdown-end w-40">
                <a href="/login" class="dropdown-link">
                    <i class="icon bi-box-arrow-in-right"></i>
                    <span>Sign in</span>
                </a>
                <a href="/register" class="dropdown-link">
                    <i class="icon bi-person-plus"></i>
                    <span>Sign up</span>
                </a>
            </div>
        </div>
    </div>
</div>`);
  }

  async transparentNavPreview(className?: string): Promise<string> {
    const navbarContent = await this.navbar(
      this.cssClasses("navbar-transparent-top", className),
    );
    return await this.md(
      [
        "::: tabs",
        "== Preview",
        await this.contents([
          `<CodeFrame>`,
          navbarContent,
          await this.contents(
            this.range(0, 6).map(
              (num) =>
                `<div class="bg-gray-200 dark:bg-gray-700 h-40 rounded mb-3"></div>`,
            ),
          ),
          `</CodeFrame>`,
        ]),
        "== Code",
        await this.code(navbarContent),
        ":::",
      ].join("\n"),
    );
  }

  async content(): Promise<string[]> {
    return [
      this.h2("Basic usage"),
      await this.codePreview(await this.navbar()),

      this.h2("Navbar color"),
      await this.contents(
        colors.map(
          async (color) =>
            await this.contents([
              this.h3(this.ucfirst(`.navbar-${color}`)),
              await this.codePreview(await this.navbar(`navbar-${color}`)),
            ]),
        ),
      ),

      this.h2("Transparent top navbar"),
      this.h3("Basic usage"),
      await this.transparentNavPreview("navbar-transparent-primary"),
      // await this.transparentNavPreview(),
      // await this.code(await this.srcDoc()),

      //   this.h3("Colors"),
      //   await this.contents(
      //     colors.map(
      //       async (color) =>
      //         await this.contents([
      //           this.h3(this.ucfirst(`.navbar-transparent-${color}`)),
      //           await this.codePreview(
      //             await this.navbar(
      //               `navbar-transparent-top navbar-transparent-${color}`,
      //             ),
      //           ),
      //         ]),
      //     ),
      //   ),

      //   this.h2("Frame"),
      //   await this.html(
      //     `<frameset>${await this.navbar("navbar-transparent-top navbar-transparent-primary")}</frameset>`,
      //   ),
    ];
  }
}

new NavbarGenerator().generate();
