// our services tab sdection

let designLi = $(".design-options>li");
let designText = $(".design-text");
for (let i = 0; i < designLi.length; i++) {
  designLi.eq(i).attr("dataKey", i);
  designText.eq(i).attr("dataValue", i);
}

designLi.click(function () {
  designLi.removeClass("design-toggle");
  $(this).addClass("design-toggle");
  let match1 = $(".design-toggle").attr("dataKey");
  designText.hide();
  $(`.design-text[dataValue="${match1}"]`).css("display", "flex");
});

// our amazing work

// let loadMore = $(".load-more");
// let amazingImages = $(".amazing-work-images-item");
// let amazingWork = $(".amazing-work");

// let x = 12;
// amazingImages.slice(0, x).show();

// amazingWork.on("click", (event) => {
//   if ($(event.target).attr("btn") == "btn") {
//     x += 12;
//     amazingImages.slice(0, x).show();
//     if (x == 36) {
//       loadMore.hide();
//     }
//   } else if (event.target.tagName == "LI") {
//     let dataKey = $(event.target).attr("datakey");
//     if (x > 12 && !dataKey) {
//       if (x !== 36) {
//         loadMore.css("display", "flex");
//       }
//       return false;
//     }
//     amazingImages.hide();
//     loadMore.hide();
//     $(".option-style").removeClass("option-style");
//     $(event.target).addClass("option-style");
//     x = 12;
//     if (dataKey) {
//       $(`.${dataKey}`).show();
//     } else {
//       amazingImages.slice(0, x).show();
//       loadMore.css("display", "flex");
//     }
//   }
// });

let loadMore = $(".load-more");
let amazingImages = $(".amazing-work-images-item");
let amazingWork = $(".amazing-work");
let x = 12;
amazingImages.slice(0, x).show();
amazingWork.on("click", (event) => {
  if ($(event.target).attr("btn") == "btn") {
    x += 12;
    amazingImages.slice(0, x).show();
    if (x == 36) {
      loadMore.hide();
    }
  } else if (event.target.tagName == "LI") {
    let dataKey = $(event.target).attr("datakey");
    if (x > 12 && !dataKey) {
      if (x !== 36) {
        loadMore.css("display", "flex");
      }
      return false;
    }
    amazingImages.hide();
    loadMore.hide();
    $(".option-style").removeClass("option-style");
    $(event.target).addClass("option-style");
    x = 12;
    if (dataKey) {
      $(`.${dataKey}`).show();
    } else {
      amazingImages.slice(0, x).show();
      loadMore.css("display", "flex");
    }
  }
});
