router.get('/salles/b',async function (req, res, next) {
    occupation.aggregate( [{
        $group: {
            _id: "$salle",
            count: { $sum: 1 },

        }

    },
    ]).sort( { _id: 1 } ).then(function (salle) {
            res.send(salle);
    }).catch(next);

});