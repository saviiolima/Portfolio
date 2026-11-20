import { useEffect, useState } from "react";

// Altura do cabeçalho fixo
const HEADER_OFFSET = 80;

/**
 * Devolve o id da seção que está sendo lida, conforme a rolagem.
 * Retorna null quando `enabled` é falso (ex.: fora da página principal).
 */
export function useActiveSection(ids: readonly string[], enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return undefined;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const probe = HEADER_OFFSET + window.innerHeight * 0.3;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      let current = ids[0] ?? null;
      if (atBottom) {
        // A última seção é curta e nunca chega até a linha de leitura
        current = ids[ids.length - 1] ?? null;
      } else {
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= probe) current = id;
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids, enabled]);

  return active;
}
