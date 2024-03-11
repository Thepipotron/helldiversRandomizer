const body = document.body,
tbl = new Tabulator("#weapontable", {
   data:PrimaryWeapons,
   selectableRows:true,
   columns:[
	   {title:"Name",field:"name",hozAlign:"left",vertAlign:"middle"},
	   {title:"Image",field:"image", formatter:"image",minWidth : 200, formatterParams:{
	   }},
   ],
});
tbl2 = new Tabulator("#weapontable2", {
	data:PrimaryWeapons,
	selectableRows:true,
	columns:[
		{title:"Name",field:"name",hozAlign:"left",vertAlign:"middle"},
		{title:"Image",field:"image", formatter:"image",minWidth : 200, formatterParams:{
		}},
	],
 });
function Startup(){

	// Display weapon list


/*
	for(var i = 0; i < PrimaryWeapons.length; i++){
		console.log("Appending " + i);
		const tr = tbl.insertRow();
		const weaponName = tr.insertCell();
		const weaponImage = tr.insertCell();
		let weapon = PrimaryWeapons[i];

		weaponName.appendChild(document.createTextNode(weapon[0]));
		weaponName.style.border = '1px solid black';


		var image = document.createElement('img');
		image.src = weapon[1];
		weaponImage.appendChild(image);
	}
*/
}