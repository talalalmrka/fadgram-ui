import { Generator } from "../Generator";

interface User {
  id: number;
  name: string;
  email: string;
  date: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Dan Emard MD",
    email: "osinski.cristopher@yahoo.com",
    date: "2001-03-13",
  },
  {
    id: 2,
    name: "Sonia Leuschke",
    email: "lucy15@schoen.com",
    date: "2015-02-27",
  },
  {
    id: 3,
    name: "Celia Hamill",
    email: "uwhite@yahoo.com",
    date: "1978-07-31",
  },
  {
    id: 4,
    name: "Dr. Gilbert Rogahn Sr.",
    email: "hpagac@tremblay.biz",
    date: "1978-07-31",
  },
  {
    id: 5,
    name: "Franz Stamm",
    email: "deja10@gusikowski.com",
    date: "2006-07-26",
  },
];

interface TableOptions {
  striped?: boolean;
  border?: boolean;
  separate?: boolean;
  divide?: boolean;
  hover?: boolean;
  rounded?: boolean;
  layout?: "auto" | "fixed";
  shadow?: boolean;
  size?: string;
}

class TableGenerator extends Generator {
  constructor() {
    super("components/table.md", {
      icon: "bi-table",
      // order: 21,
    });
  }
  async table({
    striped = false,
    border = false,
    separate = false,
    divide = false,
    hover = false,
    rounded = false,
    layout = undefined,
    shadow = false,
    size = undefined,
  }: TableOptions = {}) {
    const cellsNames = Object.keys(users[0]);
    const headCells = await this.html(
      await this.contents(cellsNames.map((c) => `<th>${c}</th>`)),
    );
    const classes = this.cssClasses(
      "table",
      {
        "table-striped": striped,
        "table-border": border,
        "table-border-separate": separate,
        "table-divide": divide,
        "table-hover": hover,
        "table-rounded": rounded,
        [`table-${layout}`]: layout,
        shadow: shadow,
      },
      size,
    );
    return await this.html(`
      <div class="table-container">
      <table class="${classes}">
      <thead>
      <tr>
      ${headCells}
      </tr>
      </thead>
      <tbody>
      ${users
        .map(
          (u) => `
        <tr>
        <td>${u.id}</td>
        <td>${u.name}</td>
        <td>${u.email}</td>
        <td>${u.date}</td>
        </tr>
        `,
        )
        .join("\n")}
      </tbody>
      <tfoot>
      <tr>
      ${headCells}
      </tr>
      </tfoot>
      </table>
      </div>`);
  }
  async content(): Promise<string[]> {
    return [
      this.h2("Basic usage"),
      await this.codePreview(await this.table()),

      this.h2("Table striped"),
      await this.codePreview(await this.table({ striped: true })),

      this.h2("Table border"),
      await this.codePreview(await this.table({ border: true })),

      this.h2("Table border separate"),
      await this.codePreview(await this.table({ separate: true })),

      this.h2("Table divide"),
      await this.codePreview(await this.table({ divide: true })),

      this.h2("Table hover"),
      await this.codePreview(await this.table({ hover: true })),

      this.h2("Table rounded"),
      await this.codePreview(await this.table({ rounded: true })),

      this.h2("Table layout"),

      this.h3("Table layout auto"),
      await this.codePreview(await this.table({ layout: "auto" })),

      this.h3("Table layout fixed"),
      await this.codePreview(await this.table({ layout: "fixed" })),

      this.h2("Table shadow"),
      await this.codePreview(await this.table({ shadow: true })),

      this.h2("Table shadow rounded"),
      await this.codePreview(await this.table({ shadow: true, rounded: true })),

      this.h2("Table size"),
      await this.contents(
        ["xs", "sm", "lg", "xl", "xxl"].map(
          async (size) =>
            await this.contents([
              this.h3(`Table ${size}`),
              await this.codePreview(await this.table({ size: size })),
            ]),
        ),
      ),
    ];
  }
}

new TableGenerator().generate();
