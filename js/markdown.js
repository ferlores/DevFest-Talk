var fn = function (elem) {
  // strip leading whitespace so it isn't evaluated as code
  var text      = elem.innerHTML.replace(/\n\s*\n/g,'\n'),
      // set indentation level so your markdown can be indented within your HTML
      leadingws = text.match(/^\n?(\s*)/)[1].length,
      regex     = new RegExp('\\n?\\s{' + leadingws + '}','g'),
      md        = text.replace(regex,'\n'),
      html      = marked(md);
      //console.log(marked(md))

  // here, have sum HTML
  if (!$(elem).data('process'))
    //elem.innerHTML = html;
  $(elem).data('process', true)
}

$('.step').on('enterStep', function (ev) {
  var notes = $(ev.target).find('.notes');
  console.log('NOTES: ' + ev.target.id);
  if (notes.length !== 0) console.log(notes.html());
  fn(ev.target)
});

$('.step').on('leaveStep', function (ev) {
  console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
});


var bg;
$('.step').on('enterStep', function (ev) {
  var elem = $(ev.target).attr('data-bg');
  if (!elem) return;

  setTimeout(function() {
    bg = $('body').css('backgroundColor')
    $('body').css({'backgroundColor': elem});
  }, 500)
});

$('.step').on('leaveStep', function (ev) {
  setTimeout(function() {
    $('body').css('backgroundColor', bg);
  }, 500);
});

