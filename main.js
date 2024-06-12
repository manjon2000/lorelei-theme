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
});
