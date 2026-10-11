import apiClient from "../api-client.ts";
import type {Article} from "../common/model.ts";

interface GNewsResponse {
    totalArticles: number;
    articles: Article[];
}

export const loadArticles = async (newsCategory: string, amount: number, lang: string) => {
    try{
        const response = await apiClient.get<GNewsResponse>("/top-headlines", {
            params: {
                category: newsCategory.toLowerCase(),
                lang: lang,
                max: amount,
                apikey: "c6e5b19dffe2f22da5ef9d6eda5e1d6b"
            }
        });

        console.log(response)

        return response.data.articles;
    }
    catch (error: any) {
        console.error("Fehler beim Laden der Artikel von der API:", error);
        throw new Error(error.response?.data?.message || "Fehler beim Laden der Artikel.");
    }

};