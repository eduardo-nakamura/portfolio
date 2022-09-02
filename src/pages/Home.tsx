import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();

    return (
        <main style={{ padding: "1rem" }}>
            <h2>{t('home')}</h2>
        </main>
    );
}