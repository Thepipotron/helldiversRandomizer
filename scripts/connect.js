const weaponTable = new Tabulator("#weapontable", {
  dataTree: true,
  data: WeaponList,
  selectableRows: true,
  dataTreeElementColumn: "name",
  dataTreeChildIndent: 0,
  dataTreeSelectPropagate: true,
  layout: "fitDataTable",
  headerVisible: false,
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
