class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` <footer>
        <div id="zone2">
        <p class="follow">Suivez-moi sur</p>
        <div id="socialNetwork">
          <ul class="footerNetwork">
            <li id="social_icon">
              <a href="https://www.facebook.com/lesateliersdelilo/">
                <img class="iconColor" src="../img/facebook.svg">
              </a>
            </li>
    
            <li id="social_icon">
              <a href="https://www.instagram.com/lesateliersdelilo/">
                <img  class="iconColor" src="../img/instagram.svg">
              </a>
            </li>
          </ul>
        </div>
    
        <div id="footerNav">
          <ul class="footer">
            <li>
              <a href="index.html">Accueil</a>
            </li>
            <li>
              <a href="boutique.html">Boutique</a>
            </li>
            <li>
              <a href="ateliers.html">Les ateliers</a>
            </li>
            <li>
              <a href="news/agenda.html">Les news/agenda</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li>
              <a href="cgv.html">CGV</a>
            </li>
            <li>
              <a href="cgu.html">CGU</a>
            </li>
            <li>
              <a href="http://127.0.0.1:5501/pages/rgpd.html">RGPD</a>
            </li>
            <li>
              <a href="account.html">Mon compte</a>
            </li>
          </ul>
        </div>
    
        <div class="footerBorder_bottom"></div>
    
        <p class="copyright"><strong>© 2022, Les ateliers de Lilo</strong> | fait avec le <img class="JuVaBen"
            src="../img/JuVaBen.svg"> par la Team JuVaBen</p>
      <div>
      </footer>`
    }
}

customElements.define('main-footer', MyFooter);