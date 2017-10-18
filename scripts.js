const switchTab = (e) => {
  $('.tabs').removeClass('tab-selected');
  $(e.target).addClass('tab-selected');
};






$('.tabs').on('click', switchTab);
