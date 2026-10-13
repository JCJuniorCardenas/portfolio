"use client";

const LANGS = [
  { code: "es", label: "ES" },
  { code: "pt", label: "PT" },
];

// Guarda la elección en una cookie para que la próxima visita a "/" respete el idioma.
function remember(code: string) {
  try {
    document.cookie = `lang=${code}; path=/; max-age=31536000; samesite=lax`;
  } catch {
    // sin cookies: la navegación funciona igual
  }
}

export function LangSwitch({ current, label }: { current: string; label: string }) {
  return (
    <div className="lang-switch" role="group" aria-label={label}>
      {LANGS.map(({ code, label: text }) => (
        <a
          key={code}
          href={`/${code}`}
          hrefLang={code}
          lang={code}
          aria-current={code === current ? "true" : undefined}
          onClick={() => remember(code)}
        >
          {text}
        </a>
      ))}
    </div>
  );
}
