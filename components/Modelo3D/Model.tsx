import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline/next';

interface Props {
    Url: string;
    className: string;
    suspense?: any;
}

export default function Home({Url: Url, className: className, suspense: suspense}: Props) {
    return (
        <main>
            <Spline Suspense={suspense}  className={className}
                scene={Url}
            />
        </main>
    );
}
