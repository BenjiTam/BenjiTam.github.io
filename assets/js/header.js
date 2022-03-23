class MyHeader extends HTMLElement {
    connectedCallback() {
        const current = this.getAttribute('current');
        this.innerHTML = `
        <header>
            <div id="zone1">
              <!-- Logo -->
              <div class="logo">
                <a href="index.html">
                  <img src="../img/logo.svg" alt="">
                </a>
              </div>
        
              <!-- Navigation principale -->
              <nav class="navTop">
                <ul class="navTop_menu">
                  <li>
                    <a class="${current === "accueil" ? 'active' : ''}" href="index.html">Accueil</a>
                  </li>
                  <li>
                    <a class="${current === "about" ? 'active' : ''}" href="about.html">Qui suis-je?</a>
                  </li>
                  <li>
                    <a class="${current === "boutique" ? 'active' : ''}" href="boutique.html">Boutique</a>
                  </li>
                  <li>
                    <a class="${current === "ateliers" ? 'active' : ''}" href="ateliers.html">Les ateliers</a>
                  </li>
                  <li>
                    <a class="${current === "news-agenda" ? 'active' : ''}" href="news-agenda.html">Les news/Agenda</a>
                  </li>
                  <li>
                    <a class="${current === "contact" ? 'active' : ''}" href="contact.html">Contactez-moi</a>
                  </li>
                </ul>
        
                <div class="headerBorder_bottom"></div>
        
                <!-- Navigation secondaire -->
                <nav class="navBottom">
                  <ul>
                    <li class="navCat"><a href="point_ventes.html">
                        <img src="../img/pointsDeVente.svg" alt="">
                        <span class="navCat_title">Points de vente</span>
                      </a>
                    </li>
                    <span class="panierNumber">
                        <p>4</p></span>
                    <li class="navCat">
                        <a href="panier_achats.html">
                        <img src="/img/panier.svg" alt="">
                        <span class="navCat_title">Panier</span>
                      </a>
                    </li>
        
                    <li class="navCat"><a href="wishlist.html">
                        <img src="/img/wishlist.svg" alt="">
                        <span class="navCat_title">Wishlist</span>
                      </a>
                    </li>
        
                    <li class="navCat"><a class="${current === "login" ? 'active' : ''}" href="login.html">
                        <img src="/img/users.svg" alt="">
                        <span class="navCat_title">Mon compte</span>
                      </a>
                    </li>
        
                    <li class="navCat"><a href="#">
                        <img src="/img/search.svg" alt="">
                        <span class="navCat_title">Recherche</span>
                      </a>
                    </li>
                  </ul>
                </nav>
            </div>
          </header>`
    }
}

customElements.define('main-header', MyHeader);