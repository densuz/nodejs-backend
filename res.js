'use strict';

exports.ok = function (values, res) {
    var data = {
        'status': 200,
        'values': values
    };

    console.log(values)

    res.json(data);
    res.end();
};

//response untuk nested 
exports.oknested = function (values, res) {
    //lakukan akumulasi
    const hasil = values.reduce((akumulasikan, item) => {
        //tentukan key group
        if (akumulasikan[item.nama]) {
            //buat variabel group nama produk
            const group = akumulasikan[item.nama];
            //cek jika isi array adalah t_transaksi
            if (Array.isArray(group.t_transaksi)) {
                //tambahkan value ke dalam group t_transaksi
                group.t_transaksi.push(item.t_transaksi);
            } else {
                group.t_transaksi = [group.t_transaksi, item.t_transaksi];
            }
        } else {
            akumulasikan[item.nama] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status': 200,
        'values': hasil
    };

    res.json(data);
    res.end();

}
