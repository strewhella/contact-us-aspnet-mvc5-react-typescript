import { easeExpIn } from "d3-ease";

const timing = { duration: 350, delay: 0, ease: easeExpIn };
export const SideAnimation = {
    start: {
        x: 500,
        opacity: 0
    },
    enter: {
        x: [0],
        opacity: [1]
    },
    timing
};
