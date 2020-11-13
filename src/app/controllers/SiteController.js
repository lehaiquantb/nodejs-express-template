class SiteController {
  // index(req, res) {
  //     res.render('home');
  // }

  show(req, res) {
    res.send('site');
  }
}

module.exports = new SiteController();
