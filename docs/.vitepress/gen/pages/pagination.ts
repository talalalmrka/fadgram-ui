import { Generator } from "../Generator";

class PaginationGenerator extends Generator {
  constructor() {
    super("components/pagination.md", {
      icon: "bi-segmented-nav",
      // order: 29,
    });
  }

  async content(): Promise<string[]> {
    return [
      this.h2("Usage"),
      await this.codePreview(`<div class="pagination-container pt-3 px-3">
    <div class="pagination-summary">Page 2 of 4 / Total: 36</div>
    <nav class="pagination" aria-label="Pagination" role="pagination">
        <button class="pagination-item" title="First Page">
            <i class="icon bi-chevron-double-left rtl:bi-chevron-double-right"></i>
        </button>
        <button class="pagination-item" title="Previous Page">
            <i class="icon bi-chevron-left rtl:bi-chevron-right"></i>
        </button>
        <button class="pagination-item" title="Page 1">1</button>
        <button class="pagination-item active" title="Page 2" disabled="">2</button>
        <button class="pagination-item" title="Page 3">3</button>
        <button class="pagination-item" title="Page 4">4</button>
        <button class="pagination-item" title="Next Page">
            <i class="icon bi-chevron-right rtl:bi-chevron-left"></i>
        </button>
        <button class="pagination-item" title="Last Page">
            <i class="icon bi-chevron-double-right rtl:bi-chevron-double-left"></i>
        </button>
    </nav>
</div>`),
    ];
  }
}

new PaginationGenerator().generate();
