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

      // create cards 
      function createCards() {
            const cardsContainer = document.getElementById('cardsContainer');
            cardsContainer.classList.add('grid')
            for (let i = 0; i < 9; i++) {
                  const cards = document.createElement('div');
                  cards.className = 'cards'
                  cards.id = 'cards'
                  cards.style.backgroundColor = 'red'
                  cardsContainer.appendChild(cards);
            }

            const imgData = [
                  { url: 'img/sam.png', title: 'cards image', width: '150px' },
                  { url: 'img/card-one.jpg', title: 'cards image', width: '150px' },
                  { url: 'img/card-2.jpg', title: 'cards image', width: '150px' },
                  { url: 'img/card-3.jpg', title: 'cards image', width: '150px' },
                  { url: 'img/Dessert.jpeg', title: 'cards image', width: '150px' },
                  { url: 'img/pasta.jpg', title: 'cards image', width: '150px' },
                  { url: 'img/withh1.jpg', title: 'cards image', width: '150px' },
                  { url: 'img/PIC-description-1.jpg', title: 'cards image', width: '150px' },
                  { url: 'img/linda.png', title: 'cards image', width: '150px' },

            ]
            imgData.forEach(function (item, index) {
                  const createImg = document.createElement('img');
                  const pragraph = document.createElement('p');
                  pragraph.textContent = item.title;
                  createImg.src = item.url;
                  createImg.id = item.title + `-${index + 1}`;
                  createImg.style.width = item.width;
                  console.log(createImg);
                  console.log(pragraph);

                  cardsContainer.appendChild(createImg);
                  cardsContainer.appendChild(pragraph);

            })
      }
      createCards();


      // function expressing() {
      //       const cardsContainer = document.getElementById('cardsContainer');
      //       const data = [
      //             { text: 'pragraph-1', color: 'red', id: 'pragraph-1' },
      //             { text: 'pragraph-2', color: 'green', id: 'pragraph-2' },
      //             { text: 'pragraph-3', color: 'yellow', id: 'pragraph-3' },
      //             { text: 'pragraph-4', color: 'white', id: 'pragraph-4' }
      //       ]
      //       data.forEach(item =>{
      //             const element = document.createElement('p');
      //             element.textContent = item.text;
      //             element.id = item.id;
      //             element.style.color = item.color;
      //             cardsContainer.appendChild(element)
      //       })
      // }
      // expressing()



});


