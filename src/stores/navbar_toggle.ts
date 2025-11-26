import { atom } from 'nanostores';

export const showSettings = atom(false);

export const toggleSettings = () => {
    showSettings.set(!showSettings.get());
};
