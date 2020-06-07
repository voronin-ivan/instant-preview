import { RootModel } from './models/root';

declare global {
    interface Window {
        __INIT__: RootModel;
    }
}

export {};
