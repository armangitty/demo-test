

<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Solrosen — Vegetarisk restaurang i Haga, Göteborg</title>
    <meta
      name="description"
      content="Solrosen är Göteborgs äldsta rent vegetariska restaurang — en krog i Haga med dagensrätter, vegan- och glutenfria alternativ."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700&family=Figtree:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/styles.css" />
    <link rel="icon" href="img/sunflower.svg" type="image/svg+xml" />
  </head>
  <body>
    <div class="ambient" aria-hidden="true"></div>

    <header class="site-header" data-header>
      <a class="brand-mark" href="#top" aria-label="Solrosen startsida">
        <img src="img/sunflower.svg" alt="" width="28" height="28" />
        <span>Solrosen</span>
      </a>

      <nav class="nav" data-nav aria-label="Huvudmeny">
        <a href="#meny">Meny</a>
        <a href="#om">Om oss</a>
        <a href="#besok">Besök</a>
        <a class="nav-cta" href="tel:+46317116697">Ring oss</a>
      </nav>

      <button class="nav-toggle" type="button" data-nav-toggle aria-expanded="false" aria-controls="mobile-nav">
        <span class="sr-only">Meny</span>
        <span></span>
        <span></span>
      </button>
    </header>

    <div class="mobile-nav" id="mobile-nav" data-mobile-nav hidden>
      <a href="#meny">Meny</a>
      <a href="#om">Om oss</a>
      <a href="#besok">Besök</a>
      <a href="tel:+46317116697">031-711 66 97</a>
    </div>

    <main id="top">
      <section class="hero" aria-label="Välkommen">
        <div class="hero-media" aria-hidden="true">
          <img src="img/hero.jpg" alt="" class="hero-image" />
          <div class="hero-veil"></div>
        </div>

        <div class="hero-content">
          <img class="hero-flower" src="img/sunflower.svg" alt="" width="72" height="72" data-float />
          <p class="hero-kicker">Vegetarisk krog i Haga</p>
          <h1 class="hero-brand">Solrosen</h1>
          <p class="hero-lead">
            Göteborgs äldsta rent vegetariska restaurang — vardagsmat med värme, sedan länge samma hus och samma hjärta.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#meny">Se dagens meny</a>
            <a class="btn btn-ghost" href="#besok">Hitta hit</a>
          </div>
        </div>
      </section>

      <section class="section meny" id="meny">
        <div class="section-head reveal">
          <p class="eyebrow">Dagens meny</p>
          <h2>Vad serveras idag</h2>
          <p class="section-lead">
            Flera dagensrätter, varav minst en är vegan och glutenfri. Mat serveras fram till 30 minuter innan stängning.
          </p>
        </div>

        <ul class="menu-list">
          <li class="menu-item reveal">
            <div class="menu-item-top">
              <h3>Dagens Husman</h3>
              <span class="price">130 kr</span>
            </div>
            <p>Broccoligratäng med kantarellsås samt råris, potatismos eller ugnsstekt potatis.</p>
          </li>
          <li class="menu-item reveal">
            <div class="menu-item-top">
              <h3>Dagens Vegan</h3>
              <span class="price">130 kr</span>
            </div>
            <p>Grönsakschipotlegryta med majs &amp; baljväxter samt råris eller ugnstekt potatis.</p>
          </li>
          <li class="menu-item reveal">
            <div class="menu-item-top">
              <h3>Dagens Lasagne</h3>
              <span class="price">130 kr</span>
            </div>
            <p>Lins- och tomatbaserad.</p>
          </li>
          <li class="menu-item reveal">
            <div class="menu-item-top">
              <h3>Dagens Soppa</h3>
              <span class="price">110 kr</span>
            </div>
            <p>Spenatsoppa.</p>
          </li>
          <li class="menu-item reveal">
            <div class="menu-item-top">
              <h3>Dagens Sallad</h3>
              <span class="price">100 kr</span>
            </div>
            <p>Enbart salladsbuffé.</p>
          </li>
        </ul>

        <p class="menu-note reveal">Senast uppdaterad 31 juli 2026</p>
      </section>

      <section class="section about" id="om">
        <div class="about-grid">
          <div class="about-copy reveal">
            <p class="eyebrow">Om Solrosen</p>
            <h2>En vegetarisk klassiker i Haga</h2>
            <p>
              Välkommen till Solrosen! Vi är en vegetarisk krog belägen i den pittoreska stadsdelen Haga i Göteborg.
              Solrosen är den äldsta rent vegetariska restaurangen i stan — och ett av de ställen som funnits längst
              med samma ägare och personal.
            </p>
            <p>
              Vi är en krog med fullständiga rättigheter. Det går bra att boka bord. Mat för avhämtning ordnar vi, och
              vi levererar gärna till fester och andra tillställningar. Utbud, pris och leverans görs upp i samråd med
              kocken.
            </p>
            <p class="signoff">Hjärtligt välkomna<br /><span>Ägare och personal på Solrosen</span></p>
          </div>

          <figure class="about-visual reveal" data-parallax>
            <img src="img/dish.jpg" alt="Färgrik vegetarisk rätt med färska grönsaker" />
          </figure>
        </div>
      </section>

      <section class="section visit" id="besok">
        <div class="section-head reveal">
          <p class="eyebrow">Besök oss</p>
          <h2>Hitta hit</h2>
          <p class="section-lead">Kaponjärgatan 4 A, mitt i Haga — ring gärna om ni vill boka bord.</p>
        </div>

        <div class="visit-layout">
          <div class="visit-info reveal">
            <div class="info-block">
              <h3>Öppettider</h3>
              <dl class="hours">
                <div>
                  <dt>Måndag–Tisdag</dt>
                  <dd>11:30–18:00</dd>
                </div>
                <div>
                  <dt>Onsdag–Torsdag</dt>
                  <dd>11:30–20:00</dd>
                </div>
                <div>
                  <dt>Fredag</dt>
                  <dd>11:30–23:30</dd>
                </div>
                <div>
                  <dt>Lördag</dt>
                  <dd>14:00–20:00</dd>
                </div>
                <div>
                  <dt>Söndag &amp; helgdagar</dt>
                  <dd>Stängt</dd>
                </div>
              </dl>
              <p class="fineprint">Mat serveras fram till 30 minuter innan stängning.</p>
            </div>

            <div class="info-block">
              <h3>Kontakt</h3>
              <p>
                <a href="mailto:restaurangsolrosen@gmail.com">restaurangsolrosen@gmail.com</a><br />
                Tel <a href="tel:+46317116697">031-711 66 97</a><br />
                Fax 031-711 04 40
              </p>
              <address>
                Restaurang Solrosen<br />
                Kaponjärgatan 4 A<br />
                413 02 Göteborg
              </address>
            </div>
          </div>

          <div class="visit-map reveal">
            <iframe
              title="Karta till Restaurang Solrosen"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Kaponj%C3%A4rgatan+4A,+413+02+G%C3%B6teborg&output=embed"
            ></iframe>
            <a
              class="map-link"
              href="https://www.google.com/maps/search/?api=1&query=Kaponj%C3%A4rgatan+4A,+413+02+G%C3%B6teborg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Öppna i Google Maps
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-brand">
        <img src="img/sunflower.svg" alt="" width="36" height="36" />
        <div>
          <strong>Solrosen</strong>
          <span>Vegetarisk restaurang · Haga</span>
        </div>
      </div>
      <p>© <span data-year></span> Restaurang Solrosen</p>
    </footer>

    <script src="js/main.js"></script>
  </body>
</html>

# Restaurang Solrosen

Modern ombyggnad av [restaurangsolrosen.se](https://www.restaurangsolrosen.se) — vegetarisk krog i Haga, Göteborg.

## Kör lokalt

```bash
python3 -m http.server 8899
```

Öppna [http://127.0.0.1:8899](http://127.0.0.1:8899).

## Innehåll

- Startsida med hero, dagens meny, om oss och besöksinformation
- Interaktiv karta till Kaponjärgatan 4 A
- Responsiv layout för mobil och desktop
