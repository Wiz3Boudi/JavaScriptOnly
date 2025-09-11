document.addEventListener('DOMContentLoaded', function () {
      let current = 0;

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
            // create main container
            const contentContainer = document.createElement('main');
            contentContainer.className = 'contentContainer';
            contentContainer.id = 'contentContainer';
            document.body.appendChild(contentContainer);

            // create first section container
            const internalContainer = document.createElement('div');
            internalContainer.className = 'internalContainer';
            internalContainer.id = 'cardsContainer';
            contentContainer.appendChild(internalContainer);

            //create cards container
            const bigCArd = document.createElement('div');
            bigCArd.id = 'bigCArd';
            bigCArd.classList.add('bigCArd')
            internalContainer.appendChild(bigCArd);

            // create div for first elements
            const article = document.createElement('div');
            article.id = 'artical';
            article.className = 'artical';
            bigCArd.appendChild(article);
            // create  h1
            const hOne = document.createElement('h1');
            hOne.textContent = 'New Features';
            article.appendChild(hOne)

            // create pragraph 
            const pragraph = document.createElement('p');
            pragraph.textContent = 'Explor our new items and see what is new'
            article.appendChild(pragraph);

            // create ul 
            function crateMenu() {
                  const menuContain = document.createElement('ul');
                  article.appendChild(menuContain);

                  const listData = [
                        { text: 'reducing wrinkles and skin discolorations.' },
                        { text: 'based retinol alternative with antioxidant.' },
                        { text: 'Promote healthy toe splay and alignment.' },
                        { text: 'relieving foot pain and improving balance.' },
                        { text: 'View our new AI agent' },
                        { text: 'contact us for more deteals' }
                  ]
                  // console.log(listData)
                  listData.forEach(function (item, index) {
                        const strong = document.createElement('p')
                        strong.textContent = item.text
                        const list = document.createElement('li')
                        list.classList.add('list')
                        list.appendChild(strong)
                        menuContain.appendChild(list)
                  })
            }
            crateMenu()
            // create slides
            function slides() {
                  const bigCArd = document.getElementById('bigCArd');
                  // create slide container 
                  const slide = document.createElement('div');
                  slide.id = 'slide';
                  slide.className = 'slide';
                  bigCArd.appendChild(slide);

                  const imgData = [
                        { src: 'img/Dessert.jpeg', title: 'card img', alt: 'card img' },
                        { src: 'img/card-2.jpg', title: 'card img', alt: 'card img' },
                        { src: 'img/pasta.jpg', title: 'card img', alt: 'card img' },
                        { src: 'img/card-one.jpg', title: 'card img', alt: 'card img' }
                  ]
                  // forEach loop 
                  imgData.forEach(function (item, index) {
                        const imgDiv = document.createElement('div');
                        imgDiv.id = 'imgDiv';
                        imgDiv.className = 'imgDiv';
                        slide.appendChild(imgDiv);
                        const img = document.createElement('img');
                        img.src = item.src;
                        img.title = item.title;
                        img.alt = item.alt;
                        img.className = 'img'
                        imgDiv.appendChild(img);
                  })

                  // create last part in the card
                  const linkGo = document.createElement('div');
                  linkGo.id = 'linkGo';
                  linkGo.className = 'linkGo';
                  bigCArd.appendChild(linkGo);
                  // console.log(linkGo)
                  // create p 
                  const viewLink = document.createElement('a');
                  viewLink.href = '#view'
                  viewLink.textContent = 'View more  >'
                  // console.log(viewLink)

                  linkGo.appendChild(viewLink);
                  // console.log(span)
            }
            slides();
      }
      createContentContainer()

      // create slide function 
      function slideShow() {
            const imgDiv = document.querySelectorAll('#imgDiv');
            if (current >= imgDiv.length) { current = 0 };
            if (current < 0) { current = imgDiv.length - 1 };
            console.log(imgDiv)
            imgDiv.forEach((item, index) => {
                  item.style.display = index === current ? 'block' : 'none';
            })
      }
      
      slideShow();

      // counter
      // const imgDiv1 = document.getElementById('imgDiv-1');
      // imgDiv1.style.display = 'block';
      // const imgDiv2 = document.getElementById('imgDiv-2');
      // imgDiv2.style.display = 'none';
      // const imgDiv3 = document.getElementById('imgDiv-3');
      // imgDiv3.style.display = 'none';
      // const imgDiv4 = document.getElementById('imgDiv-4');
      // imgDiv4.style.display = 'none';
});
