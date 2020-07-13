'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuaproduk);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);
    app.route('/tambah')
        .post(jsonku.tambahproduk);

    app.route('/ubah')
        .put(jsonku.ubahproduk);
        
    app.route('/hapus')
        .delete(jsonku.hapusproduk);

//    app.route('/tampilmatakuliah')
  //      .get(jsonku.tampilgroupmatakuliah);
        
}