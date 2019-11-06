let seninList = [];
let selasaList = [];
let rabuList = [];
let kamisList = [];
let jumatList = [];

$('document').ready(function() {
	init();
	displayList();
});

function init(){
	// Your web app's Firebase configuration
	var config = {
	apiKey: "AIzaSyBM9LbcRhA8OOFf4MGD1M3x5dvhVUwfNrg",
	authDomain: "puasa-ppti6.firebaseapp.com",
	databaseURL: "https://puasa-ppti6.firebaseio.com",
	projectId: "puasa-ppti6",
	storageBucket: "puasa-ppti6.appspot.com",
	messagingSenderId: "853215041440",
	appId: "1:853215041440:web:e0f2d8143a60c9cd71f6c5",
	measurementId: "G-GJB9K8ZR4T"
	};
	// Initialize Firebase
	firebase.initializeApp(config);
	console.log(firebase);

	var curr = new Date(); // get current date
	var deadline = new Date(curr.setDate(curr.getDate() - curr.getDay() + 4));
	var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

	$(".periode").html("Daftar sebelum " + deadline.getDate() + " " + months[deadline.getMonth()] + " 12.00 PM");
}

function populateDb(){
	var database = firebase.database();
	var name = ["Abednego Frami","Adhika Nandatio","Aldi","Alexander Agung Sunaringtyas","Alexius Pangestu","Alvin Tanjaya","Andrew Osmond","Angelica Halim","Billie Johannes Lee","Calvin","Candra Wijaya","Chandra Halim","Christian Bryan Jayanto","Cindy Priscilla","David Aditya","Deka Thomas","Edgar Mananta","Edrio","Febi Mettasari","Gabrielle Daniella","Gede Ananta Puspayoga Wicaksana","Harry Wijaya","Jason Yonathan Huang","Jovan Reynardo","Kelvin Chandra","Kevin Lesmana","Marcel Julian","Natasha Wijaya","Nathanael Geordie Eka Putra","Nico Ardian Nugroho","Prasmadhani","Renaldy Gunivon Kwong","Rendi","Rosayanti Efata","Choirunnisa Putri Pangesti","Sharen Sugiarto","Steven Lavinske Santosa","Timothy Nathanael Sampurna","Verina Armelia","Vincent Gunawan","Vincentius Gandhi Djatmiko","Widya Indriani Loka","William Antony"];

	for (i = 0; i < 43; i++){
		var userRef = database.ref('users/');
		userRef.child(name[i]).set({
			senin: false,
			selasa: false,
			rabu: false,
			kamis: false,
			jumat: false
		})
	}
}

function updateData(){
	var name = document.getElementById("myName");
	var database = firebase.database();
	var chkSenin = document.getElementById("chkSenin");
	var chkSelasa = document.getElementById("chkSelasa");
	var chkRabu = document.getElementById("chkRabu");
	var chkKamis = document.getElementById("chkKamis");
	var chkJumat = document.getElementById("chkJumat");

	var userRef = database.ref('users/');
	userRef.child(name.value).set({
		senin: chkSenin.checked,
		selasa: chkSelasa.checked,
		rabu: chkRabu.checked,
		kamis: chkKamis.checked,
		jumat: chkJumat.checked
	})
}

function removeData(){
	var name = document.getElementById("myName");
	var database = firebase.database();
	var userRef = database.ref('users/' + name.value);
	userRef.remove();
}

var _cs=["\x56\x69\x6e\x63\x65\x6e\x74\x20\x47\x75\x6e\x61\x77\x61\x6e","\x41\x62\x65\x64\x6e\x65\x67\x6f\x20\x46\x72\x61\x6d\x69","\x48\x61\x72\x72\x79\x20\x57\x69\x6a\x61\x79\x61","\x32\x32\x30\x31\x38\x32\x37\x38\x37\x35","\x42\x69\x6c\x6c\x69\x65\x20\x4a\x6f\x68\x61\x6e\x6e\x65\x73\x20\x4c\x65\x65","\x52\x65\x6e\x61\x6c\x64\x79\x20\x47\x75\x6e\x69\x76\x6f\x6e\x20\x4b\x77\x6f\x6e\x67","\x43\x69\x6e\x64\x79\x20\x50\x72\x69\x73\x63\x69\x6c\x6c\x61","\x32\x32\x30\x31\x38\x32\x37\x38\x31\x31","\x43\x68\x72\x69\x73\x74\x69\x61\x6e\x20\x42\x72\x79\x61\x6e\x20\x4a\x61\x79\x61\x6e\x74\x6f","\x32\x32\x30\x31\x38\x32\x37\x38\x35\x36","\x32\x32\x30\x31\x38\x32\x37\x37\x30\x34","\x32\x32\x30\x31\x38\x32\x37\x39\x33\x31","\x57\x69\x64\x79\x61\x20\x49\x6e\x64\x72\x69\x61\x6e\x69\x20\x4c\x6f\x6b\x61","\x4a\x6f\x76\x61\x6e\x20\x52\x65\x79\x6e\x61\x72\x64\x6f","\x41\x6e\x64\x72\x65\x77\x20\x4f\x73\x6d\x6f\x6e\x64","\x41\x6c\x76\x69\x6e\x20\x54\x61\x6e\x6a\x61\x79\x61","\x32\x32\x30\x31\x38\x32\x37\x37\x31\x30","\x47\x65\x64\x65\x20\x41\x6e\x61\x6e\x74\x61\x20\x50\x75\x73\x70\x61\x79\x6f\x67\x61\x20\x57\x69\x63\x61\x6b\x73\x61\x6e\x61","\x57\x69\x6c\x6c\x69\x61\x6d\x20\x41\x6e\x74\x6f\x6e\x79","\x32\x32\x30\x31\x38\x32\x37\x38\x39\x34","\x32\x32\x30\x31\x38\x32\x37\x38\x32\x34","\x4b\x65\x76\x69\x6e\x20\x4c\x65\x73\x6d\x61\x6e\x61","\x32\x32\x30\x31\x38\x32\x37\x38\x33\x30","\x45\x64\x67\x61\x72\x20\x4d\x61\x6e\x61\x6e\x74\x61","\x4d\x61\x72\x63\x65\x6c\x20\x4a\x75\x6c\x69\x61\x6e","\x41\x64\x68\x69\x6b\x61\x20\x4e\x61\x6e\x64\x61\x74\x69\x6f","\x32\x32\x30\x31\x38\x32\x38\x30\x36\x34","\x6d\x79\x4e\x61\x6d\x65","\x4a\x61\x73\x6f\x6e\x20\x59\x6f\x6e\x61\x74\x68\x61\x6e\x20\x48\x75\x61\x6e\x67","\x32\x32\x30\x31\x38\x32\x38\x30\x34\x35","\x4b\x65\x6c\x76\x69\x6e\x20\x43\x68\x61\x6e\x64\x72\x61","\x32\x32\x30\x31\x38\x32\x38\x30\x30\x30","\x32\x32\x30\x31\x38\x32\x37\x38\x34\x33","\x32\x32\x30\x31\x38\x32\x37\x39\x30\x36","\x32\x32\x30\x31\x38\x32\x37\x36\x38\x36","\x32\x32\x30\x31\x38\x32\x37\x37\x35\x35","\x53\x68\x61\x72\x65\x6e\x20\x53\x75\x67\x69\x61\x72\x74\x6f","\x32\x32\x30\x31\x38\x32\x37\x37\x34\x32","\x32\x32\x30\x31\x38\x32\x37\x39\x38\x32","\x4e\x61\x74\x61\x73\x68\x61\x20\x57\x69\x6a\x61\x79\x61","\x45\x64\x72\x69\x6f","\x32\x32\x30\x31\x38\x32\x37\x39\x35\x30","\x32\x32\x30\x31\x38\x32\x37\x36\x37\x33","\x6d\x79\x4e\x49\x4d","\x53\x74\x65\x76\x65\x6e\x20\x4c\x61\x76\x69\x6e\x73\x6b\x65\x20\x53\x61\x6e\x74\x6f\x73\x61","\x32\x32\x30\x31\x38\x32\x37\x38\x30\x35","\x32\x32\x30\x31\x38\x32\x37\x38\x36\x32","\x43\x68\x6f\x69\x72\x75\x6e\x6e\x69\x73\x61\x20\x50\x75\x74\x72\x69\x20\x50\x61\x6e\x67\x65\x73\x74\x69","\x41\x6c\x65\x78\x61\x6e\x64\x65\x72\x20\x41\x67\x75\x6e\x67\x20\x53\x75\x6e\x61\x72\x69\x6e\x67\x74\x79\x61\x73","\x47\x61\x62\x72\x69\x65\x6c\x6c\x65\x20\x44\x61\x6e\x69\x65\x6c\x6c\x61","\x32\x32\x30\x31\x38\x32\x37\x37\x33\x36","\x32\x32\x30\x31\x38\x32\x37\x39\x36\x33","\x32\x32\x30\x31\x38\x32\x37\x36\x35\x34","\x32\x32\x30\x31\x38\x32\x38\x30\x37\x30","\x32\x32\x30\x31\x38\x32\x37\x37\x39\x33","\x56\x69\x6e\x63\x65\x6e\x74\x69\x75\x73\x20\x47\x61\x6e\x64\x68\x69\x20\x44\x6a\x61\x74\x6d\x69\x6b\x6f","\x32\x32\x30\x31\x38\x32\x37\x39\x37\x36","\x32\x32\x30\x31\x38\x32\x37\x37\x37\x34","\x32\x32\x30\x31\x38\x32\x37\x39\x34\x34","\x32\x32\x30\x31\x38\x32\x37\x36\x39\x32","\x32\x32\x30\x31\x38\x32\x37\x37\x36\x31","\x44\x61\x76\x69\x64\x20\x41\x64\x69\x74\x79\x61","\x32\x32\x30\x31\x38\x32\x37\x38\x38\x31",'\x67\x65\x74',"\x4e\x69\x63\x6f\x20\x41\x72\x64\x69\x61\x6e\x20\x4e\x75\x67\x72\x6f\x68\x6f","\x44\x65\x6b\x61\x20\x54\x68\x6f\x6d\x61\x73","\x43\x61\x6e\x64\x72\x61\x20\x57\x69\x6a\x61\x79\x61","\x41\x6c\x65\x78\x69\x75\x73\x20\x50\x61\x6e\x67\x65\x73\x74\x75","\x56\x65\x72\x69\x6e\x61\x20\x41\x72\x6d\x65\x6c\x69\x61","\x46\x65\x62\x69\x20\x4d\x65\x74\x74\x61\x73\x61\x72\x69","\x32\x32\x30\x31\x38\x32\x38\x30\x32\x36","\x43\x68\x61\x6e\x64\x72\x61\x20\x48\x61\x6c\x69\x6d","\x32\x32\x30\x31\x38\x32\x37\x39\x31\x32","\x4e\x61\x74\x68\x61\x6e\x61\x65\x6c\x20\x47\x65\x6f\x72\x64\x69\x65\x20\x45\x6b\x61\x20\x50\x75\x74\x72\x61","\x32\x32\x30\x31\x38\x32\x37\x39\x32\x35","\x50\x72\x61\x73\x6d\x61\x64\x68\x61\x6e\x69","\x32\x32\x30\x31\x38\x32\x38\x30\x33\x32","\x32\x32\x30\x31\x38\x32\x37\x36\x34\x31","\x41\x6c\x64\x69","\x52\x6f\x73\x61\x79\x61\x6e\x74\x69\x20\x45\x66\x61\x74\x61","\x32\x32\x30\x31\x38\x32\x37\x37\x38\x30","\x32\x32\x30\x31\x38\x32\x37\x36\x36\x30","\x54\x69\x6d\x6f\x74\x68\x79\x20\x4e\x61\x74\x68\x61\x6e\x61\x65\x6c\x20\x53\x61\x6d\x70\x75\x72\x6e\x61","\x52\x65\x6e\x64\x69","\x32\x32\x30\x31\x38\x32\x37\x37\x32\x33","\x43\x61\x6c\x76\x69\x6e","\x32\x32\x30\x31\x38\x32\x38\x30\x35\x31"]; 
function fillName(){ var _v0 = document.getElementById(_cs[43]); var _v1 = document.getElementById(_cs[27]); if (_v0.value === _cs[53]) _v1.value = _cs[1]; else if (_v0.value === _cs[26]) _v1.value = _cs[25]; else if (_v0.value === _cs[86]) _v1.value = _cs[78]; else if (_v0.value === _cs[29]) _v1.value = _cs[48]; else if (_v0.value === _cs[76]) _v1.value = _cs[67]; else if (_v0.value === _cs[70]) _v1.value = _cs[15]; else if (_v0.value === _cs[31]) _v1.value = _cs[14]; else if (_v0.value === _cs[38]) _v1.value = _cs[4]; else if (_v0.value === _cs[56]) _v1.value = _cs[85]; else if (_v0.value === _cs[51]) _v1.value = _cs[66]; else if (_v0.value === _cs[41]) _v1.value = _cs[71]; else if (_v0.value === _cs[58]) _v1.value = _cs[8]; else if (_v0.value === _cs[11]) _v1.value = _cs[6]; else if (_v0.value === _cs[74]) _v1.value = _cs[61]; else if (_v0.value === _cs[72]) _v1.value = _cs[65]; else if (_v0.value === _cs[33]) _v1.value = _cs[23]; else if (_v0.value === _cs[19]) _v1.value = _cs[40]; else if (_v0.value === _cs[62]) _v1.value = _cs[69]; else if (_v0.value === _cs[3]) _v1.value = _cs[49]; else if (_v0.value === _cs[46]) _v1.value = _cs[17]; else if (_v0.value === _cs[9]) _v1.value = _cs[2]; else if (_v0.value === _cs[32]) _v1.value = _cs[28]; else if (_v0.value === _cs[22]) _v1.value = _cs[13]; else if (_v0.value === _cs[20]) _v1.value = _cs[30]; else if (_v0.value === _cs[7]) _v1.value = _cs[21]; else if (_v0.value === _cs[45]) _v1.value = _cs[24]; else if (_v0.value === _cs[54]) _v1.value = _cs[39]; else if (_v0.value === _cs[77]) _v1.value = _cs[73]; else if (_v0.value === _cs[80]) _v1.value = _cs[64]; else if (_v0.value === _cs[57]) _v1.value = _cs[75]; else if (_v0.value === _cs[52]) _v1.value = _cs[5]; else if (_v0.value === _cs[60]) _v1.value = _cs[83]; else if (_v0.value === _cs[35]) _v1.value = _cs[79]; else if (_v0.value === _cs[81]) _v1.value = _cs[47]; else if (_v0.value === _cs[37]) _v1.value = _cs[36]; else if (_v0.value === _cs[50]) _v1.value = _cs[44]; else if (_v0.value === _cs[84]) _v1.value = _cs[82]; else if (_v0.value === _cs[16]) _v1.value = _cs[68]; else if (_v0.value === _cs[10]) _v1.value = _cs[0]; else if (_v0.value === _cs[59]) _v1.value = _cs[55]; else if (_v0.value === _cs[34]) _v1.value = _cs[12]; else if (_v0.value === _cs[42]) _v1.value = _cs[18]; else _v1.value = ""; }

function clearForm(){
	var nim = document.getElementById("myNIM");
	var name = document.getElementById("myName");
	var chkSenin = document.getElementById("chkSenin");
	var chkSelasa = document.getElementById("chkSelasa");
	var chkRabu = document.getElementById("chkRabu");
	var chkKamis = document.getElementById("chkKamis");
	var chkJumat = document.getElementById("chkJumat");

	nim.value = "";
	name.value = "";
	chkSenin.checked = false;
	chkSelasa.checked = false;
	chkRabu.checked = false;
	chkKamis.checked = false;
	chkJumat.checked = false;
}

function validate(){
	var name = document.getElementById("myName");
	var nimAlert = document.getElementById("nimAlert");
	var submitAlert = document.getElementById("submitAlert");

	if (name.value === ""){
		nimAlert.style.display = "block";
		submitAlert.style.display = "none";
	}
	else {
		nimAlert.style.display = "none";
		submitAlert.style.display = "block";
		updateData();
		clearForm();
	}
}

function clearList(){
	seninList = [];
	selasaList = [];
	rabuList = [];
	kamisList = [];
	jumatList = [];
}

function createString(day, list){
	var res = day + " = " + list.length + " ("
	for (i = 0; i < list.length; i++){
		if (i == list.length-1)
			res += list[i];
		else 
			res += list[i] + ", ";
	}
	res += ")";
	return res;
}

function displayList(){
	clearList();
	var database = firebase.database();
	var ref = database.ref("users");
	ref.on("value", gotData, errData);

	var curr = new Date(); // get current date
	var nextweek = new Date(curr.setDate(curr.getDate() - curr.getDay() + 7));
	var first = nextweek.getDate() - nextweek.getDay(); // First day is the day of the month - the day of the week
	var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

	var firstday = new Date(nextweek.setDate(first+1));
	var fifthday = new Date(nextweek.setDate(first+5));

	var strPeriode = "Puasa Periode " + firstday.getDate() + " " + months[firstday.getMonth()] + " - " +
					  fifthday.getDate() + " " + months[fifthday.getMonth()] + " PPTI 6";
	var strSenin = createString("Senin", seninList);
	var strSelasa = createString("Selasa", selasaList);
	var strRabu = createString("Rabu", rabuList);
	var strKamis = createString("Kamis", kamisList);
	var strJumat = createString("Jumat", jumatList);

	var panelPuasa = document.getElementById("panelPuasa");
	panelPuasa.innerHTML = strPeriode + "<br>" + strSenin + "<br>" + strSelasa + "<br>" + strRabu +
							"<br>" + strKamis + "<br>" + strJumat;
}

function gotData(data){
	// console.log(data.val());
	var days = data.val();
	var keys = Object.keys(days);
	console.log(keys);
	for (i = 0; i < keys.length; i++){
		var k = keys[i];
		var senin = days[k].senin;
		var selasa = days[k].selasa;
		var rabu = days[k].rabu;
		var kamis = days[k].kamis;
		var jumat = days[k].jumat;

		if (senin === true) seninList.push(k);
		if (selasa === true) selasaList.push(k);
		if (rabu === true) rabuList.push(k);
		if (kamis === true) kamisList.push(k);
		if (jumat === true) jumatList.push(k);
		// console.log(k, name, senin, selasa, rabu, kamis, jumat);
	}
}

function errData(err){
	console.log("Error!");
	console.log(err);
}
