// Generated by CoffeeScript 1.8.0
(function() {
  $(function() {
    var body;
    body = $('body');
    (function() {
      if ($('[bind-gotop]').length > 0) {
        return body.delegate('[bind-gotop]', 'click', function() {
          return $('body, html').stop().animate({
            scrollTop: 0
          }, 500);
        });
      }
    })();
    (function() {
      if ($('[bind-hover]').length > 0) {
        return body.delegate('[bind-hover]', 'mouseover', function() {
          return $(this).addClass('bind-hover');
        }).delegate('[bind-hover]', 'mouseout', function() {
          return $(this).removeClass('bind-hover');
        });
      }
    })();
    (function() {
      var show;
      if ($('[bind-tab-tit]').length > 0) {
        body.delegate('[bind-tab-tit]', 'click', function() {
          var my, parent;
          my = $(this);
          parent = my.parents('[bind-tab]');
          return show(my, parent);
        }).delegate('[bind-tab-tit]', 'mouseover', function() {
          var my, parent, type;
          my = $(this);
          parent = my.parents('[bind-tab]');
          type = parent.attr('bind-tab');
          if (type === 'mouseover' || type === 'hover') {
            return show(my, parent);
          }
        });
        return show = function(my, parent) {
          var actit, actnv, index, nav, navs, tits;
          tits = parent.find('[bind-tab-tit]');
          navs = parent.find('[bind-tab-nav]');
          index = tits.index(my);
          nav = navs.eq(index);
          actit = 'bind-tab-tit-active';
          actnv = 'bind-tab-nav-active';
          tits.removeClass(actit);
          navs.removeClass(actnv).hide();
          my.addClass(actit);
          return nav.addClass(actnv).show();
        };
      }
    })();
    (function() {
      if ($('[bind-banner]').length > 0) {
        return $('[bind-banner]').each(function() {
          var block, direction, dot, dotClass, fn, func, index, left, length, move, my, right, width, wrap;
          my = $(this);
          wrap = my.find('[bind-banner-wrap]');
          block = my.find('[bind-banner-block]');
          dot = my.find('[bind-banner-dot]');
          dotClass = 'bind-banner-dot-act';
          left = my.find('[bind-banner-left]');
          right = my.find('[bind-banner-right]');
          width = my.width();
          length = block.length;
          block.width(width);
          if (length === 1) {
            dot.hide();
            left.hide();
            right.hide();
            return false;
          }
          wrap.width(width * length * 2);
          block.clone().appendTo(wrap);
          index = 0;
          direction = 'left';
          dot.eq(0).addClass(dotClass);
          move = function() {
            if (index === (length * 2)) {
              index = length;
              wrap.css('left', -width * (length - 1));
            }
            if (index < 0) {
              index = length - 1;
              wrap.css('left', -width * length);
            }
            console.log;
            dot.eq(index % length).addClass(dotClass).siblings().removeClass(dotClass);
            return wrap.stop().animate({
              left: -width * index
            });
          };
          func = function() {
            if (direction === 'left') {
              index++;
            } else {
              index--;
            }
            return move();
          };
          fn = setInterval(function() {
            return func();
          }, 2000);
          right.on('click', function() {
            index++;
            direction = 'left';
            return move(index);
          });
          left.on('click', function() {
            index--;
            direction = 'right';
            return move(index);
          });
          my.hover(function() {
            return clearInterval(fn);
          }, function() {
            return fn = setInterval(function() {
              return func();
            }, 2000);
          });
          return dot.on('click', function() {
            index = $(this).index();
            return move();
          });
        });
      }
    })();
    (function() {
      var fixBox, fixT, id, pattern, reference, test;
      fixBox = $('[bind-fix]');
      if (fixBox.length > 0) {
        id = fixBox.attr('bind-fix');
        pattern = /^[1-9]\d*$/;
        test = pattern.test(id);
        reference = $('#' + id);
        if (test) {
          fixT = parseInt(id);
        } else {
          if (reference.length > 0) {
            fixT = reference.offset().top;
          }
        }
        return $(window).on("scroll", function() {
          var t;
          t = $(window).scrollTop();
          if (t > fixT) {
            return fixBox.addClass('bind-fix');
          } else {
            return fixBox.removeClass('bind-fix');
          }
        });
      }
    })();
    return (function() {
      var mask, pop;
      mask = $('[bind-pop-mask]');
      if (mask.length > 0) {
        pop = $('[bind-pop-box]');
        return body.delegate('[bind-pop-btn]', 'click', function() {
          var my, num;
          my = $(this);
          num = my.attr('bind-pop-btn');
          mask.show();
          return $("[bind-pop-box=" + num + "]").show();
        }).delegate('[bind-pop-close]', 'click', function() {
          var my, num;
          my = $(this);
          num = my.attr('bind-pop-close');
          mask.hide();
          return $("[bind-pop-box=" + num + "]").hide();
        });
      }
    })();
  });

  return;

}).call(this);
