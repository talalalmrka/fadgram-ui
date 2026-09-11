export function dataGet<T = unknown, D = null>(
    object: unknown,
    path: string | string[],
    defaultValue: D = null as D,
): T | D {
    if (path === '' || path.length === 0) {
        return (object ?? defaultValue) as T | D;
    }

    const segments = Array.isArray(path) ? path : path.split('.');

    return getValue(object, segments, defaultValue) as T | D;
}

function getValue(
    target: unknown,
    segments: string[],
    defaultValue: unknown,
): unknown {
    if (segments.length === 0) {
        return target;
    }

    if (target == null) {
        return defaultValue;
    }

    const [segment, ...remaining] = segments;

    if (segment === '*') {
        if (!Array.isArray(target) && typeof target !== 'object') {
            return defaultValue;
        }

        const values = Object.values(target as Record<string, unknown>);

        if (remaining.length === 0) {
            return values;
        }

        return values.map((value) =>
            getValue(value, remaining, defaultValue),
        );
    }

    const value =
        typeof target === 'object'
            ? (target as Record<string, unknown>)[segment]
            : undefined;

    if (remaining.length === 0) {
        return value === undefined ? defaultValue : value;
    }

    return getValue(value, remaining, defaultValue);
}