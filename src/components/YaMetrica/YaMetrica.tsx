import React, { useEffect } from 'react';
import { YMInitializer } from 'react-yandex-metrika';
import { getData, setData } from '../../utils/idb';
import { reachOfflineGoal } from '../../utils/helpers';

export const YaMetrica = () => {
    useEffect(() => {
        if (!navigator.onLine) {
            setData('wasOffline', true);
        } else {
            getData<boolean>('wasOffline')
                .then((wasOffline) => {
                    if (wasOffline) {
                        reachOfflineGoal();
                    }
                });
        }
    }, []);

    return (
        <YMInitializer
            accounts={[51727343]}
            version="2"
            options={{
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true,
            }}
        />
    );
};
