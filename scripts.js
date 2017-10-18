const switchTab = (e) => {
  $('.tabs').removeClass('tab-selected');
  $(e.target).addClass('tab-selected');
  $('.profile-area').removeClass('show');
  switchProfile();
};

const switchProfile = () => {
  $('#tab1').hasClass('tab-selected') ? $('#profile1').addClass('show') : $('#profile1').removeClass('show');

  $('#tab2').hasClass('tab-selected') ? $('#profile2').addClass('show') : $('#profile2').removeClass('show');

  $('#tab3').hasClass('tab-selected') ? $('#profile3').addClass('show') : $('#profile3').removeClass('show');

  $('#tab4').hasClass('tab-selected') ? $('#profile4').addClass('show') : $('#profile4').removeClass('show');

  // $('#tab1').hasClass('tab-selected') ? console.log('hi') : console.log('hello');
};



$('#profile1').toggleClass('show');
$('.tabs').on('click', switchTab);
