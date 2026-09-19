import prettier from "prettier";

export {};

declare global {
  interface String {
    lines(): string[];
    format(parser: prettier.BuiltInParserName): Promise<string>;
  }
}

String.prototype.lines = function (): string[] {
  return this.split(/\r?\n/);
};

String.prototype.format = async function (
  parser: prettier.BuiltInParserName,
): Promise<string> {
  return await prettier.format(String(this), { parser });
};