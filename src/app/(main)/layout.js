export const metadata = {
  title: "Charles & Meline ♥️ Invitation de mariage",
  description: "Nous vous invitons cordialement à partager avec nous cette journée importante et mémorable de notre vie.",
  openGraph: {
    title: "Charles & Meline ♥️ Invitation de mariage",
    type: "website",
    url: "https://wedding-flame-gamma.vercel.app/",
    images: [
      {
        url: "https://wedding-flame-gamma.vercel.app/img/banner/og_banner.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.png" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/themify-icons.css" />
        <link rel="stylesheet" href="/css/nice-select.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/gijgo.css" />
        <link rel="stylesheet" href="/css/slicknav.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
