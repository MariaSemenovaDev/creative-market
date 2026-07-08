import { Link } from 'react-router-dom'

import { ROUTES } from '@/shared/config/routes'
import { ShinyText } from '@/shared/ui/shiny-text'

const upcomingBlocks = [
  {
    title: 'Каталог подарков',
    description:
      'Будущая витрина ручной работы: керамика, свечи, украшения, текстиль и небольшие объекты с локальным характером.',
  },
  {
    title: 'Мастера и полки',
    description:
      'Связь товара с мастером и реальной полкой будет показана как часть живого пространства, а не просто как складская метка.',
  },
  {
    title: 'Квиз и бронирование',
    description:
      'Подбор подарка, заявки на аренду и бронь товаров будут встроены в ту же визуальную систему, без ощущения отдельного сервиса.',
  },
] as const

export function HomePage() {
  return (
    <>
      <section className="hero-animated-gradient text-[var(--color-paper)]">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="relative overflow-hidden px-6 py-6 sm:px-8 sm:py-8 lg:min-h-[560px] lg:px-10 lg:py-8">
            <div className="pointer-events-none absolute -right-8 inset-y-0 hidden w-[48%] lg:block">
              <div className="relative ml-auto h-full w-auto max-w-none">
                <img
                  src="/references/brand/1addbadc-9303-4819-9be2-cdb8ee3c00fb.png"
                  alt="Иллюстрация фасада Креатив Маркета"
                  className="relative ml-auto h-full w-auto max-w-none object-contain object-top opacity-90"
                />
                <div className="absolute inset-0 backdrop-blur-xl [mask-image:radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.25)_68%,rgba(0,0,0,0.55)_82%,black_100%)] [-webkit-mask-image:radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.25)_68%,rgba(0,0,0,0.55)_82%,black_100%)]" />
              </div>
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#135592] to-transparent" />
              <img
                src="/references/brand/balloon-cutout.png"
                alt=""
                aria-hidden="true"
                className="balloon-float absolute left-[18%] top-[6%] w-[26%] opacity-95"
              />
            </div>


            <div className="relative z-10 flex max-w-4xl flex-col gap-8">
            <h1 className="max-w-2xl font-[var(--font-display)] text-3xl font-medium tracking-[-0.08em] text-[var(--color-paper)] sm:text-4xl lg:text-[clamp(2.75rem,5vw,4.25rem)]">
              <ShinyText
                text="Творческое пространство, где подарок выглядит как находка, а не как товар с витрины."
                speed={1.8}
                delay={0.2}
                color="rgba(251, 247, 239, 0.72)"
                shineColor="#ffffff"
                spread={150}
                direction="left"
                yoyo
                pauseOnHover={false}
              />
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-paper)]/82 sm:text-lg">
              Креатив Маркет объединяет локальных мастеров, реальные полки,
              события и подарочный выбор в одном живом интерфейсе. Это не
              шаблонный магазин, а цифровая афиша handmade-пространства.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to={ROUTES.catalog}
                style={{ color: '#135592' }}
                className="inline-flex items-center justify-center border border-[var(--color-paper)] bg-[var(--color-cream)] px-5 py-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[#135592] transition hover:bg-[var(--color-paper)]"
              >
                Смотреть каталог
              </Link>
              <Link
                to={ROUTES.rentShelf}
                className="inline-flex items-center justify-center border border-[rgba(243,229,206,0.45)] px-5 py-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-paper)] transition hover:border-[var(--color-paper)] hover:bg-[rgba(255,255,255,0.06)]"
              >
                Арендовать полку
              </Link>
            </div>

            <div className="grid max-w-3xl gap-4 border-t border-[rgba(243,229,206,0.28)] pt-6 sm:grid-cols-3">
              <div>
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-cream)]/70">
                  Адрес
                </p>
                <p className="mt-2 text-sm text-[var(--color-paper)]">Пушкинская, 80</p>
              </div>
              <div>
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-cream)]/70">
                  Формат
                </p>
                <p className="mt-2 text-sm text-[var(--color-paper)]">Локальный маркет ручной работы</p>
              </div>
              <div>
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-cream)]/70">
                  Режим
                </p>
                <p className="mt-2 text-sm text-[var(--color-paper)]">Ежедневно с 10:00 до 20:00</p>
              </div>
            </div>
            </div>

            <div className="relative z-10 mt-8 grid gap-5 lg:hidden">
              <div className="grid gap-5 md:grid-cols-2">

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-page)]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-start lg:justify-between lg:py-14">
          <div className="max-w-2xl">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-warm-brown)]">
              editorial structure / handmade tone
            </p>
            <h2 className="mt-4 font-[var(--font-display)] text-5xl font-medium tracking-[-0.06em] text-[var(--color-brand-blue-deep)] sm:text-6xl">
              Не просто маркет.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-ink)]">
              Основа интерфейса строится как современная цифровая афиша: крупные
              заголовки, спокойные paper-секции, тонкие разделители и редкие
              резкие синие поля. Но бренд остается живым за счет фасада, ручной
              графики и предметного мира вокруг.
            </p>
          </div>

          <div className="w-full max-w-2xl border-t border-[var(--line-soft)] pt-6">
            <div className="grid gap-5">
              {upcomingBlocks.map((block) => (
                <article
                  key={block.title}
                  className="grid gap-4 border-b border-[var(--line-soft)] pb-5 sm:grid-cols-[190px_1fr]"
                >
                  <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-warm-brown)]">
                    Скоро в MVP
                  </p>
                  <div>
                    <h3 className="font-[var(--font-display)] text-2xl font-medium tracking-[-0.05em] text-[var(--color-brand-blue-deep)]">
                      {block.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[var(--color-ink)]">
                      {block.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-blue-deep)] text-[var(--color-paper)]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-14">
          <div className="order-2 lg:order-1">
            <figure className="border border-[rgba(243,229,206,0.3)] bg-[rgba(255,255,255,0.04)] p-4">
              <img
                src="/references/brand/IMG_7247.JPG"
                alt="Горизонтальный брендовый баннер"
                className="w-full object-cover"
              />
            </figure>
          </div>

          <div className="order-1 lg:order-2">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-cream)]/76">
              creative poster / rent shelf
            </p>
            <h2 className="mt-4 max-w-3xl font-[var(--font-display)] text-5xl font-medium tracking-[-0.06em] text-[var(--color-paper)] sm:text-6xl">
              Пространство, куда мастер приходит не за витриной, а за своей сценой.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-paper)]/82">
              Страница аренды полки, условия сотрудничества и события будут
              оформлены как продолжение фирменных постеров: синие поля, кремовые
              акценты, тонкие линии и визуальная ясность без шаблонного
              marketplace-шума.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={ROUTES.rentShelf}
                className="inline-flex items-center justify-center border border-[var(--color-paper)] bg-[var(--color-cream)] px-5 py-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-brand-blue-deep)] transition hover:bg-[var(--color-paper)]"
              >
                Открыть страницу аренды
              </Link>
              <Link
                to={ROUTES.events}
                className="inline-flex items-center justify-center border border-[rgba(243,229,206,0.35)] px-5 py-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-paper)] transition hover:border-[var(--color-paper)]"
              >
                Смотреть события
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
