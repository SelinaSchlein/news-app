import {create} from "zustand";

interface LanguageState {
    language: "de" | "en",
    toggleLanguage: () => void
}


export const useLanguageStore = create<LanguageState>((set) =>
    ({
        language: "de",
        toggleLanguage: () => set(s => ({language: s.language == "de" ? "en" : "de"}))
    })
);