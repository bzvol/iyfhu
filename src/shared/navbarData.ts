import i18n from '../i18n';

export const data = {
    navItems: [
        {
            key: 'iyf',
            dropdownKeys: [
                'visionMission',
                'history',
                'greetings',
            ],
        },
        {
            key: 'programs',
            dropdownKeys: [
                'introduction',
                'globalEducation',
                'socialService',
                'internationalExchange',
                'culturalExchange',
            ],
        },
        {
            key: 'news',
            dropdownKeys: [
                'localNews',
                'globalNews',
            ],
        },
        {
            key: 'mindEducation',
            dropdownKeys: [
                'introduction',
                'mindLecture',
                'contact',
            ],
        },
    ],
    availableLngs: Object.keys(i18n.options.resources),
}

export const getTitleTranslationKey = (key: string) => `navbar.${key}.title`
export const getDropdownTranslationKey = (key: string, subKey: string) => `navbar.${key}.dropdown.${subKey}`
export const getLanguageImageUri = (key: string) => `http://34.128.168.249//lang_${key}.png`
export const getLanguageTranslationKey = (key: string) => `languages.${key}`
