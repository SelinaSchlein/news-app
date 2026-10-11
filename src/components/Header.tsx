import React from "react";
import {AppBar, Toolbar, Typography, Box, Tabs, Tab} from '@mui/material';
import {Link, useLocation} from "react-router-dom";
import {text} from "../common/translation.ts";
import {useLanguageStore} from "../store/useLanguageStore.ts";

const Header: React.FC = () => {

    const location = useLocation();

    const {language} = useLanguageStore();

    // Schaut in welchem Tab ich grad bin -> damit der unterstrichen werden kann
    const currentTab = location.pathname.startsWith('/categories')
        ? '/categories'
        : '/';

    return (
        <>
            <AppBar sx={{width: "100%"}}>
                <Toolbar sx={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{width: "80%", display: "flex", justifyContent: "center"}}>
                        <Typography variant={"h5"} sx={{fontWeight: "bold"}}>
                            News App
                        </Typography>
                    </Box>

                    <Tabs
                        value={currentTab}
                        textColor={"inherit"}
                        sx={{
                            marginRight: 5,
                            // damit der weiße Strich unterm aktiven Tab ist
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#ffffff',
                                height: '2px',
                            }
                        }}>
                        <Tab label={"NEWS"} value={"/"} to={"/"} component={Link} sx={{
                            color: "white",
                            '&:hover': {
                                background: "#003c7c",
                                borderRadius: 1

                            }
                        }}/>
                        <Tab label={text[language].categories} value={"/categories"} to={"/categories"} component={Link}
                             sx={{
                                 color: "white",
                                 '&:hover': {
                                     background: "#003c7c",
                                     borderRadius: 1

                                 }
                             }}/>


                    </Tabs>
                </Toolbar>
            </AppBar>


        </>
    );
};
export default Header;