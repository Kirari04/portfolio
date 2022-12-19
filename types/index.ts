export { };

declare global {
    // Text Components
    interface TextColor {
        txt: String,
        mark?: boolean
    }

    // Language
    interface LanguageController {
        $: LanguagePackage;
        list: LanguagePackages;
    }
    interface LanguagePackages {
        en: LanguagePackage;
    }
    interface LanguagePackage {
        title: Array<TextColor>;
        mywork: {
            title: Array<TextColor>;
        }
        canCode: {
            title: Array<TextColor>;
            langs: Array<ProgrammingLanguage>;
        }
    }

    // Others
    interface ProgrammingLanguage {
        name: String;
        icon: File;
        experience: Array<TextColor>;
        teaching: Array<TextColor>;
        color: String;
    }
}