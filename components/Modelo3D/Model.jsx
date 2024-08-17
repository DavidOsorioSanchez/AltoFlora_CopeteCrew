import Spline from '@splinetool/react-spline/next';

export default function Home({Url, className}) {
    return (
        <main>
            <Spline className={className}
                scene={Url}
            />
        </main>
    );
}
