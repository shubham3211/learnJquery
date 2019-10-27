$(function() {
  // $('.blue-box').slideUp(1000);
  // $('.blue-box').slideDown(1000);
  // $("p").slideUp(1000);
  // $("p").slideDown(1000)
  // $(".green-box").slideToggle(1000)
  // $(".green-box").slideToggle(1000)
  // $(".green-box").animate({
  //   "margin-left": "+=200"
  // }, 1000)
  // $(".green-box").animate({
  //   "margin-left": "-=200"
  // }, 1000)
  // $(".blue-box").animate({
  //   "margin-left" : "200px",
  //   "opacity": "0",
  //   "height": "50px",
  //   "width": "50px",
  //   "margin-top": "25px"
  // }, 1000)
  // $("p").animate({
  //   "font-size": "20px"
  // }, 1000)
  // $(".red-box").delay(1000).fadeTo(1000, 0.2);
  // $(".blue-box").delay(2000).fadeTo(1000, 0.5);
  // $(".green-box").delay(3000).fadeTo(1000, 0)

  // $(".red-box").fadeTo(1000, 0, () => {
  //   $(".blue-box").fadeTo(1000, 0, () => {
  //     $(".green-box").fadeTo(1000, 0);
  //   })
  // })

  // $(".lightbox").fadeIn(1000, 0.5);

  // $("p").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").css("background-color", "blue");
  // $("input[type='text']").css('background-color', 'red')
  // $("input, p, h2").css("background-color", "red");
  // $("p:first").css("background-color", "green");
  // $("p:last").css("display", "none");
  // $("li:even").css("background-color", "green");
  // $("select").css("background-color", "yellow");
  // $('#list').find('li').css('background-color', 'green');
  // $('#list').children('li').css('background-color', 'green');
  // $('#list').parents('div').css('background-color', 'green');
  // $('#list').parent('div').css('background-color', 'green');
  // $('#list').siblings("p").css('background-color', 'green');
  // $('#list').siblings(':header').css('background-color', 'green')
  // $('#list').prev().css('background-color', 'green');
  // $('#list').next().css('background-color', 'green');

  // $(':header').next().css('background-color', 'green');
  // $('form').children('input').css('background-color', 'yellow')

  // $('#list').find('li').filter(':even').css('background-color', 'pink')
  
  // $('#list').children('li').filter(':even').css('background-color', 'blue');
  // $('li').filter((index) => {console.log(index);  return index%2==0}).css('background-color', 'purple');
  // $('li').last().css('background-color', 'blue')
  // $('li').eq(-1).css('background-color', 'blue');
  // $('li').not(':first').css('background-color', 'yellow');
  // $('ul ul:first').append('<li>I am gonna be the last item</li>')
  // $('<li>text</li>').appendTo($('ul ul:first'));
  // $('ul ul:first').prepend('<li>I am gonna be the first element</li>');
  // $('.red-box').after('<div class="blue-box">Blue box</div>')
  // $('.red-box').before('<div class="green-box">Amother green box</div>')
  // $('.red-box').before(() => `<div class="blue-box">Here is a blue box</div>`)
  // $('.red-box').before($('.blue-box'))
  // $('p').before($('#list'))
  // $('.red-box').after('<div class="red-box">red box</div>');
  // $('.blue-box').after('<div class="blue-box">blue Box</div>');
  // $('.green-box').after('<div class="green-box">green box</div>')
  // $('li').replaceWith('<li>Relapced</li>')
  // $('li').replaceWith(() => `<li>Replaced with function</li>`)
  // let redBox = $('.red-box');
  // $('p').replaceWith(redBox);
  // $('.red-box, .green-box').replaceWith('<div class="blue-box">Blue Box</div>')
  // $('li').remove();
  // $('form').children().not('input:text, textarea, br').remove();
  // $('#list').empty()
  // $('.red-box').empty();
  // $('.blue-box').empty();
  // $('.green-box').empty();

  // let specialLink = $('#special-link');
  // console.log(specialLink.attr('href'));
  // console.log($('input:text').val("shubham"));
  // let galleryImage = $('.gallery').find('img').first();
  var images = [
    'https://cdn.vox-cdn.com/thumbor/zaHNR5OBB40TLADsSSgf1LYEp_A=/0x0:1200x675/1200x800/filters:focal(504x242:696x434)/cdn.vox-cdn.com/uploads/chorus_image/image/64013576/download.0.jpeg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREztUToB8bMW8BP3v-qa2Fe7Yw3azuZRzM_4cf_pi-2o5UFowbTg&s',
    'https://m.media-amazon.com/images/M/MV5BMjc4YjE1MGYtOGJiZC00MmM1LThlZTctNWU0ZjNiYWQwY2ZhXkEyXkFqcGdeQXVyMDk0ODI3OA@@._V1_UY268_CR147,0,182,268_AL_.jpg',
    'https://i.ytimg.com/vi/rT22nYLaVbo/maxresdefault.jpg',
  ]
  // let i = 0;
  // setInterval(function (){
  //   i = (i+1)%images.length;
  //   galleryImage.fadeOut(function (){
  //     $(this).attr('src', images[i]);
  //     $(this).fadeIn();
  //   })
  //   console.log(galleryImage.attr('src'));
  // }, 2000)

  // console.log($('.red-box').css('width'))
  // console.log('$(".red-box").width() :', $(".red-box").width());
  // $('.red-box').css('background-color', 'black');
  // $('p').css('font-size', '19px');
  // console.log($("p").css(['font-size', 'line-height', 'color']))
  // $('a').addClass('fancy-link');
  // $('li li').addClass(function (index) {
  //   $(this).addClass('item-'+index);
  // })
  // $('div').addClass(function(index, currentClass) {
  //   if(currentClass == 'dummy'){
  //     return 'red-box';
  //   }
  // })
  // $('.red-box').removeClass('red-box').addClass('blue-box');
  // $('.dummy').removeClass('dummy').addClass('green-box');
  // let gallery = $('.gallery');
  // gallery.data('availableImages', images);
  // console.log(gallery.data('availableImages')); 
  // gallery.data('name', 'The awesome galley');
  // console.log(gallery.data('name'));
  // console.log(gallery.data())
  // console.log($('p').data());
  // console.log('text ',$('p').text());
  // console.log('html ', $('p').html());
  // $('p').html('<strong>Accenture</strong>')

  // $('p').html($('p').html() + "This is just appended");

  // $('#btn-click').click(function(e) {
  //   console.log('clicked', e);
  // })
  // $('.red-box').click(function() {
  //   $(this).fadeTo(1000, 0.2);
  // })
  // $('.red-box').click();

  // $('#btn-hover').hover(function() {
  //   console.log("button was hovered")
  // })

  // $('.green-box').hover(function() {
  //   $(this).text('I was hovered');
  // })

  // let blueBox = $('.blue-box');
  // blueBox.mouseenter(function() {
  //   $(this).stop().fadeTo(500, 0.5);
  // })
  // blueBox.mouseleave(function() {
  //   $(this).stop().fadeTo(500, 1);
  // })

  // blueBox.hover(function() {
  //   $(this).stop().fadeTo(500, 0.5); 
  // }, function() {
  //   $(this).stop().fadeTo(500, 1);
  // })

  // $("html").on("click keydown", function() {
  //   console.log("mose was clicked or a key was presssed");
  // })
  // $('.gallery').children('img').data('index', 0);

  // function changeImage(self){
  //   console.log(self)
  //   let index = ($('.gallery').children('img').data('index'))%images.length;
  //   $('.gallery').children('img').data('index', index+1);
  //   $('.gallery').children('img').attr('src', images[(index)]);
  // }

  // $('.gallery').on('click', changeImage);

  // $('body').on('mouseenter', 'li', function() {
  //   $(this).css('color', 'blue');
  // })

  // $("#btn-click").click({
  //   user: 'shubham'
  // }, function(event) {
  //   greetUser(event.data);
  // });

  // function greetUser(userData) {
  //   console.log(`Welcome ${userData.user}`);
  // }

  // images.forEach((image) => {
  //   $('.gallery').append(`<img src=${image} width=200 height=500/>`)
  // })

  // let galleryItems = $('.gallery').find('img');
  
  // galleryItems.css('opacity', 0.7)
  
  // galleryItems.mouseenter(function (){
  //   $(this).stop().fadeTo(1000, 1);
  // })
  
  // galleryItems.mouseleave(function (){
  //   $(this).stop().fadeTo(1000, 0.7);
  // })
  
  // galleryItems.click(function() {
  //   let source = $(this).attr('src');
  //   let img = $('<img>').attr('src', source).css('width', '300');
  //   $('.lightbox').empty().append(img).fadeIn(1000); 
  // })
  
  // $('.lightbox').click(function() {
  //   $(this).stop().fadeOut(1000);
  // })

  // $('html').keydown(function(event) {
  //   console.log(event.which);
  // })

  // $('html').keydown(function (event) {
  //   if(event.which == 39){
  //     $('.blue-box').css('margin-left', "+=10");
  //   }
  // })

  // let inputElements = $('input:text, input:password, textarea');
  // inputElements.focus(function() {
  //   $(this).css('box-shadow', '0 0 4px #666');

  // })

  // inputElements.blur(function() {
  //   $(this).css('box-shadow', 'none');
  // })

  // $('input:text').focus(function(e){
  //   console.log($(this).val());
  // })

  // $('input:text').blur(function(e) {
  //   if($(this).val().length <3){
  //     $(this).css('box-shadow', '0 0 4px red');
  //   }else{
  //     $(this).css('box-shadow', '0 0 4px green');
  //   }
  // })

  // $('input:checkbox').change(function() {
  //   let isChecked = $(this).is(':checked');
  //   if(isChecked){
  //     $(this).add('label[for="cb"]').css('box-shadow', '0 0 4px green');
  //   }else{
  //     $(this).add('label[for="cb"]').css('box-shadow', '0 0 4px red');
  //   }
  // })

  // $('input:checkbox').change();

  // $('select').change(function() {
  //   let options = $(this).find(':selected');
  //   alert(options.text());
  // })

  // $('form').submit(function(e) {
  //   let textarea = $(this).children('textarea');
  //   if(textarea.val().trim().length == 0){
  //     textarea.css('box-shadow', '1px 1px 1px red');
  //     event.preventDefault();
  //   }else{
  //     textarea.css('box-shadow', '1px 1px 1px green');
  //   }
  // })

  // let form = $('form');

  // enableFastFeedback(form);

  // form.submit(function(event) {
  //   let name = $('#name').val();
  //   let password = $('#password').val();
  //   let message = $('#message').val();
  //   let checked = $('#checkbox').is(':checked');
  //   validateNameField(name, event);
  //   validateMessageField(message, event);
  //   validatePasswordField(password, event);
  //   validateCheckbox(checked, event);
  // })
  // let flickerApiUrl = 'https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
  // $.getJSON(flickerApiUrl, {
  //   tags: 'sun, beach',
  //   tagmode: 'any',
  //   format: 'json'
  // }).done(function(data) {
  //   $.each(data.items, function(index, val) {
  //     $('<img>').attr('src', val.media.m).appendTo('#flickr');
  //     if(index == 4){
  //       return false;
  //     }
  //   })
  // }).fail(function() {
  //   alert('Ajax call failed');
  // })

  let pokeApi = 'https://pokeapi.co/api/v2/generation/1/';
  let pokemonByName = 'https://pokeapi.co/api/v2/pokemon/';

  $.getJSON(pokeApi)
    .done(function(data) {
      $.each(data.pokemon_species, function(index, val) {
        let name = val.name.charAt(0).toUpperCase() + val.name.slice(1);
        let link = $('<a>').attr('id', val.name).attr('href', '#').append($('<strong>').text(name));
        link.click(function(event) {  
          event.preventDefault();
          $.getJSON(pokemonByName+val.name)
            .done(function(details) {
              console.log(details);
              $('#pd').empty();
              $('#pd').append('<h2>'+name+'</h2>');
              $('#pd').append('<img src="'+ details.sprites.front_default+'">');
              $('#pd').append('<img src="'+ details.sprites.back_shiny+'">');
              $('#pd').append('<img src="'+ details.sprites.back_default+'">');
            });
        })
        let p = $('<p>').html('pokemon species no.' + index + ' is ' + name).append(link);
        p.appendTo('#flickr')
      })
    })
    .fail(function() {});


});

// function validateNameField(name, event) {
//   if(!isValidName(name)){
//     $('#name-feedback').text('Please enter at least two characters');
//     event.preventDefault();
//   }else{
//     $('#name-feedback').text('');
//   }
// }

// function isValidName(name){
//   return name.length >= 2;
// }

// function validatePasswordField(password, event) {
//   if(password.length<2){
//     event.preventDefault();
//     $('#password-feedback').text('Please enter password greater than 2 in length');
//     return false;
//   }else{
//     $('#password-feedback').text('');
//     return true;
//   }
// }

// function validateMessageField(message, event){
//   if(message.trim().length<2){
//     event.preventDefault();
//     $('#message-feedback').text('Please enter valid message greater than 2 in length');
//     return false;
//   }else{
//     $('#message-feedback').text('');
//     return true;
//   }
// }

// function validateCheckbox(checked, event){
//   if(!checked){
//     event.preventDefault();
//     $('#checkbox-feedback').text('Please click the checkbox');
//     return false;
//   }else{
//     $('#checkbox-feedback').text('');
//     return true;
//   }
// }

// function enableFastFeedback(formElement) {
//   let nameInput = formElement.find('#name');
//   let passwordInput = formElement.find('#password');
//   let messageInput = formElement.find('#message');
//   let checkboxInput = formElement.find('#checkbox');

//   nameInput.blur(function(event){
//     let name = $(this).val();
//     validateNameField(name, event);
//     if(!isValidName(name)){
//       $(this).css({'box-shadow': '1px 1px 1px red', 'border': '1px solid red'});
//     }else{
//       $(this).css({'box-shadow': '1px 1px 1px green', 'border': '1px solid green'});
//     }
//   });

//   passwordInput.blur(function(event) {
//     let password = $(this).val();
//     let valid = validatePasswordField(password, event);
//     if(valid){
//       $(this).css({'box-shadow': '1px 1px 1px green', 'border': '1px solid green'});
//     }else{
//       $(this).css({'box-shadow': '1px 1px 1px red', 'border': '1px solid red'});
//     }
//   })

//   messageInput.blur(function(event) {
//     let valid = validateMessageField($(this).val(), event);
//     if(valid){
//       $(this).css({'box-shadow': '1px 1px 1px green', 'border': '1px solid green'});
//     }else{
//       $(this).css({'box-shadow': '1px 1px 1px red', 'border': '1px solid red'});
//     }
//   })

//   checkboxInput.blur(function (event) {
//     let valid = validateCheckbox($(this).val(), event);
//     if(valid){
//       $(this).css({'box-shadow': '1px 1px 1px green', 'border': '1px solid green'});
//     }else{
//       $(this).css({'box-shadow': '1px 1px 1px red', 'border': '1px solid red'});
//     }
//   })
// }