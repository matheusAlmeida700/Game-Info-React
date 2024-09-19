// o props retorna os parâmetros que passamos no App

export default function Section(props) {
    return (
        <section>
            <div>
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
                {/* Pegando todos os filhos do elemento e mostrando dentro dele */}
                <ul className={props.className}>
                    {props.children}
                </ul>
            </div>
        </section>
    )
}