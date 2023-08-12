export const randomBadgeColors = () => {
    const badges = document.querySelectorAll('.badge__random')
    for (const badge of [...badges]) {
        badge.style.background = '#'+(Math.random() *0xFFFFFF<<0).toString(16)
    }
}