import { Generator, CodeOptions } from "../Generator";

class StoryboardGenerator extends Generator {
  constructor() {
    super("storyboard.md");
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
  async storyboard(raw: string, options: CodeOptions = {}): Promise<string> {
    const { language = "html", parser: customParser } = options;

    const parser = customParser ?? this.parserFromLanguage(language);

    const formatted = await this.format(raw, parser);
    const out = ["::: storyboard", formatted.trim(), ":::"].join("\n");

    return await this.md(out);
  }
  async content(): Promise<string[]> {
    return [this.h2("Navbar"), await this.storyboard(await this.navbar())];
  }
}

new StoryboardGenerator().generate();
