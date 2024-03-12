const weaponTable = new Tabulator("#weapontable", {
  dataTree: true,
  data: WeaponList,
  selectableRows: true,
  dataTreeElementColumn: "name",
  dataTreeChildIndent: 0,
  dataTreeSelectPropagate: true,
  layout: "fitDataTable",
  headerVisible: false,
  tooltipsHeader: false,
  columns: [
    {
      // Weapon group
      title: "Weapons",
      columns: [
        {
          title: "",
          field: "name",
          hozAlign: "left",
          vertAlign: "middle",
          minWidth: 250,
        },
        {
          title: "",
          field: "image",
          formatter: "image",
          minWidth: 200,
          maxWidth: 400,
        },
      ],
    },
  ],
});

const stratagemTable = new Tabulator("#stratagemtable", {
  dataTree: true,
  data: StratagemList,
  selectableRows: true,
  dataTreeElementColumn: "name",
  dataTreeChildIndent: 0,
  dataTreeSelectPropagate: true,
  layout: "fitDataTable",
  headerVisible: false,
  columns: [
    {
      // Weapon group
      title: "Strategem",
      columns: [
        {
          title: "",
          field: "name",
          hozAlign: "left",
          vertAlign: "middle",
          minWidth: 250,
        },
        {
          title: "",
          field: "image",
          formatter: function (cell, formatterParams) {
            if (cell.getValue() == "") {
              return "";
            }

            var img = document.createElement("object");
            img.data = cell.getValue();
            img.width = 100;
            img.height = 100;

            return img;
          },
          minWidth: 200,
          maxWidth: 400,
        },
      ],
    },
  ],
});

function randomize() {
  const selectedWeapons = weaponTable.getSelectedData();

  var Primary = [];
  var Secondary = [];
  var i = 0;

  console.log(Primary);

  i++;

  for (; i < selectedWeapons.length; i++) {
    var selectedName = selectedWeapons[i]["name"];
    if (selectedName != "Primary" && selectedName != "Secondary") {
      if (
        selectedName == "P-19 Redeemer" ||
        selectedName == "P-2 Peacemaker" ||
        selectedName == "P-4 Senator"
      ) {
        Secondary.push(selectedWeapons[i]);
      } else {
        Primary.push(selectedWeapons[i]);
      }
    }
  }

  console.log(Secondary);

  const selectedStrategems = stratagemTable.getSelectedData();
  var Strategem = [];
  console.log(selectedStrategems);
  for (var j = 0; j < selectedStrategems.length; j++) {
    var currName = selectedStrategems[j]["name"];
    if (
      currName != "Patriotic Administration Center " &&
      currName != "Orbital Cannons" &&
      currName != "Hanger" &&
      currName != "Bridge" &&
      currName != "Engineering Bay" &&
      currName != "Robotics Workshop"
    ) {
      Strategem.push(selectedStrategems[j]);
    }
  }

  var selectedPrimary = Primary[Math.floor(Math.random() * Primary.length)];
  var selectedSecondary =
    Secondary[Math.floor(Math.random() * Secondary.length)];

  console.log(selectedPrimary);
  console.log(selectedSecondary);

  document.getElementById("RandomPrimary").innerHTML = selectedPrimary["name"];
  document.getElementById("RandomPrimaryImage").src = selectedPrimary["image"];

  document.getElementById("RandomSecondary").innerHTML =
    selectedSecondary["name"];
  document.getElementById("RandomSecondaryImage").src =
    selectedSecondary["image"];

  stratagemLength = Strategem.length;

  for (var k = 0; k < 4; k++) {
    var stratIndex = Math.floor(Math.random() * stratagemLength);
    console.log("IDX: " + stratIndex);
    console.log(Strategem);
    var selectedStrategem = Strategem[stratIndex];

    document.getElementById("Strategem" + (k + 1)).innerHTML =
      selectedStrategem["name"];
    document.getElementById("Strategem" + (k + 1) + "Image").data =
      selectedStrategem["image"];

    Strategem.splice(stratIndex, 1);

    stratagemLength--;
  }

  console.log(Strategem);
}
