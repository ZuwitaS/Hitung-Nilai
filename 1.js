function nilaiakhir(){
	var ntgs = parseInt(document.form.ntgs.value);
	var nuts = parseInt(document.form.nuts.value);
	var nuas = parseInt(document.form.nuas.value);
	var nhuruf = "";
	var nakhir = (parseInt(ntgs)*40/100) + (parseInt(nuts)*30/100) + (parseInt(nuas)*30/100);
	document.form.nakhir.value = nakhir;

	if( nakhir > 80){
		nhuruf = "A";
	}
	else if( nakhir > 70 ){
		nhuruf = "B";
	}
	else if( nakhir > 60 ){
		nhuruf = "C";
	}
	else if( nakhir > 40 ){
		nhuruf = "D";
	} else {
		nhuruf = "E";		
	}

	document.form.nhuruf.value = nhuruf;
}