import React from "react";
import {useArticleStore} from "../store/useArticleStore.ts";
import {FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent} from "@mui/material";
import {text} from "../common/translation.ts";
import {useLanguageStore} from "../store/useLanguageStore.ts";

// es wird direkt an ArticleList weitergereicht
interface Props {
    selectedSource: string,
    onChange: (value: string) => void
}

const SourceFilter: React.FC<Props> = ({selectedSource, onChange}) => {

    const {articles} = useArticleStore();
    const {language} = useLanguageStore();

    const sources: string[] = articles?.map(a => a.source.name) || [];
    console.log(sources)

    const uniqueSources: string[] = [...new Set(sources)]
    uniqueSources.push("alle");


    const handleChange = (event: SelectChangeEvent<string>) => {
        onChange(event.target.value);
    }

    return (
        <>
            <FormControl sx={{width: "20%", margin: 1}}>
                <InputLabel>{text[language].source}</InputLabel>
                <Select value={selectedSource}
                        label={text[language].source}
                        onChange={handleChange}>
                    {
                        uniqueSources.map(unS =>
                            (<MenuItem value={unS} key={unS}>{unS}</MenuItem>))
                    }
                </Select>
            </FormControl>

        </>
    );
};
export default SourceFilter;