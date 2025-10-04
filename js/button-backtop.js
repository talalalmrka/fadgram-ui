export class ButtonBackTop {
    constructor(button) {
        this.button = button;
        this.initialize();
    }
    addListeners() {
        document.addEventListener('scroll', () => this.toggle());
        this.button.addEventListener('click', (e) => this.onBacktopClicked(e));
    }
    onBacktopClicked(e) {
        e.preventDefault();
        console.log('onBacktopClicked');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    toggle() {
        if (document.documentElement.scrollTop > 100) {
            this.button.classList.add('show');
        } else {
            this.button.classList.remove('show');
        }
    }
    initialize() {
        this.addListeners();
        this.toggle();
    }

    static create(button) {
        if (!button.classList.contains('inited')) {
            new ButtonBackTop(button);
            button.classList.add('inited');
        }

    }

    static init() {
        document.querySelectorAll('.btn-backtop').forEach(button => {
            ButtonBackTop.create(button);
        });
    }
}