import { atom } from 'nanostores';
import { isRunning } from './timer';

export const sessions = atom(5);
export const currSessions = atom(1);

export function showSessions() {
    return sessions.get();
}

export function updateSessions(times: number) {
    isRunning.set(false);
    sessions.set(times);
    if (currSessions.get() > times) currSessions.set(times);
}
