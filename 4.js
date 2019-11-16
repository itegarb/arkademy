function findPair(angka[]){
	var array_sort = angka.slice().sort();		//mengcopy lalu mensortir aray input ke dalam variabel baru
	var res=0;

	for (i=0; i<array_sort.length-1; i++){			//jika array[i] = array[i+1], maka pair bertambah
		if (array_sort[i] == array_sort[i+1]){
			res += 1;
		}
	}
	return res;
}