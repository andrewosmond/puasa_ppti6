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

function fillName(){
	var nim = document.getElementById("myNIM");
	var name = document.getElementById("myName");

	if (nim.value === "2201828070") name.value = "Abednego Frami";
	else if (nim.value === "2201828064") name.value = "Adhika Nandatio";
	else if (nim.value === "2201828051") name.value = "Aldi";
	else if (nim.value === "2201828045") name.value = "Alexander Agung Sunaringtyas";
	else if (nim.value === "2201828032") name.value = "Alexius Pangestu";
	else if (nim.value === "2201828026") name.value = "Alvin Tanjaya";
	else if (nim.value === "2201828000") name.value = "Andrew Osmond";
	else if (nim.value === "2201827982") name.value = "Billie Johannes Lee";
	else if (nim.value === "2201827976") name.value = "Calvin";
	else if (nim.value === "2201827963") name.value = "Candra Wijaya";
	else if (nim.value === "2201827950") name.value = "Chandra Halim";
	else if (nim.value === "2201827944") name.value = "Christian Bryan Jayanto";
	else if (nim.value === "2201827931") name.value = "Cindy Priscilla";
	else if (nim.value === "2201827925") name.value = "David Aditya";
	else if (nim.value === "2201827912") name.value = "Deka Thomas";
	else if (nim.value === "2201827906") name.value = "Edgar Mananta";
	else if (nim.value === "2201827894") name.value = "Edrio";
	else if (nim.value === "2201827881") name.value = "Febi Mettasari";
	else if (nim.value === "2201827875") name.value = "Gabrielle Daniella";
	else if (nim.value === "2201827862") name.value = "Gede Ananta Puspayoga Wicaksana";
	else if (nim.value === "2201827856") name.value = "Harry Wijaya";
	else if (nim.value === "2201827843") name.value = "Jason Yonathan Huang";
	else if (nim.value === "2201827830") name.value = "Jovan Reynardo";
	else if (nim.value === "2201827824") name.value = "Kelvin Chandra";
	else if (nim.value === "2201827811") name.value = "Kevin Lesmana";
	else if (nim.value === "2201827805") name.value = "Marcel Julian";
	else if (nim.value === "2201827793") name.value = "Natasha Wijaya";
	else if (nim.value === "2201827641") name.value = "Nathanael Geordie Eka Putra";
	else if (nim.value === "2201827780") name.value = "Nico Ardian Nugroho";
	else if (nim.value === "2201827774") name.value = "Prasmadhani";
	else if (nim.value === "2201827654") name.value = "Renaldy Gunivon Kwong";
	else if (nim.value === "2201827761") name.value = "Rendi";
	else if (nim.value === "2201827755") name.value = "Rosayanti Efata";
	else if (nim.value === "2201827660") name.value = "Choirunnisa Putri Pangesti";
	else if (nim.value === "2201827742") name.value = "Sharen Sugiarto";
	else if (nim.value === "2201827736") name.value = "Steven Lavinske Santosa";
	else if (nim.value === "2201827723") name.value = "Timothy Nathanael Sampurna";
	else if (nim.value === "2201827710") name.value = "Verina Armelia";
	else if (nim.value === "2201827704") name.value = "Vincent Gunawan";
	else if (nim.value === "2201827692") name.value = "Vincentius Gandhi Djatmiko";
	else if (nim.value === "2201827686") name.value = "Widya Indriani Loka";
	else if (nim.value === "2201827673") name.value = "William Antony";
	else name.value = "";
}

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