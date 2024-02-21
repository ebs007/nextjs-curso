import FAQScreen from '../src/components/screens/FaqScreen/FAQScreen'
export default FAQScreen
// getServerSideProps - Sempre roda a acada acesso
// getStaticProps - Só roda uma vez
export async function getStaticProps() {
    const FAQ_API_URL =
        'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) => {
            return respostaDoServidor.json()
        })
        .then((resposta) => {
            return resposta
        })

    return {
        props: {
            qualquercoisa: 'que eu passar aqui',
            faq,
        },
    }
}

// export default function FAQPage({ faq }) {
//     return (
//         <>
//             <PageTitle>FAQ - Alura Cases Campanha</PageTitle>
//             <h1>Alura Cases - Páginas de perguntas</h1>
//             <Link href='/'>Ir para home</Link>
//             <ul>
//                 {faq.map(({ answer, question }) => (
//                     <li key={question}>
//                         <article>
//                             <h2>{question}</h2>
//                             <p>{answer}</p>
//                         </article>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     )
// }
