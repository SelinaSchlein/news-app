import React from "react";
import {Box, Button} from "@mui/material";
import {useLanguageStore} from "../store/useLanguageStore.ts";
import {text} from "../common/translation.ts";

const LanguageSwitcher: React.FC = () => {

    const {language, toggleLanguage} = useLanguageStore();

    return (
        <>
            <Box>
                <Button onClick={toggleLanguage} sx={{
                    backgroundColor: "lightgray",
                    borderRadius: 2,
                    padding: 1,
                    color: "gray",
                    marginBottom: 2
                }}>{text[language].langButton}</Button>
            </Box>
        </>
    );
};
export default LanguageSwitcher;