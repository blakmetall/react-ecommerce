export default function getFromArray(array, amount = 8) {
    if (array.length && amount > 0) {
        return array.slice(0, amount);
    }

    return array;
}
