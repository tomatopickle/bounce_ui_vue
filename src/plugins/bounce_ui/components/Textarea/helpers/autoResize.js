function resize() {
    this.style.height = "auto";
    this.style.height = `${this.scrollHeight - 11}px`;
}
export const setResizeListeners = ($el, query) => {
    const targets = $el.querySelectorAll(query);
    targets.forEach(target => {
        target.style.height = `${target.scrollHeight + 5}px`;
        target.addEventListener("input", resize);
    });
};