export class RtlToggler {
    constructor(element) {
        this.dir = localStorage.getItem('dir') === "rtl" ? "rtl" : "ltr";
        this.element = element;
        this.html = document.documentElement;
        this.element.innerHTML = this.label;
        this.initialize();
    }
    get label() {
        return this.dir === "rtl" ? "ltr" : "rtl";
    }
    initialize() {
        this.element.classList.add('inited');
        this.html.dir = this.dir;
        this.element.addEventListener('click', (e) => this.toggle(e));
    }
    // Toggle direction
    toggle(e) {
        e.preventDefault();
        this.dir = this.dir === "rtl" ? "ltr" : "rtl";
        localStorage.setItem('dir', this.dir);
        this.html.dir = this.dir;
        this.element.innerHTML = this.label;
    }
    static create(element) {
        if (!element.classList.contains('inited')) {
            new RtlToggler(element);
        }
    }

    static init() {
        document.querySelectorAll('.rtl-toggle').forEach(element => {
            RtlToggler.create(element);
        });
    }
}