document.querySelectorAll('.navButton').forEach(item => {
  item.addEventListener('click', () => {
    if (!(item.classList.contains('active'))) {
      document.querySelector('.active').classList.remove('active');
      item.classList.add('active');
    }
  })
})
