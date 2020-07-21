'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampilsemuabarang')
        .get(jsonku.tampilsemuabarang);

    app.route('/tampilbarang/:id')
        .get(jsonku.tampilbarangid);
    app.route('/tambahbarang')
        .post(jsonku.tambahbarang);

    app.route('/ubahbarang')
        .put(jsonku.ubahbarang);

    app.route('/hapusbarang')
        .delete(jsonku.hapusbarang);

//TRANSAKSI
    app.route('/tampiltransaksi')
        .get(jsonku.tampilsemuatransaksi);

        app.route('/tampilidtransaksi/:id')
        .get(jsonku.tampiltransaksiid);

        app.route('/tambahtransaksi')
        .post(jsonku.tambahtransaksi);


    //    app.route('/tampilmatakuliah')
    //      .get(jsonku.tampilgroupmatakuliah);

}