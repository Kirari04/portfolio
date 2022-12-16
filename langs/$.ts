const langs: LanguagePackages = {
    de: require('@/langs/de').$ as LanguagePackage
}

export const $ = {
    $: langs.de,
    list: langs
};