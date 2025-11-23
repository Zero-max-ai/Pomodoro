import { healthReminders } from '../utils/data';

export const quoteFetcher = () => {
    let randNum = Math.floor(Math.random() * 51);
    return healthReminders[randNum];
};
