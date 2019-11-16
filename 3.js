function cek_kata(kata){
	var total_kata;
	for (i=0; i<kata.length; i++;){
		if (kata[i] === " "){					//jika sebuah spasi ditemukan
			total_kata += 1;					//tambah 1 kata
		} else {
			total_kata += 1;					//tambah 1 kata, karena spasi ada diantara 2 kata
		}
	}
}