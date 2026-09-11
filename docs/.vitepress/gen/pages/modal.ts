import { Generator } from "../Generator";
import { type ThemeColor, colors } from "../helpers";
interface ModalOptions {
  id?: string;
  label?: string;
  size?: string;
  color?: ThemeColor;
  className?: string;
  btnClassName?: string;
  content?: string;
}
class ModalGenerator extends Generator {
  constructor() {
    super("modal.md");
  }
  
  async modal({
    id = "basic-modal",
    label = "Open modal",
    size = undefined,
    color = undefined,
    className = undefined,
    btnClassName = undefined,
    content = undefined,
  }: ModalOptions = {}) {
    const classes = this.cssClasses("modal", "fade",{
      [`modal-size-${size}`]: size,
      [`modal-${color}`]: color,
    }, className);
    const modalContent = content ?? "Modal body";
    return await this.html(`<button type="button" class="btn ${this.cssClasses(btnClassName)}" data-fg-toggle="modal" data-fg-target="#${id}">${label}</button>
<div id="${id}" class="${classes}">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="btn-close" data-fg-dismiss="modal">
                    <i class="icon bi-x-lg"></i>
                </button>
            </div>
            <div class="modal-body">
                ${modalContent}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save</button>
            </div>
        </div><!-- Modal Content -->
    </div><!-- Modal Dialog -->
</div><!-- Modal -->`);
  }

  async sizes() {
    return await this.contents(
      ["xs", "sm", "md", "lg", "xl", "full"].map(
        async (size) =>
          await this.contents([
            this.h3(`Modal ${size}`),
            await this.codePreview(await this.modal({
              label: `Modal ${size}`,
              id: `modal-size-${size}`,
              size: size,
            })),
          ]),
      ),
    );
  }
  
  async modalColors() {
    return await this.contents(
      colors.map(
        async (color: ThemeColor) =>
          await this.contents([
            this.h3(`Modal ${color}`),
            await this.codePreview(await this.modal({
              label: `Modal ${color}`,
              id: `modal-color-${color}`,
              color: color,
              btnClassName: `btn-${color}`
            })),
          ]),
      ),
    );
  }
  
  async content(): Promise<string[]> {
    return [
      this.h2("Basic usage"),
      await this.codePreview(await this.modal()),

      this.h2("Static backdrop"),
      await this.codePreview(
        await this.modal({
          id: "static-modal",
          label: "Static modal",
          className: "static-backdrop",
        }),
      ),

      this.h2("Modal size"),
      await this.sizes(),
      
      this.h2("Modal scroll"),
      await this.codePreview(
        await this.modal({
          id: "scrollable-modal",
          label: "Scrollable modal",
          content: await this.html(await this.contents([
            '<ul>',
            await this.contents(this.range(1, 100).map((num) => `<li>Item ${num}</li>`)),
            '</ul>',
          ])),
        }),
      ),

      this.h2("Modal color"),
      await this.modalColors(),
      /*await this.codePreview(this.modal({
        id: "lg-modal",
        label: "Modal lg",
        className: "lg",
      })),*/
    ];
  }
}

new ModalGenerator().generate();
