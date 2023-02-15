$(document).ready(function () {
  // digi-currency
  // start-of-converter

  function custom_template(obj, params) {
    var data = $(obj.element).data();
    var text = $(obj.element).text();
    if (data && data["img_src"]) {
      img_src = data["img_src"];
      template = $(
        '<div style="width:30px;"><img src="' +
          img_src +
          '" style="width:100%;"/></div><p style="display:inline-block;color:white;font-size: 14px;font-weight: 600;text-align:center;margin-bottom:0;margin-left:8px;">' +
          text +
          "</p>"
      );
      return template;
    }
  }
  var options = {
    templateSelection: custom_template,
    templateResult: custom_template,
  };
  $(".currency-list").select2(options);

  //start-of-table
  $(".alaghe-mandi-section").click(function () {
    if ($(".table-container").css("display") == "block") {
      $(".table-container").css("display", "none");
      $(".table-container-2").css("display", "block");
    } else {
      $(".table-container").css("display", "block");
      $(".table-container-2").css("display", "none");
    }
  });

  $(".star-in-table-for-select-btc").click(function () {
    if ($(".btc-in-table-2").css("display") == "none") {
      $(".btc-in-table-2").css("display", "table-row");
    } else {
      $(".btc-in-table-2").css("display", "none");
    }
  });

  $(".star-in-table-for-select-btc").click(function () {
    $(this).toggleClass("color-yellow-star");
  });

  $(".star-in-table-for-select-avax").click(function () {
    if ($(".avax-in-table-2").css("display") == "none") {
      $(".avax-in-table-2").css("display", "table-row");
    } else {
      $(".avax-in-table-2").css("display", "none");
    }
  });

  $(".star-in-table-for-select-avax").click(function () {
    $(this).toggleClass("color-yellow-star");
  });

  $(".star-in-table-for-select-usdc").click(function () {
    if ($(".usdc-in-table-2").css("display") == "none") {
      $(".usdc-in-table-2").css("display", "table-row");
    } else {
      $(".usdc-in-table-2").css("display", "none");
    }
  });

  $(".star-in-table-for-select-usdc").click(function () {
    $(this).toggleClass("color-yellow-star");
  });

  $(".star-in-table-for-select-usdt").click(function () {
    if ($(".usdt-in-table-2").css("display") == "none") {
      $(".usdt-in-table-2").css("display", "table-row");
    } else {
      $(".usdt-in-table-2").css("display", "none");
    }
  });

  $(".star-in-table-for-select-usdt").click(function () {
    $(this).toggleClass("color-yellow-star");
  });

  $(".star-in-table-for-select-eth").click(function () {
    if ($(".eth-in-table-2").css("display") == "none") {
      $(".eth-in-table-2").css("display", "table-row");
    } else {
      $(".eth-in-table-2").css("display", "none");
    }
  });

  $(".star-in-table-for-select-eth").click(function () {
    $(this).toggleClass("color-yellow-star");
  });

  $(".alaghe-mandi-section").click(function () {
    $(".p-intersted-table").toggleClass("color-yellow-star");
  });

  // $(".xrp-in-table-1").click(function () {

  //   if ($('.xrp-in-table-2').css('display') == 'none') {
  //     $('.xrp-in-table-2').css('display', 'table-row')
  //   } else {
  //     $('.xrp-in-table-2').css('display', 'none')

  //   }

  $(".star-in-table-for-select-bnb").click(function () {
    if ($(".bnb-in-table-2").css("display") == "none") {
      $(".bnb-in-table-2").css("display", "table-row");
    } else {
      $(".bnb-in-table-2").css("display", "none");
    }
  });

  $(".star-in-table-for-select-bnb").click(function () {
    $(this).toggleClass("color-yellow-star");
  });

  $(".star-in-table-for-select-luna").click(function () {
    if ($(".luna-in-table-2").css("display") == "none") {
      $(".luna-in-table-2").css("display", "table-row");
    } else {
      $(".luna-in-table-2").css("display", "none");
    }
  });

  $(".star-in-table-for-select-luna").click(function () {
    $(this).toggleClass("color-yellow-star");
  });

  $(".star-in-table-for-select-sol").click(function () {
    if ($(".sol-in-table-2").css("display") == "none") {
      $(".sol-in-table-2").css("display", "table-row");
    } else {
      $(".sol-in-table-2").css("display", "none");
    }
  });

  $(".star-in-table-for-select-sol").click(function () {
    $(this).toggleClass("color-yellow-star");
  });

  $(".star-in-table-for-select-ada").click(function () {
    if ($(".ada-in-table-2").css("display") == "none") {
      $(".ada-in-table-2").css("display", "table-row");
    } else {
      $(".ada-in-table-2").css("display", "none");
    }
  });

  $(".star-in-table-for-select-ada").click(function () {
    $(this).toggleClass("color-yellow-star");
  });

  $(".star-in-table-for-select-xrp").click(function () {
    if ($(".xrp-in-table-2").css("display") == "none") {
      $(".xrp-in-table-2").css("display", "table-row");
    } else {
      $(".xrp-in-table-2").css("display", "none");
    }
  });

  $(".star-in-table-for-select-xrp").click(function () {
    $(this).toggleClass("color-yellow-star");
  });

  // /end-of-table
  // end-of-converter
  // /digi-currency

  // converter--buy

  const currencyData = document.querySelector("#currency-select1");
  var currencyValue = currencyData.options[currencyData.selectedIndex].value;
  document.querySelector(".currency-name-converter").innerHTML = currencyValue;

  var currencyText = currencyData.options[currencyData.selectedIndex].text;
  // change-price
  var unitPrice = $(".unit-price");
  unitPrice.attr("placeholder", "Amount(" + currencyText + ")");
  // change-price

  // /converter--buy

  // converter--sell

  const currencyDataSell = document.querySelector("#currency-select2");
  var currencyTextSell =
    currencyDataSell.options[currencyDataSell.selectedIndex].text;
  document.querySelector("#all-amount").placeholder =
    "Amount(" + currencyTextSell + ")";

  // /converter--sell

  // converter-buy-price
  var allPriceBuy = document.querySelector("#all-price").value;
  var unitPriceBuyValue = document.querySelector(".unit-price-buy").innerHTML;
  var unitPriceBuyValueFinal = parseFloat(unitPriceBuyValue.replace(/,/g, ""));
  var amountValueBuy = document.querySelector(".unit-price");
  var priceResultBuy =
    parseFloat(allPriceBuy) / parseFloat(unitPriceBuyValueFinal);
  amountValueBuy.value = priceResultBuy;

  function changePriceBuy() {
    var allPriceBuy = document.querySelector("#all-price").value;
    var unitPriceBuyValue = document.querySelector(".unit-price-buy").innerHTML;
    var unitPriceBuyValueFinal = parseFloat(
      unitPriceBuyValue.replace(/,/g, "")
    );
    var amountValueBuy = document.querySelector(".unit-price");
    var priceResultBuy =
      parseFloat(allPriceBuy) / parseFloat(unitPriceBuyValueFinal);
    amountValueBuy.value = priceResultBuy;
  }
  // converter-buy-price

  // converter-buy-amount
  function changeAmountBuy() {
    var amountValueBuy = document.querySelector(".unit-price").value;
    var unitAmountBuyValue =
      document.querySelector(".unit-price-buy").innerHTML;
    var unitAmounteBuyValueFinal = parseFloat(
      unitAmountBuyValue.replace(/,/g, "")
    );
    var allPriceBuy = document.querySelector("#all-price");

    var amountResultBuy =
      parseFloat(amountValueBuy) * parseFloat(unitAmounteBuyValueFinal);
    allPriceBuy.value = amountResultBuy;
  }

  // converter-buy-amount

  // converter-sell-price

  function changePriceSell() {
    var allAmountSell = document.querySelector("#all-amount").value;
    var unitPriceSellValue =
      document.querySelector(".unit-price-sell").innerHTML;
    var unitPriceSellValueFinal = parseFloat(
      unitPriceSellValue.replace(/,/g, "")
    );
    var allPriceSell = document.querySelector(".all-price-sell");

    var priceResultSell = parseFloat(allAmountSell) * unitPriceSellValueFinal;
    allPriceSell.value = priceResultSell;
  }
  // converter-sell-price

  function changeAmountSell() {
    var allPriceSell = document.querySelector(".all-price-sell").value;
    var unitPriceSellValue =
      document.querySelector(".unit-price-sell").innerHTML;
    var unitPriceSellValueFinal = parseFloat(
      unitPriceSellValue.replace(/,/g, "")
    );
    var amountValueSell = document.querySelector("#all-amount");
    var amountResultSell =
      parseFloat(allPriceSell) / parseFloat(unitPriceSellValueFinal);
    amountValueSell.value = amountResultSell;
  }
  // converter-sell-aomount

  // erase-prices
  function erasePriceBuy() {
    var eraseBuy = document.getElementsByClassName("erase-price-buy");
    for (let i = 0; i < eraseBuy.length; i++) {
      eraseBuy[i].value = " ";
    }
  }

  function erasePriceSell() {
    var eraseSell = document.getElementsByClassName("erase-price-sell");
    for (let i = 0; i < eraseSell.length; i++) {
      eraseSell[i].value = " ";
    }
  }
  // /erase-prices

  // /converter
});
