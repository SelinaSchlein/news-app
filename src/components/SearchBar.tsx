import React, {type ChangeEvent} from "react";
import {Input, InputAdornment} from "@mui/material";
import {text} from "../common/translation.ts";
import {useLanguageStore} from "../store/useLanguageStore.ts";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
    searchText: string,
    onChange: (text: string) => void
}

const SearchBar: React.FC<Props> = ({searchText, onChange}) => {

    const {language} = useLanguageStore();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <>
            <Input
                inputMode="text"
                placeholder={text[language].search}
                onChange={handleChange}
                value={searchText}

                // Lupe die im Search Feld ist
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                }
            />


        </>
    )
        ;
};
export default SearchBar;