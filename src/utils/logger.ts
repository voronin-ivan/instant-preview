import { init, captureException } from '@sentry/browser';
import { version } from '../../package.json';

const dsn = 'https://960b23bad4274790b31cd100bfc3411c@o403791.ingest.sentry.io/5266805';
const isProduction = process.env.NODE_ENV === 'production';

export const initLogger = () => {
    init({
        dsn,
        enabled: isProduction,
        release: version,
    });
};

export const logError = (error: unknown) => captureException(error);
