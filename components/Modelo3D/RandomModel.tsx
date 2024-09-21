import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

interface Props {
    Url: string;
    className?: string;
    fallback?: React.ReactNode;
}

export default function Model({Url, fallback, className}:Props) {
    return (
            <Suspense fallback={fallback} >
                <Spline className={className} scene={"https://" + Url} />
            </Suspense>
    );
}