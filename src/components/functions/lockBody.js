function lockBody (active) {
    if (active) {
        document.body.classList.add('lock');
    } else {
        document.body.classList.remove('lock');
    }
}
export {lockBody};