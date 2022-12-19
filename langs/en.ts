export const $: LanguagePackage = {
    title: [
        {txt: 'Hi', mark: true},
        {txt: ', my name is '},
        {txt: 'Lev', mark: true},
    ],
    mywork: {
        title: [
            {txt: 'I do ...', mark: true},
        ],
    },
    canCode: {
        title: [
            {txt: 'I can code in ...', mark: true},
        ],
        langs: [
            {
                name: 'PHP',
                experience: [
                    {txt: 'Since '},
                    {txt: '2018', mark: true},
                ],
                teaching: [
                    {txt: 'Self-taught '},
                ],
                icon: require('@/icons/php.svg'),
                color: '#777BB4'
            },
            {
                name: 'JavaScript',
                experience: [
                    {txt: 'Since '},
                    {txt: '2018', mark: true},
                ],
                teaching: [
                    {txt: 'Self-taught & School'},
                ],
                icon: require('@/icons/javascript.svg'),
                color: '#F7DF1E'
            },
            {
                name: 'Java',
                experience: [
                    {txt: 'Since '},
                    {txt: '2021', mark: true},
                ],
                teaching: [
                    {txt: 'School'},
                ],
                icon: null,
                color: '#F7DF1E'
            },
            {
                name: 'Dart',
                experience: [
                    {txt: 'In '},
                    {txt: '2022', mark: true},
                ],
                teaching: [
                    {txt: 'Self-taught'},
                ],
                icon: require('@/icons/dart.svg'),
                color: '#0175C2'
            },
            {
                name: 'Go',
                experience: [
                    {txt: 'In '},
                    {txt: '2022', mark: true},
                ],
                teaching: [
                    {txt: 'Self-taught'},
                ],
                icon: require('@/icons/go.svg'),
                color: '#00ADD8'
            },
        ]
    },
}