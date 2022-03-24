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
    
                <li class="navCat"><a href="login.html">
                    <img src="/img/users.svg" alt="">
                    <span class="navCat_title">Mon compte</span>
                  </a>
                </li>
    
                <li class="navCat" onclick="on()"><a href="#">
                    <img src="/img/search.svg" alt="">
                    <span class="navCat_title">Recherche</span>
                  </a>
                </li>
              </ul>
            </nav>
        </div>
      </header>

<main>    

        <div id="overlaySearch">    

            <!-- Fermer l'overlay -->
            <div class="overlayClose" onclick="off()">
                <img src="../img/Exit-icon.png" alt="fermeture recherche">
            </div>
            
            <!-- Recherche + Filtres -->
            <div class="searchBar_shop overlay">
                <form>
                    <input type="search" id="shopSearch" name="" placeholder="Rechercher un produit, une news, un évenement sur le site de Lilo">
                    <button class="shopSearch">
                        <img src="/img/search.svg" alt="">
                    </button>
                </form>
            </div>
        
            <!-- Produit trouvé dans la recherche -->
            <section id="boutique">
        
                <!--  Bloc Tuile produit | conatainer -->
                <div class="shop_offres_container">
        
                    <!-- Tuiles | Produit -->
                    <div class="wishlist_offres">
                        <span class="wishlist_product">#Badges</span>
                        <a href="#"><div class="wishlist_wishlist"></div></a>
                        <a href="#"><img class="wishlist_produit" src="../img/Produits_site/Badges/aller_loin.webp" alt="produit"></a>
                        <span class="wishlist_description">Jusqu'ou peut-on aller trop loin</span>
                        <span class="wishlist_price">5,00€</span>
                        <a class="wishlist_button_panier">
                            <img src="../img/cadi.svg">
                            <span>Ajouter</span>
                        </a>
                    </div>
        
                    <div class="wishlist_offres">
                        <span class="wishlist_product">#Badges</span>
                        <a href="#"><div class="wishlist_wishlist"></div></a>
                        <a href="#"><img class="wishlist_produit" src="../img/Produits_site/Badges/avis_respect_rassemble.webp" alt="produit"></a>
                        <span class="wishlist_description">Les avis divergent Le respect rassemble</span>
                        <span class="wishlist_price">5,00€</span>
                        <a class="wishlist_button_rupture" >
                            <span>Rupture de stock</span>
                        </a>
                    </div>
        
                    <div class="wishlist_offres">
                        <span class="wishlist_product">#Badges</span>
                        <a href="#"><div class="wishlist_wishlist"></div></a>
                        <a href="#"><img class="wishlist_produit" src="../img/Produits_site/Badges/courageuse_trouillarde.webp" alt="produit"></a>
                        <span class="wishlist_description">La conne ne tombe jamais loin de l'arbre</span>
                        <span class="wishlist_price">2,00€</span>
                        <a class="wishlist_button_rupture" >
                            <span>Rupture de stock</span>
                        </a>
                    </div>
        
                    <div class="wishlist_offres">
                        <span class="wishlist_product">#Badges</span>
                        <a href="#"><div class="wishlist_wishlist"></div> </a>
                        <a href="#"><img class="wishlist_produit" src="../img/Produits_site/Badges/croitre_en_soi.webp" alt="croire"></a>
                        <span class="wishlist_description">Il faut croire en soi</span>
                        <span class="wishlist_price">2,00€</span>
                        <a class="wishlist_button_rupture" >
                            <span>Rupute de stock</span>
                        </a>
                    </div>
                </div>
        
                <div class="wishlist_container">
                  
                    <div class="wishlist_offres">
                        <span class="wishlist_product">#Badges</span>
                        <a href="#"><div class="wishlist_wishlist"></div> </a>
                        <a href="#"><img class="wishlist_produit" src="../img/Produits_site/Badges/haltère_ego.webp" alt="ego"></a>
                        <span class="wishlist_description">Haltère ego</span>
                        <span class="wishlist_price">5,00€</span>
                        <a class="wishlist_button_panier" href="#" >
                            <img src="../img/cadi.svg">
                            <span>Ajouter</span>
                        </a>
                    </div>
        
                    <div class="wishlist_offres">
                        <span class="wishlist_product">#Badges</span>
                        <a href="#"><div class="wishlist_wishlist"></div> </a>
                        <a href="#"><img class="wishlist_produit" src="../img/Produits_site/Badges/monde_brut.webp" alt="brut"></a>
                        <span class="wishlist_description">Monde de brut</span>
                        <span class="wishlist_price">2,00€</span>
                        <a class="wishlist_button_panier" href="#" >
                            <img src="../img/cadi.svg">
                            <span>Ajouter</span>
                        </a>
                    </div>
        
                    <div class="wishlist_offres">
                        <span class="wishlist_product">#Badges</span>
                        <a href="#"><div class="wishlist_wishlist"></div> </a>
                        <a href="#"><img class="wishlist_produit" src="../img/Produits_site/Badges/hauts_talents.webp" alt="talent"></a>
                        <span class="wishlist_description">Mettez vos hauts talents</span>
                        <span class="wishlist_price">5,00€</span>
                        <a class="wishlist_button_panier" href="#" >
                            <img src="../img/cadi.svg">
                            <span>Ajouter</span>
                        </a>
                    </div>
                </div>
            </section>  
        </div>`
    }
}

customElements.define('main-header', MyHeader);