import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header.tsx";
import ArticleList from "./components/ArticleList.tsx";
import CategorieCard from "./components/CategorieCard.tsx";
import ScrollToTopButton from "./components/ScrollToTopFunction.tsx";
import LanguageSwitcher from "./components/LanguageSwitcher.tsx";

function App() {

    return (
        <><ScrollToTopButton/>
            <BrowserRouter>
                <Header/>
                <Routes>

                    <Route path={"/"} element={<ArticleList></ArticleList>}></Route>
                    <Route path={"/categories"} element={<CategorieCard></CategorieCard>}></Route>
                </Routes>
            </BrowserRouter>

            <LanguageSwitcher/>

        </>
    )
}

export default App
