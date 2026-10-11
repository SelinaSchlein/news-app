import React, {useState, useEffect, useRef} from "react";
import {Fab, Box} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {useScrollToTop} from "../hooks/useScrollToTop.ts";

const ScrollToTopButton: React.FC = () => {

    const {topRef, scrollToTop, showButton} = useScrollToTop();

    return (
        <>
            {/*Element zu dem gescrollt wird*/}
            <div ref={topRef}/>

            {showButton && (
                <Box
                    sx={{
                        position: "fixed", bottom: 32, right: 32, zIndex: 1000,
                    }}
                >
                    {/*Fab ist ein runder button*/}
                    <Fab color="primary" aria-label="scroll to top" onClick={scrollToTop}>
                        <KeyboardArrowUpIcon/> {/*Pfeil nach oben Icon*/}
                    </Fab>
                </Box>
            )}
        </>
    );
};

export default ScrollToTopButton;