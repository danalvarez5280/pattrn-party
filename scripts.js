const redirectToCode = () => {
  window.open('https://github.com/danalvarez5280/pattrn-party', '_blank');
}

const switchProfile = () => {
  $('#tab1').hasClass('tab-selected') ? $('#profile1').addClass('show') : $('#profile1').removeClass('show');

  $('#tab2').hasClass('tab-selected') ? $('#profile2').addClass('show') : $('#profile2').removeClass('show');

  $('#tab3').hasClass('tab-selected') ? $('#profile3').addClass('show') : $('#profile3').removeClass('show');

  $('#tab4').hasClass('tab-selected') ? $('#profile4').addClass('show') : $('#profile4').removeClass('show');
};

const switchTab = (e) => {
  $('.tabs').removeClass('tab-selected');
  $(e.target).addClass('tab-selected');
  $('.profile-area').removeClass('show');
  switchProfile();
};

const switchPlusMinus = () => {

};


$('.view-code').on('click', redirectToCode)
$('#profile1').toggleClass('show');
$('.tabs').on('click', switchTab);
