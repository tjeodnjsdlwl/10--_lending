$(function(){


  /**
   * info-group
   */
  $(window).scroll(function(){
    curr = $(this).scrollTop();
    if(curr >= 100){
      $('.info-group').addClass('on');
    }else{
      $('.info-group').removeClass('on');
    }
    lastScrollTop = curr;
  })


  /**
   * sc-visual "IMPOSSIBLE BUREAU"
   */
  // scrollTrigger를 사용하여 애니메이션 실행
  gsap.timeline({
    scrollTrigger: {
      trigger: '.sc-visual',
      start: 'top top',
      end: '50% top',
      scrub: 0.5,
      // markers:true,
      onUpdate: function(self) {
        // 스크롤 위치가 업데이트 될 때마다 실행되는 함수
        const opacity = 1 - self.progress; // 스크롤 위치에 따른 불투명도 값 계산
        document.querySelector('.headline .ani1').style.opacity = opacity; // ani1의 불투명도 적용
        document.querySelector('.headline .ani2').style.opacity = opacity; // ani2의 불투명도 적용
      }
    }
  })
  .to('.headline .ani1', {
    duration: 1,
    x: '-150%',
    ease: 'power4.in'
  })
  .to('.headline .ani2', {
    duration: 1,
    x: '150%',
    ease: 'power4.in',
    delay: -0.8
  });


  /**
   * sc-typo1 "Crafting The Immpossible"
   */
  $(document).ready(function() {
    gsap.registerPlugin(ScrollTrigger);
    
    var timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".sc-typo1",
        start: "top 60%",
        end: "70% top",
        scrub: 0.5,
        // markers: true,

      },
      onUpdate: function() {
        var progress = timeline.progress();
        var text = document.getElementById('typo-ani1');
        var bounds = text.getBoundingClientRect();
        var motion = bounds.height - window.innerHeight;
        text.style.transform = "translateY(-" + progress * motion + "px)";
      }
    });
    
    $('#typo-ani1 span').each(function(index) {
      timeline.to(this, {opacity: 1, duration: 1}, "-=0.1");
    });

    ['h', 'i'].forEach(function(view) {
      var viewElems = $('.view.' + view);
      viewElems.each(function(index) {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.sc-typo1',
            start: 'top center',
            end: '30% center',
            scrub: 1,
            // markers: true,
          }
        });
        tl.to(this, {opacity: 1, duration: 0});
        tl.to(this, {x: view === 'h' ? 580 : 1019, duration: 1});
      });
    });
    
  });
  


  /**
   * sc-typo1 가로 스크롤 (돼야 되는데...)
   */
  let typoAni1 = gsap.utils.toArray(".sc-typo1 .text-box .text > *");
  console.log(typoAni1.lenth);
  let scrollTypo1 = gsap.to(typoAni1, {
    xPercent: -100 * (typoAni1.lenth - 1),
    ease: "none",
    scrollTrigger:{
      trigger: ".sc-typo1",
      // pin: true,
      scrub: 1,
      end: "+=3000",

    }
  });

  gsap.set('.sc-typo1 .text-box .text', {
    xPercent: 0,
  })
  


/**
 * sc-typo2
 */
const typo2Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-typo2',
    start: 'top center',
    end: '10% bottom',
    scrub: 1,
    // markers: true,

    // opacity 0 -> 0.5 -> 1
    onUpdate: function(self) {
      const opacity = self.progress < 1 ? 0.3 : 1;
      const targets = document.querySelectorAll('.sc-typo2 .text-list .ani1, .sc-typo2 .text-list .ani2, .sc-typo2 .text-list .ani3');
      targets.forEach(target => {
        gsap.to(target, {
          opacity: opacity,
          duration: 0.5,
          ease: 'Power1.easeOut'
        });
      });
    }
  }
})

// ani1,2,3 나옴
.from('.sc-typo2 .text-list .ani1', {
  duration: 1,
  y: '100%',
  x: '100vw',
  ease: 'Linear.easeNone'
})
.from('.sc-typo2 .text-list .ani2', {
  duration: 1,
  y: '100%',
  x: '-100vw',
  ease: 'Linear.easeNone',
},0)
.from('.sc-typo2 .text-list .ani3', {
  duration: 1,
  y: '100%',
  x: '100vw',
  ease: 'Linear.easeNone',
}, 0);


/**
 * sc-typo2 - sub
 */
const typo2SubTimeline1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-typo2',
    start: '11% center',
    end: 'bottom bottom',
    scrub: 1.5,
    // markers: true,
  },
});

// ani1 sub가 아래 위로 나옴
typo2SubTimeline1.to('.sc-typo2 .title.ani1', {
  duration: 1,
  y: '50px',
  ease: 'Linear.easeNone',
},1)
.to('.sc-typo2 .text-list .sub.top', {
  duration: 1,
  y: '-25px',
  ease: 'Linear.easeNone',
  opacity: 1
},1)
.to('.sc-typo2 .text-list .sub.bottom', {
  duration: 1,
  y: '180px',
  ease: 'Linear.easeNone',
  opacity: 1
},1)
// ani2,3 이 아래로 밀림
.to(['.sc-typo2 .title.ani2', '.sc-typo2 .title.ani3'], {
  duration: 1,
  y: '160px',
  ease: 'Linear.easeNone',
  opacity: 0.3,
},1)
// ani1과 sub이 양 옆으로 사라짐
.to('.sc-typo2 .title.ani1', {
  duration: 5,
  x: '200%',
  ease: 'Linear.easeNone',
}, 3)
.to(['.sc-typo2 .text-list .sub.top', '.sc-typo2 .text-list .sub.bottom'], {
  duration: 2,
  x: '-200%',
  ease: 'Linear.easeNone',
}, 3)


// ani2,3 위로 올라옴
.to(['.sc-typo2 .title.ani2', '.sc-typo2 .title.ani3'], {
  duration: 2,
  y: '-120px',
  opacity: 1,
  ease: 'Linear.easeNone',
}, 4)
// ani3이 아래로 밀림
.to('.sc-typo2 .title.ani3', {
  duration: 1,
  y: '60px',
  ease: 'Linear.easeNone',
  opacity: 0.3
},6)
//ani2 sub이 아래로 나옴
.to('.sc-typo2 .text-item .slide1', {
  duration: 2,
  y: '130px',
  opacity: 1,
  ease: 'Linear.easeNone',
}, 6)
//ani2이 양옆으로 사라짐
.to('.sc-typo2 .title.ani2', {
  duration: 3,
  x: '200%',
  ease: 'Linear.easeNone',
}, 8)
.to('.sc-typo2 .text-item .slide1', {
  duration: 3,
  x: '-200%',
  ease: 'Linear.easeNone',
}, 8)


// ani2,3 위로 올라옴
.to('.sc-typo2 .title.ani3', {
  duration: 1,
  y: '-240px',
  opacity: 1,
  ease: 'Linear.easeNone',
}, 10)
//ani3 sub이 아래로 나옴
.to('.sc-typo2 .text-item .slide2', {
  duration: 1,
  y: '110px',
  opacity: 1,
  ease: 'Linear.easeNone',
}, 12)
//ani2이 양옆으로 사라짐
.to('.sc-typo2 .title.ani3', {
  duration: 5,
  x: '200%',
  ease: 'Linear.easeNone',
}, 14)
.to('.sc-typo2 .text-item .slide2', {
  duration: 5,
  x: '-200%',
  ease: 'Linear.easeNone',
}, 14)



/**
 *  typo3 bg img 이동
 */
const typo3Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-typo3',
    start: 'top bottom',
    end: '70% center',
    scrub: 0.5,
    markers: true,
  }
})

.to('.sc-typo3 .bg .img-list', {
  duration: 10,
  x: '-300%',
  ease: 'Linear.easeNone'
},1)



/**
 * swiper
 */
$(function() {
  var $worksList = $('.works-list');
  var $worksItems = $worksList.find('.works-item');
  var itemWidth = $worksItems.first().width();
  var expandedWidth = itemWidth * 1.5;
  var animationSpeed = 500;
  
  function animateItem($item) {
    $item.animate({ width: expandedWidth }, animationSpeed, function() {
      $item.animate({ width: itemWidth }, animationSpeed, function() {
        animateItem($item.next());
      });
    });
  }
  
  $worksItems.last().on('animationend webkitAnimationEnd oAnimationEnd', function() {
    animateItem($worksItems.first());
  });
  
  $worksList.waypoint(function(direction) {
    if (direction === 'down') {
      animateItem($worksItems.first());
    } else {
      $worksItems.stop(true);
      $worksItems.css('width', itemWidth);
    }
  }, { offset: '50%' });
});






  

});