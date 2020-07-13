'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Back-End REST API Running Now!", res)
};

//menampilkan semua data tabel produk
exports.tampilsemuaproduk = function (req, res) {
    connection.query('SELECT * FROM t_produk', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data tabel produk berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_produk WHERE id_produk = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menambahkan data produk
exports.tambahproduk = function (req, res) {
    var kd_produk = req.body.kd_produk;
    var nama_produk = req.body.nama_produk;
    var jenis_produk = req.body.jenis_produk;
    var jumlah = req.body.jumlah;
    var harga = req.body.harga;
    var satuan = req.body.satuan;

    connection.query('INSERT INTO t_produk (kd_produk,nama_produk,jenis_produk,jumlah,harga,satuan) VALUES(?,?,?,?,?,?)',
        [kd_produk, nama_produk, jenis_produk,jumlah,harga,satuan],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

//mengubah data berdasarkan id
exports.ubahproduk= function (req, res) {
    var id = req.body.id_produk;
    var kd_produk = req.body.kd_produk;
    var nama_produk = req.body.nama_produk;
    var jenis_produk = req.body.jenis_produk;
    var jumlah = req.body.jumlah;
    var harga = req.body.harga;
    var satuan = req.body.satuan;

    connection.query('UPDATE t_produk SET kd_produk=?, nama_produk=?, jenis_produk=?, jumlah=?,harga=?,satuan=?, WHERE id_produk=?', [kd_produk, nama_produk, jenis_produk,jumlah,harga,satuan, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}

//Menghapus data berdasarkan id
exports.hapusproduk = function (req, res) {
    var id = req.body.id_produk;
    connection.query('DELETE FROM t_produk WHERE id_produk=?',[id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data", res)
            }
        });
}

/*/ dibawah ini sementara tidak digunakan /*/
//menampilkan matakuliah group
//exports.tampilgroupmatakuliah = function(req, res){
   // connection.query('SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks from krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa',
      //  function (error, rows, fields){
       //     if(error){
        //        console.log(error);
         //   }else {
         //       response.oknested(rows, res);
          //  }
       // }
    // )

// }


