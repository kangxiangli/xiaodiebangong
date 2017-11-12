/**
 * Created by xiuxia on 2016/9/27.
 */
$(function () {
    $("#infoFenlei").height();
    $("#leave").click(function () {
//       window.location.href = '../../dk.html';
plus.webview.open("../dk.html")
    });
    //$("#mainCont").height($(window).height() - $(".til_bak").height());
    var mainHg = $(window).height() - $(".til_bak").height();
    $("#infoFenlei").height(mainHg - $(".barImg").outerHeight(true) - $(".ulTil").height());

   //var result = 'DA0MXBAD20M003';
    
      if(window.localStorage){
            result = localStorage.datas;
      }else{
            shoMsg("未获取到一维码");
      }
      
    $.xiaodie.ajax({
        url: "/ProductInfo/getinventory",
        type: "post",
        data: { barcode: result },
        success: function (data) {
        	//alert(JSON.stringify(data))
            if (data.ResultType == "3") {
                var sumInfo = data.Data;
                console.log(sumInfo);
                var iMg = '<img src="' + sumInfo.img + '"/>';
                var liHed = '<li><ul class="fenlUl">',
                    liEnd = '</ul></li>',
                    inLihd = '<li><div class="fenlImg">',
                    inLied = '</div></li>';

                $(".imgBox,.fenLei").empty();
                for (var i = 0; i < sumInfo.data.length; i++) {
                    var lists = sumInfo.data[i];
                    var shopName = lists.StoreName,
                        clothesColor = lists.IconPath,
                        clotheSize = lists.SizeName,
                        clothesNum = lists.Count;
                    var colorImg = '<img src=' + clothesColor + '>',
                         sizeLi = '<li>' + clotheSize + '</li>',
                         numLi = '<li>' + clothesNum + '</li>',
                         shopLi = '<li>' + shopName + '</li>';
                    var html = liHed + inLihd + colorImg + inLied + sizeLi + numLi + shopLi + liEnd;
                    $(".fenLei").append(html);
                }
                $(".imgBox").append(iMg);
                $(".barCode").html(sumInfo.bigProdNum);
            }
            else {
                shoMsg(data.Message);
            }
        }
    });

    function shoMsg(msg) {
        $(".alog p").html(msg);
        $(".algo_bg,.alog").show();
    }
    $(".btn_back").click(function () {
        $(".algo_bg,.alog").hide();
//      window.location.href = "../../dk.html";
plus.webview.open("../dk.html")
//mui.back();

    });
    
});