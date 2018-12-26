import * as React from 'react';
import { YMInitializer } from 'react-yandex-metrika';

export const YaMetrica = () => (
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
