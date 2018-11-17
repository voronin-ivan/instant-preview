import ru from './ru';
import eng from './eng';
import store from '../../redux/store';
import { RootModel } from '../../models/root';

const languages = { ru, eng };

export default (value: string): string => {
    const currentStore: RootModel = store.getState();
    const tranlation = languages[currentStore.lang][value];

    if (!tranlation) {
        throw new Error(`Missing translation for "${value}"`);
    }

    return tranlation;
};
