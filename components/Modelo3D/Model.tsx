import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

interface Props {
    Url: string;
    fallback?: React.ReactNode;
}

export default function Model({Url, fallback}:Props) {
    return (
            <Suspense fallback={fallback}>
                <Spline scene={"https://" + Url} />
            </Suspense>
    );
}