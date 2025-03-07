export class Tooltip {
    constructor() {
        this.tooltip = null;
        this.currentTarget = null;
        this.initialize();
    }

    initialize() {
        this.createTooltip();
        this.bindEvents();
        this.addResizeListener();
        this.addScrollListener();
    }

    createTooltip() {
        this.tooltip = document.createElement('div');
        this.tooltip.classList.add('tooltip');
        document.body.appendChild(this.tooltip);
    }

    bindEvents() {
        document.addEventListener('mouseover', this.handleMouseOver.bind(this));
        document.addEventListener('mouseout', this.handleMouseOut.bind(this));
    }

    addResizeListener() {
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => this.hideTooltip(), 100);
        });
    }

    addScrollListener() {
        window.addEventListener('scroll', () => {
            if (this.currentTarget && this.tooltip.classList.contains('show')) {
                this.showTooltip(this.currentTarget);
            }
        }, true);
    }

    handleMouseOver(e) {
        const target = e.target.closest('[data-tooltip]');
        if (!target || !this.tooltip) return;
        this.currentTarget = target;
        this.showTooltip(target);
    }

    handleMouseOut(e) {
        const target = e.target.closest('[data-tooltip]');
        if (!target || !this.tooltip) return;
        this.currentTarget = null;
        this.hideTooltip();
    }

    showTooltip(target) {
        const text = target.dataset.tooltip;
        const direction = target.dataset.tooltipDirection || 'bottom';

        this.tooltip.textContent = text;
        this.tooltip.className = `tooltip tooltip-${direction}`;

        const targetRect = target.getBoundingClientRect();
        const tooltipRect = this.tooltip.getBoundingClientRect();

        const position = this.calculatePosition(targetRect, tooltipRect, direction);
        console.log(position);
        this.tooltip.style.left = `${position.x}px`;
        this.tooltip.style.top = `${position.y}px`;

        requestAnimationFrame(() => {
            this.tooltip.classList.add('show');
        });
    }

    calculatePosition(targetRect, tooltipRect, direction) {
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        const offset = 8;
        const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

        switch (direction) {
            case 'top':
                return {
                    x: targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2) + scrollX,
                    y: targetRect.top - tooltipRect.height - offset + scrollY
                };
            case 'bottom':
                return {
                    x: targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2) + scrollX,
                    y: targetRect.bottom + offset + scrollY
                };
            case 'start':
                return {
                    x: isRTL
                        ? targetRect.right + offset + scrollX
                        : targetRect.left - tooltipRect.width - offset + scrollX,
                    y: targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2) + scrollY
                };
            case 'end':
                return {
                    x: isRTL
                        ? targetRect.left - tooltipRect.width - offset + scrollX
                        : targetRect.right + offset + scrollX,
                    y: targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2) + scrollY
                };
            default:
                return { x: 0, y: 0 };
        }
    }

    hideTooltip() {
        this.tooltip.classList.remove('show');
    }

    static init() {
        if (typeof window !== 'undefined') {
            if (!window.Tooltip) {
                window.Tooltip = new Tooltip();
            }
        }
    }
}
/*export class Tooltip {
    constructor() {
        this.tooltip = null;
        this.initialize();
    }

    initialize() {
        this.createTooltip();
        this.bindEvents();
        this.addResizeListener();
    }

    createTooltip() {
        this.tooltip = document.createElement('div');
        this.tooltip.classList.add('tooltip');
        document.body.appendChild(this.tooltip);
    }

    bindEvents() {
        document.addEventListener('mouseover', this.handleMouseOver.bind(this));
        document.addEventListener('mouseout', this.handleMouseOut.bind(this));
    }

    addResizeListener() {
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => this.hideTooltip(), 100);
        });
    }

    handleMouseOver(e) {
        const target = e.target.closest('[data-tooltip]');
        if (!target || !this.tooltip) return;
        this.showTooltip(target);
    }

    handleMouseOut(e) {
        const target = e.target.closest('[data-tooltip]');
        if (!target || !this.tooltip) return;
        this.hideTooltip();
    }

    showTooltip(target) {
        const text = target.dataset.tooltip;
        const direction = target.dataset.tooltipDirection || 'bottom';

        this.tooltip.textContent = text;
        this.tooltip.className = `tooltip tooltip-${direction}`;

        const targetRect = target.getBoundingClientRect();
        const tooltipRect = this.tooltip.getBoundingClientRect();

        const position = this.calculatePosition(targetRect, tooltipRect, direction);
        this.tooltip.style.left = `${position.x}px`;
        this.tooltip.style.top = `${position.y}px`;

        requestAnimationFrame(() => {
            //this.tooltip.classList.add('opacity-100');
            this.tooltip.classList.add('show');
        });
    }

    calculatePosition(targetRect, tooltipRect, direction) {
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        const offset = 8;
        const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

        switch (direction) {
            case 'top':
                return {
                    x: targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2) + scrollX,
                    y: targetRect.top - tooltipRect.height - offset + scrollY
                };
            case 'bottom':
                return {
                    x: targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2) + scrollX,
                    y: targetRect.bottom + offset + scrollY
                };
            case 'start':
                return {
                    x: isRTL
                        ? targetRect.right + offset + scrollX
                        : targetRect.left - tooltipRect.width - offset + scrollX,
                    y: targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2) + scrollY
                };
            case 'end':
                return {
                    x: isRTL
                        ? targetRect.left - tooltipRect.width - offset + scrollX
                        : targetRect.right + offset + scrollX,
                    y: targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2) + scrollY
                };
            default:
                return { x: 0, y: 0 };
        }
    }

    hideTooltip() {
        this.tooltip.classList.remove('show');
        //this.tooltip.classList.remove('opacity-100');
        //this.tooltip.classList.add('opacity-0');
    }

    static init() {
        //const tooltip = new Tooltip();
        if (typeof window !== 'undefined') {
            if (!window.Tooltip) {
                window.Tooltip = new Tooltip();
            }
            //window.Tooltip = tooltip;
        }
        //return tooltip;
    }
}*/

