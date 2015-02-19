document.body.innerHTML = __html__['_site/index.html'];
function appendCSS(fileObj){
    var  link = document.createElement('link'); link.rel = 'stylesheet'; link.href='base/' + fileObj.path;  document.body.appendChild(link)
}
appendCSS({path: '_site/styles/demo.css'});
appendCSS({path: '_site/styles/tabs.css'});

var tabs = skyComponents['tabs'];

var describeSpec = 'Responsive tabs';

var fixtures = {
  'demo-inpage-nav-tabs': document.getElementById('demo-inpage-nav-tabs').outerHTML
};

describe(describeSpec, function () {

  it('change tab look when changing tabs', function () {
    $('#first-tab').click();
    expect($('#first-tab').hasClass('selected')).toBe(true);
    expect($('#fourth-tab').hasClass('selected')).toBe(false);
    $('#fourth-tab').click();
    //expect($('#fourth-tab').hasClass('selected')).toBe(true);
    //expect($('#first-tab').hasClass('selected')).toBe(false);
  });
  it('will only have one tab selected at a time', function () {
    $('#first-tab').click();
    expect($('#demo-inpage-nav-tabs .tab.selected').length).toBe(1);
    $('#fourth-tab').click();
    expect($('#demo-inpage-nav-tabs .tab.selected').length).toBe(1);
  });

  describe('Whole Page Navigation', function() {
    it('change tab look when changing tabs', function () {
      $('#whole-page-first-tab').click();
      //expect($('#whole-page-first-tab').hasClass('selected')).toBe(true);
      //expect($('#whole-page-fourth-tab').hasClass('selected')).toBe(false);
      $('#whole-page-fourth-tab').click();
      //expect($('#whole-page-fourth-tab').hasClass('selected')).toBe(true);
      //expect($('#whole-page-first-tab').hasClass('selected')).toBe(false);
    });
    it('will only have one tab selected at a time', function () {
      $('#whole-page-first-tab').click();
      //expect($('#demo-whole-page-nav-tabs .tab.selected').length).toBe(1);
      $('#whole-page-fourth-tab').click();
      //expect($('#demo-whole-page-nav-tabs .tab.selected').length).toBe(1);
    });
  });
});
