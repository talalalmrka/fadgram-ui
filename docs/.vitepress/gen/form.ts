import { Generator } from "./Generator.ts";

class FormGenerator extends Generator {
  constructor() {
    super("form.md");
  }

  async labelAndInfo(): Promise<string> {
    return await this.html(
      await this.contents([
        '<label for="first_name" class="form-label">First name</label>',
        '<input id="first_name" type="text" class="form-control" placeholder="insert text first name...">',
        '<div class="form-info">first name info</div>',
      ]),
    );
  }

  async icons(start = false, end = false): Promise<string> {
    const inputClasses = [
      start && "has-start-icon",
      end && "has-end-icon",
    ].filter(Boolean);

    return this.html(
      await this.contents([
        '<div class="form-control-container">',

        start
          ? '<span class="start-icon"><i class="icon bi-person"></i></span>'
          : "",

        `<input type="text" class="form-control${
          inputClasses.length ? ` ${inputClasses.join(" ")}` : ""
        }" placeholder="username">`,

        end ? '<span class="end-icon"><i class="icon bi-copy"></i></span>' : "",

        "</div>",
      ]),
    );
  }

  async content(): Promise<string[]> {
    return [
      this.h2("Input"),

      this.h3("Preview"),
      await this.html(
        '<input type="text" class="form-control" placeholder="Username">',
      ),

      this.h3("Usage"),
      await this.source(
        '<input type="text" class="form-control" placeholder="Username">',
        "html",
        "html",
      ),

      this.h2("Label & Info"),

      this.h3("Preview"),

      await this.labelAndInfo(),

      this.h3("Usage"),
      await this.source(await this.labelAndInfo(), "html", "html"),

      this.h2("Icons"),

      this.h3("Start Icon"),

      this.h4("Preview"),
      await this.icons(true, false),

      this.h4("Usage"),
      await this.source(await this.icons(true, false), "html", "html"),

      this.h3("End Icon"),

      this.h4("Preview"),
      await this.icons(false, true),

      this.h4("Usage"),
      await this.source(await this.icons(false, true), "html", "html"),

      this.h3("Start & End Icons"),

      this.h4("Preview"),
      await this.icons(true, true),

      this.h4("Usage"),
      await this.source(await this.icons(true, true), "html", "html"),

      this.h2("Password Toggle"),

      this.h3("Preview"),
      await this.html(
        '<input type="password" class="form-control" placeholder="Insert password">',
      ),

      this.h3("Usage"),
      await this.source(
        '<input type="password" class="form-control" placeholder="Insert password">',
        "html",
        "html",
      ),
    ];
  }

  async contentt(): Promise<string[]> {
    return [
      this.h(2, "input"),
      this.h(3, "Preview"),
      '<input type="text" class="form-control" placeholder="Username">',
      this.h(3, "Usage:"),
      await this.source(
        '<input type="text" class="form-control" placeholder="Username">',
        "html",
        "html",
      ),
    ];
    /* return md(
      [
        this.h(2,"input"),
        this.h(3, "Preview"),
        '<input type="text" class="form-control" placeholder="Username">',
        this.h(3, "### Usage:"),
        sourceCode(
          '<input type="text" class="form-control" placeholder="Username">',
        ),

        "### Label & Info",
        "#### Preview",
        this.labelAndInfo(),
        "#### Usage:",
        sourceCode(this.labelAndInfo()),

        "### Icons",

        "#### Start Icon",
        "##### Preview",
        this.icons(true, false),
        "##### Usage:",
        sourceCode(this.icons(true, false)),

        "#### End Icon",
        "##### Preview",
        this.icons(false, true),
        "##### Usage:",
        sourceCode(this.icons(false, true)),

        "#### Start & End Icons",
        "##### Preview",
        this.icons(true, true),
        "##### Usage:",
        sourceCode(this.icons(true, true)),
        "### Password toggle",
        "#### Preview",
        '<input type="password" class="form-control" placeholder="Insert password">',
        '#### '

      ].join("\n\n"),
      "Form",
    ); */
  }
}

new FormGenerator().generate();
