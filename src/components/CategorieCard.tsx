import React, {useEffect, useState} from "react";
import {Box, FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent, Typography} from "@mui/material";
import {useArticleStore} from "../store/useArticleStore.ts";
import NewsCard from "./NewsCard.tsx";
import {useLanguageStore} from "../store/useLanguageStore.ts";
import {text} from "../common/translation.ts";

const CategorieCard: React.FC = () => {
    const [category, setCategory] = useState<string>("General");
    const [amount, setAmount] = useState<number>(10);


    const topics: string[] = ["General", "Nation", "Business", "Sports", "Technology", "Entertainment", "Science", "Health", "World"]
    const amounts: number[] = [1, 2, 5, 10];

    const handleChange = (event: SelectChangeEvent<string>) => {
        setCategory(event.target.value);
    }

    const handleChangeAmount = (event: SelectChangeEvent<number>) => {
        setAmount(Number(event.target.value));
    };

    const {articles, loadArticles, error, loading} = useArticleStore();
    const {language} = useLanguageStore();

    useEffect(() => {

        console.log(category)
        console.log(amount)
        const load = async () => {
            await loadArticles(category, amount, language)
        }
        load();

    }, [category, amount, loadArticles, language])

    return (
        <>
            <Box sx={{marginTop: 10}}></Box>
            <Box>
                <FormControl sx={{width: "20%", margin: 1}}>
                    <InputLabel>{text[language].category}</InputLabel>
                    <Select value={category}
                            label={text[language].category}
                            onChange={handleChange}>
                        {
                            topics.map(top =>
                                (<MenuItem key={top} value={top}>{top}</MenuItem>))
                        }
                    </Select>
                </FormControl>

                <FormControl sx={{width: "20%", margin: 1}}>
                    <InputLabel>{text[language].amount}</InputLabel>
                    <Select value={amount}
                            label={text[language].amount}
                            onChange={handleChangeAmount}>
                        {
                            amounts.map(am =>
                                (<MenuItem value={am} kex={am}>{am}</MenuItem>))
                        }
                    </Select>
                </FormControl>
            </Box>

            {error && (articles?.length == 0||articles?.length==undefined) && (
                <Box>
                    <Typography>{text[language].errorLoadingCat}</Typography>
                </Box>
            )}

            {loading ? (
                <Box sx={{display: "flex", justifyContent: "center", marginTop: 8}}>
                    <Typography>{text[language].loading}</Typography>
                </Box>
            ) : (
                <Box>
                    {articles && articles.length > 0 ? (
                        articles?.map((article, index) =>
                            (<NewsCard article={article} key={index}></NewsCard>)
                        )
                    ) : !error && (
                        <Typography sx={{mt: 4}}>{text[language].noArtinCat}</Typography>
                    )}
                </Box>
            )}

        </>
    )
        ;
};
export default CategorieCard;