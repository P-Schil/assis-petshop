import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return <div className="flex min-h-screen items-center justify-center bg-white px-4"><div className="text-center"><h1 className="text-7xl font-bold text-[#1D4ED8]">404</h1><p className="mt-3 text-slate-600">Página não encontrada.</p><Link to="/" className="mt-6 inline-flex rounded-full bg-[#1D4ED8] px-5 py-2.5 font-bold text-white">Voltar ao início</Link></div></div>;
}
function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error); const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return <div className="flex min-h-screen items-center justify-center bg-white px-4"><div className="text-center"><h1 className="text-xl font-bold">Não foi possível carregar a página.</h1><button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-full bg-[#1D4ED8] px-5 py-2.5 font-bold text-white">Tentar novamente</button></div></div>;
}
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({ meta: [
    { charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: "Assis Pet Shop | Cuidado completo e especializado" },
    { name: "description", content: "Assis Pet Shop: cuidado completo e especializado para seu pet em São Paulo." },
    { name: "author", content: "Assis Pet Shop" }, { property: "og:title", content: "Assis Pet Shop | Cuidado completo e especializado" },
    { property: "og:description", content: "Pet shop e cuidados veterinários com atendimento próximo e especializado." }, { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" }
  ], links: [{ rel: "stylesheet", href: appCss }, { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }] }),
  shellComponent: RootShell, component: RootComponent, notFoundComponent: NotFoundComponent, errorComponent: ErrorComponent,
});
function RootShell({ children }: { children: ReactNode }) { return <html lang="pt-BR"><head><HeadContent /></head><body>{children}<Scripts /></body></html>; }
function RootComponent() { const { queryClient } = Route.useRouteContext(); return <QueryClientProvider client={queryClient}><Outlet /></QueryClientProvider>; }
