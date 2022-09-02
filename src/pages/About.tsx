import { useTranslation, Trans } from 'react-i18next';

interface LgClass {
    nativeName: string;
}


export default function About() {
    const { t, i18n } = useTranslation();


    return (
        <main style={{ padding: "1rem" }}>
            <h2>{t('about')}</h2>           
            <p>
                <Trans i18nKey="description.part1">
                    Edit <code>src/App.js</code> and save to reload.
                </Trans>
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                {t('description.part2')}
            </a>
        </main>
    );
}