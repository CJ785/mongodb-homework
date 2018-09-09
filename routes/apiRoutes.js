

module.exports = function (app) {

    app.get("/", function (req, res) {
        db.Travel.findAll({}).then(function (dbTravel) {
            res.json(dbTravel);
        });
    });


    app.post("/saved", function (req, res) {
        console.log(req.body);
    });

    // app.delete("/api/travel/:id", function (req, res) {
    //     db.Travel.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function (dbTravel) {
    //         res.json(dbTravel);
    //     });
    // });
};