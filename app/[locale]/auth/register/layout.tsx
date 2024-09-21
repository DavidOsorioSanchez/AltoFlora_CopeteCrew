export default function Register ( {children} ){
    return (
        <section className="z-10 h-screen w-screen absolute top-0 left-0 flex justify-end max-lg:bg-lessBlack/70 lg:bg-auth ">
            {children}
        </section>
    )
}