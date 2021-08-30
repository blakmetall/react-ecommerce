export default function isValidAmount(value) {
    const isNumber = /^-?[\d.]+(?:e-?\d+)?$/.test(value);

    if (isNumber) {
        if (parseInt(value) >= 0) {
            return true;
        }
    }

    return false;
}
