'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampilbarang')
        .get(jsonku.tampilbarang);

    app.route('/tampilbarang/:id')
        .get(jsonku.tampilbarangid);

    app.route('/tambahbarang')
        .post(jsonku.tambahbarang);

    app.route('/ubahbarang')
        .put(jsonku.ubahbarang);

    app.route('/hapusbarang')
        .delete(jsonku.hapusbarang);

    app.route('/tampilbaranggroup')
        .get(jsonku.tampilgroupbarang);

    //TRANSAKSI
    app.route('/tampiltransaksi')
        .get(jsonku.tampilsemuatransaksi);

    app.route('/tampilidtransaksi/:id')
        .get(jsonku.tampiltransaksiid);

    app.route('/tambahtransaksi')
        .post(jsonku.tambahtransaksi);

    app.route('/ubahtransaksi')
        .put(jsonku.ubahtransaksi);

    app.route('/hapustransaksi')
        .delete(jsonku.hapustransaksi);

    //USER
    app.route('/tampiluser')
        .get(jsonku.tampiluser);

    app.route('/tampiluserid/:id')
        .get(jsonku.tampiluserid);

    app.route('/tambahuser')
        .post(jsonku.tambahuser);

    app.route('/ubahuser')
        .put(jsonku.ubahuser);

    app.route('/hapususer')
        .delete(jsonku.hapususer);
        
//Kontak
   app.route('/send')
        .post(jsonku.tambahkontak);

}