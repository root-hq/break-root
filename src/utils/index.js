export function getRandomFromArray(arr) {
    if(arr.length === 0) {
        return null;
    }
    const random = arr[Math.floor(Math.random() * arr.length)];
    return random;
}