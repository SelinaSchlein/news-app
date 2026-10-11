import type {Article} from "../common/model.ts";
import {create} from "zustand";
import {loadArticles} from "../hooks/useNewsData.ts";

interface ArticleState {
    articles: Article[] | null,
    setArticles: (newArticles: Article[]) => void,
    loadArticles: (newsCategory: string, amount: number, lang: string) => void,
    loading: boolean,
    error: string | null
}


export const useArticleStore = create<ArticleState>((set) => ({
    articles: null,
    setArticles: (newArticles: Article[]) => set({articles: newArticles}),
    loadArticles: async (newsCategory: string, amount: number, lang: string) => {

        set({loading: true, error: null})

        try {
            const data: Article[] = await loadArticles(newsCategory, amount, lang);
            set({articles: data, loading: false})
        } catch (err: any) {
            set({error: err.message || "Fehler beim Laden der Artikel", loading: false})
        }

    },
    loading: false,
    error: null
}))