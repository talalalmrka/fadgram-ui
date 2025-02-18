export const isDarkColor = (hex) => {
    hex = hex.replace(/^#/, '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    let luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    return luminance <= 0.6;
}

export const isHexColor = (hex) => {
    const hexRegex = /^#?([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;
    return hexRegex.test(hex);
}