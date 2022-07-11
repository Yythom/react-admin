import { useMemo } from "react"

type Chunk = {
    text: string
    match: boolean
}

type Options = {
    text: string
    query: string | string[]
}
const escapeRegexp = (term: string): string =>
    term.replace(/[|\\{}()[\]^$+*?.-]/g, (char: string) => `\\${char}`)

function buildRegex(query: string[]) {
    const _query = query.map((text) => escapeRegexp(text.trim()))
    return new RegExp(`(${_query.join("|")})`, "ig")
}

function highlightWords({ text, query }: Options): Chunk[] {
    const regex = buildRegex(Array.isArray(query) ? query : [query])
    const result = text.split(regex).filter(Boolean)
    return result.map((str) => ({ text: str, match: regex.test(str) }))
}

export function useHighlight(props: Options) {
    const { text, query } = props
    return useMemo(() => highlightWords({ text, query }), [text, query])
}