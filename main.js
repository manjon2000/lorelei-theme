document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".manjon-container-tabs").forEach((container) => {
    let wrapperItemsTabs = container.querySelector(
      ".manjon-container-tabs__blocks"
    );
    let wrapperItemsImages = container.querySelector(
      ".manjon-container-tabs__pictures"
    );

    let itemsTabs = wrapperItemsTabs.querySelectorAll(
      ".manjon-container-tabs__blocks-item"
    );
    let itemsImages = wrapperItemsImages.querySelectorAll(
      ".manjon-container-tabs__pictures-img"
    );

    const showFirstElement = (items, className) => {
      items[0].classList.add(className);
    };

    showFirstElement(itemsTabs, "manjon-container-tabs__blocks-item--show");
    showFirstElement(itemsImages, "manjon-container-tabs__pictures-img--show");

    itemsTabs.forEach((tab, index) => {
      tab.addEventListener("mouseenter", () => {
        removeClassShowTab(itemsTabs);
        tab.classList.add("manjon-container-tabs__blocks-item--show");
        removeClassShowImages(itemsImages);
        addClassShowImage(itemsImages, index);
      });
    });

    const removeClassShowTab = (items) => {
      items.forEach((tab) =>
        tab.classList.remove("manjon-container-tabs__blocks-item--show")
      );
    };

    const removeClassShowImages = (images) => {
      images.forEach((image) =>
        image.classList.remove("manjon-container-tabs__pictures-img--show")
      );
    };

    const addClassShowImage = (images, index) => {
      images[index].classList.add("manjon-container-tabs__pictures-img--show");
    };

    container.addEventListener("mouseleave", () => {
      removeClassShowTab(itemsTabs);
      showFirstElement(itemsTabs, "manjon-container-tabs__blocks-item--show");
      removeClassShowImages(itemsImages);
      showFirstElement(
        itemsImages,
        "manjon-container-tabs__pictures-img--show"
      );
    });
  });

  document.querySelectorAll(".manjon-faqs").forEach((container) => {
    let items = container.querySelectorAll(".manjon-faqs__item");

    const removeClassFaqs = (items) => {
      items.forEach((item) => {
        item.classList.remove("manjon-faqs__item--expand");
      });
    };

    items.forEach((faq) => {
      faq.addEventListener("click", () => {
        faq.classList.toggle("manjon-faqs__item--expand");
      });
    });
  });

  function initializeSlider(containerSlider) {
    let wrapperSlider = containerSlider.querySelector(
      ".manjon-slider__wrapper"
    );
    wrapperSlider.style.width = `${wrapperSlider.children.length * 100}%`;

    let containerControls = containerSlider.querySelector(
      ".manjon-slider__controls"
    );

    function moveToPreviousSlide() {
      let attrIndex = parseInt(wrapperSlider.getAttribute("aria-index"));
      if (attrIndex != 1) {
        wrapperSlider.setAttribute("aria-index", attrIndex - 1);
        removeClassActive();
        addClassActive(attrIndex - 1);
        moveWrapperSlider();
      }
    }

    function moveToNextSlide() {
      let attrIndex = parseInt(wrapperSlider.getAttribute("aria-index"));
      if (attrIndex < wrapperSlider.children.length) {
        wrapperSlider.setAttribute("aria-index", attrIndex + 1);
        removeClassActive(attrIndex + 1);
        addClassActive();
        moveWrapperSlider();
      } else {
        wrapperSlider.setAttribute("aria-index", "1");
        removeClassActive(1);
        addClassActive();
        moveWrapperSlider();
      }
    }

    function moveWrapperSlider() {
      let attrIndex = parseInt(wrapperSlider.getAttribute("aria-index"));
      wrapperSlider.style.transform = `translateX(${
        (attrIndex - 1) * -(100 / wrapperSlider.children.length)
      }%)`;
    }

    function removeClassActive(index) {
      let items = wrapperSlider.querySelectorAll(".manjon-slider__item");
      items.forEach((item) => {
        item.classList.remove("manjon-slider__item--show");
      });
    }

    function addClassActive() {
      let items = wrapperSlider.querySelectorAll(".manjon-slider__item");
      let attrIndex = parseInt(wrapperSlider.getAttribute("aria-index"));
      items[attrIndex - 1].classList.add("manjon-slider__item--show");
    }

    wrapperSlider.setAttribute("aria-index", "1");
    addClassActive();
    const timingInterval =
      containerSlider.getAttribute("aria-setIterval") * 1000;

    let autoMoveInterval = setInterval(moveToNextSlide, timingInterval);

    // Reset the automatic movement
    function resetAutoMove() {
      clearInterval(autoMoveInterval);
      autoMoveInterval = setInterval(moveToNextSlide, timingInterval);
    }
  }

  document.querySelectorAll(".manjon-slider").forEach((slider) => {
    initializeSlider(slider);
  });

  const navItems = document.querySelectorAll('.manjon-header__navigation-list .manjon-header__navigation-list-item');

  navItems.forEach((item) => {
    item.addEventListener('mouseenter', (element) => {
      element.target.childNodes.forEach((child, index) => {
        if(child.classList) {
         if(child.classList.contains('manjon-header__navigation-list-item__mega-menu')) {
          child.classList.add('manjon-header__navigation-list-item__mega-menu--show');
         }
        }
      })
    });

    item.addEventListener('mouseleave', (element) => {
      element.target.childNodes.forEach((child) => {
        if(child.classList) {
         if(child.classList.contains('manjon-header__navigation-list-item__mega-menu--show')) {
          child.classList.remove('manjon-header__navigation-list-item__mega-menu--show');
         }
        }
      })
    });
  });
});
