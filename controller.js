'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Back-End REST API Running Now!", res)
};

//menampilkan semua data tabel barang
exports.tampilbarang = function (req, res) {
    connection.query('SELECT * FROM t_barang', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data tabel transaksi
exports.tampilsemuatransaksi = function (req, res) {
    connection.query('SELECT * FROM t_transaksi', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data tabel user
exports.tampiluser = function (req, res) {
    connection.query('SELECT * FROM t_user', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//=============================BATAS TAMPIL=======================================================///

//menampilkan semua data tabel barang berdasarkan id_barang
exports.tampilbarangid = function (req, res) {
    let id_barang = req.params.id_barang;
    connection.query('SELECT * FROM t_barang WHERE id_barang = ?', [id_barang],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menampilkan semua data tabel TRANSAKSI berdasarkan kode TRANSAKSI
exports.tampiltransaksiid = function (req, res) {
    let kode_transaksi = req.params.kode_transaksi;
    connection.query('SELECT * FROM t_barang WHERE kode_transaksi = ?', [kode_transaksi],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menampilkan semua data tabel barang berdasarkan id_user
exports.tampiluserid = function (req, res) {
    let id_user = req.params.id_user;
    connection.query('SELECT * FROM user WHERE id_user = ?', [id_user],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//=============================BATAS TAMPIL BY ID=======================================================///

//menambahkan data transaksi
exports.tambahtransaksi = function (req, res) {
    var kode_transaksi = req.body.kode_transaksi;
    var kode_barang = req.body.kode_barang;
    var nama_barang = req.body.nama_barang;
    var id_user = req.body.id_user;
    var id_admin = req.body.id_admin;
    var id_pembayaran = req.body.id_pembayaran;
    var tgl_transaksi = req.body.tgl_transaksi;
 

    connection.query('INSERT INTO t_transaksi (kode_transaksi,kode_barang,nama_barang,id_user,id_admin,id_pembayaran,tgl_transaksi) VALUES(?,?,?,?,?,?,?)',
        [kode_transaksi,kode_barang,nama_barang,id_user,id_admin,id_pembayaran,tgl_transaksi],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

//menambahkan data barang
exports.tambahbarang = function (req, res) {
    var kode_barang = req.body.kode_barang;
    var nama_barang = req.body.nama_barang;
    var harga = req.body.harga;
    var jumlah_barang = req.body.jumlah_barang;
    var satuan = req.body.satuan;

    connection.query('INSERT INTO t_barang (kode_barang,nama_barang,harga,jumlah_barang,satuan) VALUES(?,?,?,?,?)',
        [kode_barang,nama_barang,harga,jumlah_barang,satuan],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

//menambahkan data USER
exports.tambahuser = function (req, res) {
    var id_user = req.body.id_user;
    var nama_user = req.body.nama_user;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var tanggal_daftar = req.body.tanggal_daftar;
    var nohp = req.body.nohp;
    var alamat = req.body.alamat;
 

    connection.query('INSERT INTO t_user (id_user,nama_user,username,email,password,tanggal_daftar,nohp,alamat) VALUES(?,?,?,?,?,?,?,?)',
        [id_user,nama_user,username,email,password,tanggal_daftar,nohp,alamat],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("User Berhasil Ditambahkan !", res)
            }
        });
};
//===============================================================BATAS TAMBAH DATA=======================================

//mengubah data berdasarkan kode_transaksi
exports.ubahtransaksi= function (req, res) {
    var kode_transaksi = req.body.kode_transaksi;
	var kode_barang = req.body.kode_barang;
    var nama_barang = req.body.nama_barang;
    var id_user = req.body.id_user;
    var id_admin = req.body.id_admin;
    var id_pembayaran = req.body.id_pembayaran;
    var tgl_transaksi = req.body.tgl_transaksi;
   

    connection.query('UPDATE t_transaksi SET kode_barang=?, nama_barang=?, id_user=?,id_admin=?,satuan=?,id_pembayaran=?,tgl_transaksi=?, WHERE kode_transaksi=?', [kode_barang, nama_barang, id_user,id_admin,harga,id_pembayaran,tgl_transaksi, kode_transaksi],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}

//mengubah data berdasarkan id_barang
exports.ubahbarang= function (req, res) {
    var id_barang = req.body.id_barang;
    var kode_barang = req.body.kode_barang;
    var nama_barang = req.body.nama_barang;
    var jenis_barang = req.body.jenis_barang;
    var jumlah = req.body.jumlah;
    var harga = req.body.harga;
    var satuan = req.body.satuan;
    var gambar_barang = gambar_barang;

    connection.query('UPDATE t_barang SET kode_barang=?, nama_barang=?, jenis_barang=?, jumlah=?,harga=?,satuan=?,gambar_barang=?, WHERE id_barang=?', [kode_barang, nama_barang, jenis_barang,jumlah,harga,satuan,gambar_barang, id_barang],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}

//mengubah data berdasarkan id_user
exports.ubahuser= function (req, res) {
    var id_user = req.body.id_user;
    var nama_user = req.body.nama_user;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
//tidak gunakan tanggal daftar untuk ubah user 
    var nohp = req.body.nohp;
    var alamat = req.body.alamat;
   

    connection.query('UPDATE t_user SET nama_user=?, username=?,email=?,password=?,nohp=?,alamat=?, WHERE id_user=?', [nama_user,username,email,password,nohp,alamat, id_user],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data User", res)
            }
        });
}

//====================================================BATAS UBAH DATA==================================================
//Menghapus data berdasarkan kode_transaksi
exports.hapustransaksi = function (req, res) {
    var kode_transaksi = req.body.kode_transaksi;
    connection.query('DELETE FROM t_transaksi WHERE kode_transaksi=?',[kode_transaksi],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data", res)
            }
        });
}


//Menghapus data berdasarkan id_barang
exports.hapusbarang = function (req, res) {
    var id_barang = req.body.id_barang;
    connection.query('DELETE FROM t_barang WHERE id_barang=?',[id_barang],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data", res)
            }
        });
}

//Menghapus data berdasarkan id_user
exports.hapususer = function (req, res) {
    var id_user = req.body.id_user;
    connection.query('DELETE FROM t_user WHERE id_user=?',[id_user],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus User", res)
            }
        });
}
// ==========================================BATAS SINTAK Delete===================================================================\\
 //menampilkan transaksi group (masih blum di fix)
 exports.tampilgroupbarang = function(req, res){
    connection.query('SELECT t_barang.id_barang,t_barang.kode_barang, t_barang.nama_barang, t_barang.harga,t_barang.jumlah_barang,t_barang.satuan, t_transaksi.kode_barang, t_transaksi.kode_transaksi from krs JOIN t_transaksi JOIN t_barang WHERE  t_transaksi = t_transaksi.kode_transaksi t_transaksi.kode_barang  = t_barang.id_barang ORDER BY t_barang.id_barang',
       function (error, rows, fields){
             if(error){
                 console.log(error);
             }else {
                 response.oknested(rows, res);
           }
         }
      )
 
  }

  //menampilkan TRANSAKSI group (masih blum di fix)
exports.tampilgrouptransaksi= function(req, res){
    connection.query('SELECT t_barang.id_barang,t_barang, t_barang.kode_barang, t_barang.nama_barang, t_barang.harga,t_barang.jumlah_barang,t_barang.satuan, t_transaksi.kode_barang from krs JOIN t_transaksi JOIN t_barang WHERE  t_transaksi = t_transaksi.kode_transaksi t_transaksi  = t_barang.id_barang ORDER BY t_barang.id_barang',
       function (error, rows, fields){
             if(error){
                 console.log(error);
             }else {
                 response.oknested(rows, res);
           }
         }
      )
 
  }
