import React, {useEffect, useState} from "react";
import {useArticleStore} from "../store/useArticleStore.ts";
import {Alert, Box, Typography} from "@mui/material";
import NewsCard from "./NewsCard.tsx";
import SourceFilter from "./SourceFilter.tsx";
import {useLanguageStore} from "../store/useLanguageStore.ts";
import SearchBar from "./SearchBar.tsx";
import type {Article} from "../common/model.ts";
import {text} from "../common/translation.ts";

const ArticleList: React.FC = () => {

    const {articles, loadArticles, loading, error} = useArticleStore();
    const [filterSource, setFilterSource] = useState<string>("alle");
    const {language} = useLanguageStore();
    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => {
        const load = async () => {
            await loadArticles("general", 10, language)
        }
        load();

    }, [language])

    const filteredArticlesSource: Article[] | undefined | null = filterSource == 'alle' ? articles : articles?.filter(a => a.source.name == filterSource);

    const filteredArticles: Article[] | undefined = filteredArticlesSource?.filter(a => a.title.toLowerCase().includes(searchText.toLowerCase()) || a.content.toLowerCase().includes(searchText.toLowerCase()));

    console.log(searchText)

    return (
        <>
            <Box sx={{marginTop: 10}}></Box>
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", gap: 2}}>
                {/*Lifting State Up*/}
                <SourceFilter selectedSource={filterSource} onChange={setFilterSource}/>
                <SearchBar searchText={searchText} onChange={setSearchText}/>
            </Box>
            <Box sx={{display: "flex", alignItems: "right", justifyContent: "right", margin: 2}}>
                <Typography>{text[language].aCount}:{articles?.length==undefined?0:articles.length}</Typography>
            </Box>

            {error && (articles?.length == 0||articles?.length==undefined) && (
                <Box>
                    <Typography>{text[language].errorLoading}</Typography>
                </Box>
            )}

            {loading ? (
                <Box sx={{display: "flex", justifyContent: "center", mt: 4}}>
                    <Typography>{text[language].loading}</Typography>
                </Box>
            ) : (
                filteredArticles?.map((a, index) => (
                    <NewsCard key={index} article={a}/>
                ))
            )}


        </>
    );

};
export default ArticleList;