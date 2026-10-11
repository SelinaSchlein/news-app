export type Article = {
    title: string,
    source: {
        name: string,
        url: string
    }
    publishedAt: Date,
    content: string,
    image: string
}