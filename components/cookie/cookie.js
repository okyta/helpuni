import CookieConsent, { Cookies } from 'react-cookie-consent';

import React from 'react';

export default function cookieSet() {
  const now = new Date();

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Concordo"
        cookieName="CookieConsent"
        cookieValue={
          `${
            now.getDay() +
            '-' +
            now.getDate() +
            '-' +
            now.getMonth() +
            '-' +
            now.getFullYear()
          }` +
          '&' +
          'true'
        }
        style={{ background: 'teal' }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={150}
      >
        Utilizamos cookies e tecnologias semelhantes para ajudar a personalizar
        o conteúdo.
      </CookieConsent>
    </>
  );
}
