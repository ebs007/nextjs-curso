import NextLink from 'next/link'
import { Text } from '/home/erick/www/alura/nextjs-curso/src/theme/components'

export default function Link({ children, href, ...props }) {
    return (
        <NextLink href={href}>
            <Text {...props}>{children}</Text>
        </NextLink>
    )
}
