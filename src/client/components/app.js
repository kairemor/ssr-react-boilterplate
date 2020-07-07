import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export default function App() {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  return (
    <div>
      <nav style={{ width: '100%', padding: '2rem 0', backgroundColor: 'gray' }}>
        <button onClick={() => handleClick('en')} >
          English
        </button>
        <button onClick={() => handleClick('fr')} >
          Francais
        </button>
      </nav>
      <header>
        <h3>{t('greeting')}</h3>  <h3>{t('thank')}</h3>
      </header>
    </div>
  )
}
