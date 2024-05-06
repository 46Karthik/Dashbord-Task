/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        kaushan: "Kaushan Script",
      },
      backgroundImage: {
        hero1: "url(src/assets/images/hero1.jpg)",
        hero2: "url(src/assets/images/hero2.jpg)",
        hero3: "url(src/assets/images/hero3.jpg)",
        heropattern: "url('https://s3-alpha-sig.figma.com/img/1d64/0f2b/7f173636b2c48ada21040dd26f13bf35?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QorIvt37c2mwJcx9TYug0z59AcbRuYmsd7B1kcRdG41BMyvEq63IwwGybij33Vp-Iw1S75Q~au6lOLZpaZmFv2HsPrwOztCAyTpj69uckyZpCwqaL4Z9R3s4ICpXuNICTV1RlHJ269qU510gU6A28QCFeMH1I25elV3udOat29E-AV3YSBtXNxJPofyCYB5r11fSWb0mB2uxMFxvczNonDgP2uXsB1pGyqrtd1IaiOtJdlC5qPDOB6lXV25cv24esgVRqySk6QR5CUaCF9TnBJBQ-gZLYwJqCRp1DDO3MVy17LA2L9qlamp6TQRzRuvJmvxOTeAzqyPpiwUvx~Yxjw__')",
        footertexture: "url('https://s3-alpha-sig.figma.com/img/1d64/0f2b/7f173636b2c48ada21040dd26f13bf35?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QorIvt37c2mwJcx9TYug0z59AcbRuYmsd7B1kcRdG41BMyvEq63IwwGybij33Vp-Iw1S75Q~au6lOLZpaZmFv2HsPrwOztCAyTpj69uckyZpCwqaL4Z9R3s4ICpXuNICTV1RlHJ269qU510gU6A28QCFeMH1I25elV3udOat29E-AV3YSBtXNxJPofyCYB5r11fSWb0mB2uxMFxvczNonDgP2uXsB1pGyqrtd1IaiOtJdlC5qPDOB6lXV25cv24esgVRqySk6QR5CUaCF9TnBJBQ-gZLYwJqCRp1DDO3MVy17LA2L9qlamp6TQRzRuvJmvxOTeAzqyPpiwUvx~Yxjw__')",
      },
    },
  },
  plugins: [],
};
