function validate_username(username){
	if (username.length != 7 && username != string.toUpperCase(username)){
		return false;
	}
}

function validate_password(password){
	for (i=0; i<3; i++){
		if (Number.isInteger(password[i])){				//deteksi apakah password ke i adalah angka
			return true;
		} else {
			return false;
			break;
		}

		if (password[i] == password[i+1]){				//jika password ke i angka, maka akan dicek apakah password[i] = password[i+1]
			return true;								//jika iya, maka perulangan akan lanjut
		} else {										//jika tidak perulangan akan berhenti
			return false;
			break;
		}
	}

	if (password[3] == "*"){								//jika semua string password [0-2] sudah diverifikasi benar, maka akan dicek password[3]
		for (a=4; a<7; a++){								//perulangan dari 4-6
			if (Number.isInteger(password[a])){				//mengecek apakah password[a] integer
				return false;								//jika iya, maka stop, karena aturan password ke 4-6 adalah strinng 
				break;
			} else if ((password[a]) == password[a+1]){		//jika tidak, akan dicek apakah karakter password[a] = password [a+1]
				return true;								//jika iya return true
			} else {
				return false;								//jika tidak,stop
				break;
			}
		}
	}
	/*if (password[0] == password[1]){
		if (password[1] == password[2]){
			if (password[3] == "*"){
				if (password[4] == password[5]){
					if (password[5] == password[6]){
						return true;
					} else {
						return false;
					}
				} else {
					return false;
				}
			} else {
				return false;
			}
		} else {
			return false;
		}
	} else {
		return false;
	}*/
}