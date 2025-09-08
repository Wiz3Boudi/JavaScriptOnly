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
            loginLink.href = 'https://getingdata.netlify.app';
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

            const internalContainer = document.createElement('div');
            internalContainer.className = 'internalContainer';
            internalContainer.id = 'cardsContainer';
            contentContainer.appendChild(internalContainer);

            const bigCArd = document.createElement('div');
            bigCArd.id = 'bigCArd';
            bigCArd.classList.add('bigCArd')
            internalContainer.appendChild(bigCArd);
            // create  h1
            const hOne = document.createElement('h1');
            hOne.textContent = 'New Features';
            bigCArd.appendChild(hOne)
            // create pragraph 
            const pragraph = document.createElement('p');
            pragraph.textContent = 'Explor our new items and see what is new'
            bigCArd.appendChild(pragraph);
            // create ul 
            function crateMenu() {
                  const menuContain = document.createElement('ul');
                  bigCArd.appendChild(menuContain);

                  const listData = [
                        { text: 'reducing wrinkles and skin discolorations.' },
                        { text: 'based retinol alternative with antioxidant.' },
                        { text: 'Promote healthy toe splay and alignment.' },
                        { text: 'relieving foot pain and improving balance.' },
                  ]
                  // console.log(listData)
                  listData.forEach(function(item, index){
                        const strong = document.createElement('strong')
                        strong.textContent = item.text
                        const list = document.createElement('li')
                        list.classList.add('list')
                        list.appendChild(strong)
                        menuContain.appendChild(list)
                  })
            }
            crateMenu()

      }
      createContentContainer()

});