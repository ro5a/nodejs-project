/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});New 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});
router.get("/", function (req, res, next) {
res.render("index", { page: "Home", menuId: "home" });
});
router.get("/about", function (req, res, next) {
res.render("about", { page: "About", menuId: "about" });
});
router.get("/contact", function (req, res, next) {
res.render("contact", { page: "Contact", menuId: "contact" });
});