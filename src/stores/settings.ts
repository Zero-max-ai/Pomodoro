import { showSettings } from '../stores/navbar_toggle';

const modal = document.getElementById('settings-modal');

showSettings.subscribe((isOpen) => {
    if (isOpen) {
        modal?.classList.remove('opacity-0', 'pointer-events-none');
        modal?.classList.add('opacity-100', 'pointer-events-auto');
    } else {
        modal?.classList.add('opacity-0', 'pointer-events-none');
        modal?.classList.remove('opacity-100', 'pointer-events-auto');
    }
});
