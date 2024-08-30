import { redirect } from '@/navigation';

export default function dashboard ( {children} ){
    if (1 === 1) {// aqui podemos verificar si el usuario esta logeado
        redirect('/register/singup');
    }
    return (
        <section className="h-full">
            {children}
        </section>
    )
}
