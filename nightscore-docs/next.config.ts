import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // basePath: '/NOMBRE-DEL-REPOSITORIO', // <-- DESCOMENTA Y CAMBIA ESTO si tu URL en github no es la principal (tu-usuario.github.io) sino que tiene nombre de proyecto (tu-usuario.github.io/festify-docs)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
