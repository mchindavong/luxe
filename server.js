$('body').scrollspy({ target: '#navbar' })

$('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
    // do something…
  })