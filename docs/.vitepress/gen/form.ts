import { Generator } from "./Generator.ts";

class FormGenerator extends Generator {
  constructor() {
    super("form.md");
  }

  labelAndInfo(): string {
    return [
      '<label for="first_name" class="form-label">First name</label>',
      '<input id="first_name" type="text" class="form-control" placeholder="insert text first name...">',
      '<div class="form-info">first name info</div>',
    ].join("\n");
  }

  icons(start: boolean, end: boolean): string {
    let inputClass = [
      start || end ? " " : "",
      start ? "has-start-icon" : "",
      end ? "has-end-icon" : "",
    ].join(" ");
    return [
      '<div class="form-control-container">',
      start
        ? '\t<span class="start-icon">\n\t\t<i class="icon bi-person"></i>\n\t</span>'
        : "",
      `\t<input type="text" class="form-control${inputClass}" placeholder="username">`,
      end
        ? '\t<span class="end-icon">\n\t\t<i class="icon bi-copy"></i>\n\t</span>'
        : "",
      "</div>",
    ]
      .filter(Boolean)
      .join("\n");
  }

  async content(): Promise<string[]> {
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
