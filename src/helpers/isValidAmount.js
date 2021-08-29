export default function isValidAmount(value) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(value);
}
