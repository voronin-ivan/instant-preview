import ym from 'react-yandex-metrika';

export const reachDownloadGoal = () => {
    ym('reachGoal', 'download');
};

export const reachVideoGoal = () => {
    ym('reachGoal', 'video');
};

export const reachOfflineGoal = () => {
    ym('reachGoal', 'offline');
};

export const reachAppInstalledGoal = () => {
    ym('reachGoal', 'app_installed');
};

export const reachInstallPromptGoal = (result: string) => {
    ym('reachGoal', 'install_prompt', { result });
};
