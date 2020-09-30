// Creating timeline
let t1 = anime.timeline({
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 500,
    loop: true
})

// Adding keyframes to timeline


t1.add({
    targets: '.body',
    // opacity: 0.5,
    d:[{value:'M41.9998 62C38.3691 76.0219 39.3557 66.1283 35 87M17 172C-13 243 16 240 5.99997 266M17 172C31 178 41.9998 235 55 266M17 172C31 118 27.7585 121.699 35 87M35 87C52.9371 89.6667 94 128 83 180M35 87C18.2704 74.6667 11 129 41.9998 172'},
    {value: 'M61.9998 62C58.3692 76.0219 59.3557 66.1283 55 87M61.9998 172C31.9998 243 36 240 26 266M61.9998 172C75.9998 178 61.9998 235 75 266M61.9998 172C53.9998 117 47.7586 121.699 55 87M55 87C72.9371 89.6667 52 113 41 165M55 87C38.2705 74.6667 -18.9998 129 12 172'}],
    // easing: 'easeInOutQuad',
    // duration: 500,

    // autoplay: false,

});

t1.add({
    targets: '.face',
    cx: [45,65]

},'-=370')

// boxAnim.play();