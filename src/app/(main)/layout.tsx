import "~/styles/index.css";

import { Container, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";

import { Header } from "~/app/components/Header";
import { SearchBar } from "~/app/components/SearchBar";
import { theme } from "~/theme";
import { app } from "../lib/common";

export const metadata: Metadata = {
  title: {
    template: `%s — ${app.name}`,
    default: `${app.name}: Información del clima`,
  },
  description: `Obtén información actualizada sobre el clima de cualquier ciudad.
  ¡Simplemente escribe el nombre de la ciudad y descubre cómo está el
  clima en este momento! Además, puedes guardar tus ciudades favoritas
  para acceder fácilmente a su pronóstico en cualquier momento.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Container
              maxWidth="md"
              sx={{
                display: "flex",
                gap: "16px",
                flexDirection: "column",
                paddingTop: "20px",
                paddingBottom: "16px",
              }}
            >
              <SearchBar />
              {children}
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
