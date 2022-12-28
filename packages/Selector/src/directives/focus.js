export default {
  mounted(el) {
    const SelectInput = el.querySelector(".selectorInput");
    const SelectMenu = el.querySelector(".selectorMenu");

    const onInput = SelectInput.querySelector(".input"),
      onLabel = SelectInput.querySelector(".label"),
      onIcon = SelectInput.querySelector("span");

    onInput.addEventListener("focus", function () {
      onLabel.style.display = "none";
      onIcon.className = "iconfont icon-sousuo";
      setTimeout(() => {
        SelectMenu.style.display = "block";
      }, 200);
    });

    onInput.addEventListener("blur", function () {
      onIcon.className = "iconfont icon-xiala";

      setTimeout(() => {
        SelectMenu.style.display = "none";
        //什么都没点击的情况下
        if (!this.value) {
          onLabel.style.display = "block";
        }
      }, 200);
    });
  },
};
