import { atom } from 'nanostores';

const initTimer = 25;
export const isRunning = atom(false);
export const workTimer = atom(initTimer * 60);

let intervalId: NodeJS.Timeout | null = null;


export function startWorkTimer() {
    if (intervalId !== null) return;
    isRunning.set(true);

    intervalId = setInterval(() => {
        const curr = workTimer.get();

        if (curr <= 0) {
            clearInterval(intervalId!);
            intervalId = null;
            isRunning.set(false);
            return;
        }
        workTimer.set(curr - 1);
    }, 1000);
}

export function pauseWorkTimer() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
    isRunning.set(false);
}

export function resetWorkTimer() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }

    workTimer.set(initTimer * 60);
    isRunning.set(false);
}
