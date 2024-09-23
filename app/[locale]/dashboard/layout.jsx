import { redirect } from '@/navigation';

export default function dashboard ( {children} ){
    if (!session?.user ) {
        redirect('/register/signup');
    }
    return (
        <section className="h-full">
            {children}
        </section>
    )
}
