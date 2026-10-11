import React from "react";
import type {Article} from "../common/model.ts";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {useLanguageStore} from "../store/useLanguageStore.ts";
import {text} from "../common/translation.ts";

interface NewsCardInterface {
    article: Article
}

const NewsCard: React.FC<NewsCardInterface> = ({article}) => {

    const {language} = useLanguageStore();


    return (
        <>

            <Card sx={{margin: 2, backgroundColor:'lightgrey', padding:1}}>
                <CardContent>
                    <Typography variant={"h6"} sx={{fontWeight:"bold"}}>{article.title}</Typography>
                    <Typography sx={{color:"grey"}}>{text[language].author}: {article.source.name}</Typography>
                    <Typography sx={{color:"grey"}}>{text[language].publishDate}: {new Date(article.publishedAt).toLocaleDateString()}</Typography>
                    <Typography>{article.content.replace(/\[\d+\s*chars\]/g, "").trim()}</Typography>
                </CardContent>

                <CardMedia
                    component={"img"}
                    image={article.image || "https://via.placeholder.com/150"}
                    height="500"
                    sx={{borderRadius:1}}
                />
            </Card>


        </>
    );
};
export default NewsCard;