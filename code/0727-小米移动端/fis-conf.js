fis.match('*.js', {
  useHash: false, // default is true
  // 指定压缩插件 fis-optimizer-uglify-js 
  optimizer: fis.plugin('uglify-js', {
    // option of uglify-js
  })
});
fis.match('*.html', {
  //invoke fis-optimizer-html-minifier
  optimizer: fis.plugin('html-minifier')
});
fis.match('*.css', {
  useHash: false, //default is `true`
  // compress css invoke fis-optimizer-clean-css
  optimizer: fis.plugin('clean-css', {
    // option of clean-css
  })
});