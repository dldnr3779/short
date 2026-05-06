$(function () {
  $("#sec3 .left ul li:nth-child(1)").on("click", function () {
    $("#sec3 .left ul li:nth-child(1)").css({ display: "none" });
    $("#sec3 .right > ul > li").css({ opacity: 0 });
  });
  $("#sec3 .left ul li:nth-child(2)").on("click", function () {
    $("#sec3 .right > ul > li").css({ opacity: 0 });
    $("#sec3 .right > ul > li:nth-child(1)").css({ opacity: 1 });
    $("#sec3 .left > ul > li:nth-child(2)").css({
      transform: "translateX(-380px) rotateY(-25deg) scale(0.6)",
      "z-index": 97,
    });
    $("#sec3 .left > ul > li:nth-child(3)").css({
      transform: "translateX(-500px) rotateY(-25deg) scale(0.6)",
      "z-index": 100,
    });
    $("#sec3 .left > ul > li:nth-child(4)").css({
      transform: "translateX(-460px) rotateY(-25deg) scale(0.6)",
      "z-index": 99,
    });
    $("#sec3 .left > ul > li:nth-child(6)").css({
      transform: "translateX(-420px) rotateY(-25deg) scale(0.6)",
      "z-index": 98,
    });

    const duration = 2000; // 전체 2초

    function counter(target, selector) {
      let num = 0;
      let interval = duration / target;

      let timer = setInterval(function () {
        num++;
        $(selector).text(num);

        if (num >= target) {
          clearInterval(timer);
        }
      }, interval);
    }

    counter(117, "#sec3 .right .one");
    counter(2, "#sec3 .right .two");
    counter(16, "#sec3 .right .three");
    counter(9, "#sec3 .right .four");
    counter(2, "#sec3 .right .five");
    counter(79, "#sec3 .right .six");
  });
  $("#sec3 .left ul li:nth-child(3)").on("click", function () {
    $("#sec3 .right > ul > li").css({ opacity: 0 });
    $("#sec3 .right > ul > li:nth-child(2)").css({ opacity: 1 });
    $("#sec3 .left > ul > li:nth-child(3)").css({
      transform: "translateX(-380px) rotateY(-25deg) scale(0.6)",
      "z-index": 97,
    });
    $("#sec3 .left > ul > li:nth-child(4)").css({
      transform: "translateX(-500px) rotateY(-25deg) scale(0.6)",
      "z-index": 100,
    });
    $("#sec3 .left > ul > li:nth-child(6)").css({
      transform: "translateX(-460px) rotateY(-25deg) scale(0.6)",
      "z-index": 99,
    });
    $("#sec3 .left > ul > li:nth-child(2)").css({
      transform: "translateX(-420px) rotateY(-25deg) scale(0.6)",
      "z-index": 98,
    });
    const duration = 2000; // 전체 끝나는 시간 (2초)

    function counter(target, selector) {
      let num = 0;
      let interval = duration / target;

      let timer = setInterval(function () {
        num++;
        $(selector).text(num);

        if (num >= target) {
          clearInterval(timer);
        }
      }, interval);
    }

    counter(29, "#sec3 .right .seven");
    counter(290, "#sec3 .right .eight");
    counter(3, "#sec3 .right .nine");
    counter(1, "#sec3 .right .ten");
    counter(48, "#sec3 .right .eleven");
    counter(5, "#sec3 .right .one1");
    counter(46, "#sec3 .right .two1");
    counter(3, "#sec3 .right .three1");
    counter(2, "#sec3 .right .four1");
    counter(1, "#sec3 .right .five1");
  });
  $("#sec3 .left ul li:nth-child(4)").on("click", function () {
    $("#sec3 .right > ul > li").css({ opacity: 0 });
    $("#sec3 .right > ul > li:nth-child(3)").css({ opacity: 1 });
    $("#sec3 .left > ul > li:nth-child(4)").css({
      transform: "translateX(-380px) rotateY(-25deg) scale(0.6)",
      "z-index": 97,
    });
    $("#sec3 .left > ul > li:nth-child(6)").css({
      transform: "translateX(-500px) rotateY(-25deg) scale(0.6)",
      "z-index": 100,
    });
    $("#sec3 .left > ul > li:nth-child(2)").css({
      transform: "translateX(-460px) rotateY(-25deg) scale(0.6)",
      "z-index": 99,
    });
    $("#sec3 .left > ul > li:nth-child(3)").css({
      transform: "translateX(-420px) rotateY(-25deg) scale(0.6)",
      "z-index": 98,
    });
    const duration = 2000; // 전체 끝나는 시간 (2초)

    function counter(target, selector) {
      let num = 0;
      let interval = duration / target;

      let timer = setInterval(function () {
        num++;
        $(selector).text(num);

        if (num >= target) {
          clearInterval(timer);
        }
      }, interval);
    }

    counter(157, "#sec3 .right .six1");
    counter(513, "#sec3 .right .seven1");
  });
  $("#sec3 .left ul li:nth-child(6)").on("click", function () {
    $("#sec3 .right > ul > li").css({ opacity: 0 });
    $("#sec3 .right > ul > li:nth-child(4)").css({ opacity: 1 });
    $("#sec3 .left > ul > li:nth-child(6)").css({
      transform: "translateX(-380px) rotateY(-25deg) scale(0.6)",
      "z-index": 97,
    });
    $("#sec3 .left > ul > li:nth-child(2)").css({
      transform: "translateX(-500px) rotateY(-25deg) scale(0.6)",
      "z-index": 100,
    });
    $("#sec3 .left > ul > li:nth-child(3)").css({
      transform: "translateX(-460px) rotateY(-25deg) scale(0.6)",
      "z-index": 99,
    });
    $("#sec3 .left > ul > li:nth-child(4)").css({
      transform: "translateX(-420px) rotateY(-25deg) scale(0.6)",
      "z-index": 98,
    });
    const duration = 2000; // 전체 끝나는 시간 (2초)

    function counter(target, selector) {
      let num = 0;
      let interval = duration / target;

      let timer = setInterval(function () {
        num++;
        $(selector).text(num);

        if (num >= target) {
          clearInterval(timer);
        }
      }, interval);
    }

    counter(39, "#sec3 .right .eight1");
    counter(7, "#sec3 .right .nine1");
  });
  $(document).on(
    "click",
    "#sec7 .bottom1 li:nth-child(2), #sec7 .bottom1 li:nth-child(3)",
    function () {
      $("#sec7 .bottom1").removeClass("on");
      $("#sec7 .bottom2").addClass("on");
      $("#sec7 .content .tab1").removeClass("on");
      $("#sec7 .content .tab2").addClass("on");
    },
  );

  $(document).on(
    "click",
    "#sec7 .bottom2 li:nth-child(2), #sec7 .bottom2 li:nth-child(1)",
    function () {
      $("#sec7 .bottom2").removeClass("on");
      $("#sec7 .bottom1").addClass("on");
      $("#sec7 .content .tab2").removeClass("on");
      $("#sec7 .content .tab1").addClass("on");
    },
  );
  $("#sec4 .wrap .one").on("mouseenter", function () {
    $("#sec4 .wrap .one").addClass("on");
    $("#sec4 .wrap .two").stop().animate({ bottom: "0px" }, 700);
  });
  $("#sec4 .wrap .one").on("mouseleave", function () {
    $("#sec4 .wrap .one").removeClass("on");
    $("#sec4 .wrap .two").stop().animate({ bottom: "-400px" }, 700);
  });
  $("#sec4 .wrap2 .three").on("mouseenter", function () {
    $("#sec4 .wrap2 .three").addClass("on");
    $("#sec4 .wrap2 .four").stop().animate({ bottom: "0px" }, 700);
  });
  $("#sec4 .wrap2 .three").on("mouseleave", function () {
    $("#sec4 .wrap2 .three").removeClass("on");
    $("#sec4 .wrap2 .four").stop().animate({ bottom: "-400px" }, 700);
  });
});
