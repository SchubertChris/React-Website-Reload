import React from 'react';
import '../styles/lernstoff.css';

const Lernen = () => {
  return (
    <div>
      <header>
        <a href="../index.html">
          <img src="../Chris-Schubert-dark.gif" alt="logo" />
        </a>
        <br />
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <i className="fas fa-moon" style={{ fontSize: '1.7rem' }}> /</i>
        <i className="fas fa-sun" style={{ fontSize: '1.7rem' }}></i>
        <a href="#contact-form" id="new-customer">Deine Seite</a>
        <nav>
          <ul>
            <a href="../pages/galerie.html">
              <li className="MA">Meine Arbeit</li>
            </a>
            <a className="ZL" href="../pages/lernstoff.html">
              <li>Zum Lernen</li>
            </a>
          </ul>
        </nav>
        <hr />
      </header>

      <main>
        <div className="disclaimer">
          <p><strong>Disclaimer:</strong> Einige der Links auf dieser Seite sind Werbelinks. Wenn du auf diese Links klickst und einen Kauf tätigst, erhalte ich eine kleine Provision ohne zusätzliche Kosten für dich. Vielen Dank für deine Unterstützung!</p>
        </div>

        <div className="lerne-programmieren">
          <h2><i className="fas fa-code"></i> HTML, CSS und JavaScript lernen</h2>
          <p>Hier findest du Ressourcen und Tutorials, um die Grundlagen von HTML, CSS und JavaScript zu erlernen.</p>
          <ul>
            <li><a href="https://www.w3schools.com/html/" target="_blank"><i className="fab fa-html5"></i> HTML Tutorial</a></li>
            <li><a href="https://www.w3schools.com/css/" target="_blank"><i className="fab fa-css3-alt"></i> CSS Tutorial</a></li>
            <li><a href="https://www.w3schools.com/js/" target="_blank"><i className="fab fa-js"></i> JavaScript Tutorial</a></li>
          </ul>
        </div>

        <div className="lerne-krypto">
          <h2><i className="fas fa-coins"></i> Kryptowährungen verstehen und investieren</h2>
          <p>Erfahre mehr über Kryptowährungen und wie du in sie investieren kannst.</p>
          <ul>
            <li><a href="https://www.coindesk.com/learn/" target="_blank"><i className="fas fa-book"></i> Krypto Grundlagen</a></li>
            <li><a href="https://www.coinbase.com/learn" target="_blank"><i className="fas fa-chart-line"></i> Investieren in Krypto</a></li>
            <li><a href="https://academy.binance.com/en" target="_blank"><i className="fas fa-university"></i> Krypto Akademie</a></li>
          </ul>
        </div>

        <div className="tracke-deine-finanzen">
          <h2><i className="fas fa-wallet"></i> Finanztracker</h2>
          <p>Behalte den Überblick über deine Finanzen mit unserem Finanztracker.</p>
          <ul>
            <li><a href="https://www.getmoss.com/de-de/ausgabenmanagement-software?utm_term=tool%20ausgaben&utm_campaign=Search-DE-Gen-Spend-Management-T2&utm_source=adwords&utm_medium=ppc&hsa_acc=9925375093&hsa_cam=20921107370&hsa_grp=163173575954&hsa_ad=711002083083&hsa_src=g&hsa_tgt=kwd-1479372391326&hsa_kw=tool%20ausgaben&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQiAvvO7BhC-ARIsAGFyToXF7WajZBXmvD8HK9u4Tj-5-s1CFKcU21P2RotUGkhIW4-e_2zLR1saAqucEALw_wcB" target="_blank"><i className="fas fa-money-bill-wave"></i> Einnahmen und Ausgaben verfolgen</a></li>
            <li><a href="https://get.finanzguru.de/google/desktop-1/?gad_source=1&gclid=Cj0KCQiAvvO7BhC-ARIsAGFyToWPxTDcTrmoN8yIuSVQop4_sDygyhIm4zjcM-TnjCynL5jAfm8q3uAaAtmPEALw_wcB" target="_blank"><i className="fas fa-calculator"></i> Budgetplanung</a></li>
            <li><a href="https://www.canva.com/de_de/erstellen/vision-boards/" target="_blank"><i className="fas fa-bullseye"></i> Finanzielle Ziele setzen</a></li>
          </ul>
        </div>

        <div className="webentwicklung-tools">
          <h2><i className="fas fa-tools"></i> Webentwicklung Tools</h2>
          <p>Entdecke nützliche Tools für die Webentwicklung.</p>
          <ul>
            <li><a href="https://code.visualstudio.com/" target="_blank"><i className="fas fa-code"></i> Visual Studio Code</a></li>
            <li><a href="https://www.gitkraken.com/" target="_blank"><i className="fas fa-code-branch"></i> GitKraken</a></li>
            <li><a href="https://www.postman.com/" target="_blank"><i className="fas fa-network-wired"></i> Postman</a></li>
          </ul>
        </div>

        <div className="online-marketing">
          <h2><i className="fas fa-bullhorn"></i> Online Marketing</h2>
          <p>Lerne, wie du deine Marke online vermarkten kannst.</p>
          <ul>
            <li><a href="https://ads.google.com/" target="_blank"><i className="fas fa-ad"></i> Google Ads</a></li>
            <li><a href="https://www.facebook.com/business/ads" target="_blank"><i className="fab fa-facebook"></i> Facebook Ads</a></li>
            <li><a href="https://analytics.google.com/" target="_blank"><i className="fas fa-chart-pie"></i> Google Analytics</a></li>
          </ul>
        </div>

        <div className="projektmanagement">
          <h2><i className="fas fa-tasks"></i> Projektmanagement</h2>
          <p>Verwalte deine Projekte effizient mit diesen Tools.</p>
          <ul>
            <li><a href="https://trello.com/" target="_blank"><i className="fas fa-columns"></i> Trello</a></li>
            <li><a href="https://asana.com/" target="_blank"><i className="fas fa-tasks"></i> Asana</a></li>
            <li><a href="https://www.jira.com/" target="_blank"><i className="fas fa-project-diagram"></i> Jira</a></li>
          </ul>
        </div>

        <div className="schlusswort">
          <h2><i className="fas fa-pen-alt"></i> Danke dir</h2>
          <p>dass du meine Website besucht hast. Ich hoffe, du hast nützliche Informationen gefunden und fühlst dich inspiriert, deine eigenen Projekte zu starten. Wenn du Fragen hast oder Unterstützung benötigst, zögere nicht, mich zu kontaktieren.</p>
        </div>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-section links">
            <h1>Quick Links</h1>
            <ul>
              <li>
                <a href="#" target="_blank">Meine Arbeit <span><i className="fas fa-briefcase"></i></span></a>
              </li>
              <li>
                <a href="./galerie.html" target="_blank">Galerie <span><i className="fas fa-images"></i></span></a>
              </li>
              <li>
                <a href="./datenschutz.html" target="_blank">Datenschutz <span><i className="fas fa-shield-alt"></i></span></a>
              </li>
              <li>
                <a href="./impressum.html" target="_blank">Impressum <span><i className="fas fa-file-alt"></i></span></a>
              </li>
            </ul>
          </div>
          <div className="footer-section contact-form">
            <h1>Kontakt</h1>
            <form id="contact-form">
              <input type="email" name="email" className="text-input contact-input" placeholder="Deine E-Mail-Adresse" required />
              <textarea id="message" name="message" className="text-input contact-input" placeholder="Deine Nachricht" required></textarea>
              <button type="submit" className="btn btn-big contact-btn">
                <i className="fas fa-envelope"></i> Absenden
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; Chris Schubert | Designed by Chris Schubert
        </div>
      </footer>
      <script src="../secoundary.js"></script>
    </div>
  );
};

export default Lernen;