exports.home = (req,res) => {
    res.render('home', {
        pageName: 'Inicio'
    });
};

exports.rules = (req,res) => {
    res.render('rules', {
        pageName: 'Reglas del juego'
    });
}