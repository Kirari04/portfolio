export { };

declare global {
    // Text Components
    interface TextColor {
        txt: String,
        mark?: boolean
    }

    // Language
    interface LanguageController {
        $: LanguagePackage,
        list: LanguagePackages
    }
    interface LanguagePackages {
        de: {
            title: Array<TextColor>
        }
    }
    interface LanguagePackage {
        title: Array<TextColor>
    }
    
}