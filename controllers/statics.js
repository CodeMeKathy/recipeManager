// GET /
function home(req, res) {
    res.render('app-welcome');
}

module.exports = {
    home: home
};
