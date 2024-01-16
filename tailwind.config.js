/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "pretendard-medium": ["pretendard-medium"],
    },
    extend: {
      spacing: {
        7: "1.75rem",
        7.5: "1.875rem",
        12.5: "3.125rem",
        128: "32rem",
        152: "38rem",
      },
      colors: {
        "kakao-yellow": "#FEE500",
        "kakao-brown": "#3C1E1E",
        "naver-green": "#03C75A",
        "charcoal-grey": "#242424",
        "near-black": "#0C0E0F",
        "medium-grey": "#AFAFAF",
      },
    },
  },
  safelist: [
    {
      pattern: /col-.*/,
    },
    {
      pattern: /row-.*/,
    },
    {
      pattern: /flex/,
    },
    {
      pattern: /flex-.*/,
    },
    {
      pattern: /justify-.*/,
    },
    {
      pattern: /items-.*/,
    },
    {
      pattern: /grid-.*/,
    },
    {
      pattern: /gap-.*/,
    },
    {
      pattern: /border-.*/,
    },
    { pattern: /w-.*/ },
    { pattern: /h-.*/ },
    {
      pattern: /top*.*/,
    },
    {
      pattern: /bottom*.*/,
    },
    {
      pattern: /left*.*/,
    },
    {
      pattern: /right*.*/,
    },
    { pattern: /bg-.*/ },
    { pattern: /text-.*/ },
    {
      pattern: /p-.*/,
    },
  ],
  plugins: [],
};
