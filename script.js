document.addEventListener('DOMContentLoaded', function () {
      // creating nav 
      const navBar = document.createElement('nav');
      navBar.className = 'navBar';
      this.body.appendChild(navBar)

      // Create ul 
      function createUl() {
            const data = ['logoContainer', 'linkContainer', 'loginContainer'];
            data.forEach(function (element) {
                  const createUl = document.createElement('ul');
                  createUl.id = element;
                  navBar.appendChild(createUl);
            })
      }
      createUl();

      // create li + a for firs ul container
      function createLiForLogo() {
            const logoContainer = document.getElementById('logoContainer');
            const logoLi = document.createElement('li');
            logoContainer.appendChild(logoLi)
            // create a
            const link = document.createElement('a')
            link.textContent = 'logo';
            link.href = '#logo';
            logoLi.appendChild(link);
      }
      createLiForLogo();

      // crate nav items

      function createLinkItems() {
            const linkItemsContainer = document.getElementById('linkContainer');
            linkItemsContainer.classList.add('add');
            const menuItems = ['home', 'about', 'services', 'contact'];
            // for loop to create a
            for (let i = 0; i < 4; i++) {
                  const list = document.createElement('li');
                  const links = document.createElement('a');

                  links.textContent = menuItems[i]
                  links.href = `#${menuItems[i]}`;
                  // append them to their container
                  list.appendChild(links)
                  linkItemsContainer.appendChild(list)
            }
      }
      createLinkItems();

      // create logn section 

      function createLogin() {
            const loginContainer = document.getElementById('loginContainer');
            const loginLi = document.createElement('li');
            const loginLink = document.createElement('a');
            loginLink.id = 'loginLink';
            loginLink.href = '#login';
            loginLink.textContent = 'login'
            loginContainer.appendChild(loginLi);
            loginLi.appendChild(loginLink);
      }
      createLogin();
      function createContentContainer() {
            const contentContainer = document.createElement('main');
            contentContainer.className = 'contentContainer';
            contentContainer.id = 'contentContainer';
            document.body.appendChild(contentContainer);

            // create div for the cards container 

            const cardsContainer = document.createElement('div');
            cardsContainer.className = 'cardsContainer';
            cardsContainer.id = 'cardsContainer';
            contentContainer.appendChild(cardsContainer);
      }
      createContentContainer()

});