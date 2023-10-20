const getRandomNumber = (limit: number) => {
    return Math.floor(Math.random() * limit);
};

export const randomBadgeColors = () => {
    const badges = document.querySelectorAll('.badge__random') as NodeListOf<HTMLElement>;
    // @ts-ignore
    for (const badge of [...badges]) {
        badge.style.background = `hsl(${ getRandomNumber(360) }, 50%, 40%)`;
    }
};