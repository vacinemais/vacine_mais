var vacinasdb = [
  {
    "doenca": "Sarampo",
    "dose": "Dose 1",
    "fabricante": "Fiocruz",
    "data": "2009/10/20"
  },
  {
    "doenca": "Hepatite A",
    "dose": "Dose 1",
    "fabricante": "Instituto Butantan",
    "data": "2009/12/20"
  },
  {
    "doenca": "Tétano",
    "dose": "Dose 1",
    "fabricante": "Instituto Butantan",
    "data": "2010/01/05"
  },
  {
    "doenca": "Hepatite A",
    "dose": "Dose 2",
    "fabricante": "Instituto Butantan",
    "data": "2010/02/20"
  },
  {
    "doenca": "Febre Amarela",
    "dose": "Dose 1",
    "fabricante": "Fiocruz",
    "data": "2010/04/05"
  },
  {
    "doenca": "Tríplice Viral",
    "dose": "Dose 1",
    "fabricante": "Fiocruz",
    "data": "2011/10/17"
  },
  {
    "doenca": "Hepatite B",
    "dose": "Dose 1",
    "fabricante": "Instituto Butantan",
    "data": "2012/01/26"
  },
  {
    "doenca": "Hepatite B",
    "dose": "Dose 2",
    "fabricante": "Instituto Butantan",
    "data": "2012/02/26"
  },
  {
    "doenca": "Hepatite B",
    "dose": "Dose 3",
    "fabricante": "Instituto Butantan",
    "data": "2012/07/26"
  },
  {
    "doenca": "Tétano",
    "dose": "Dose 2",
    "fabricante": "Instituto Butantan",
    "data": "2020/02/07"
  },
  {
    "doenca": "Meningite B",
    "dose": "Dose 1",
    "fabricante": "BioNTech",
    "data": "2022/05/15"
  },
  {
    "doenca": "Pneumonia",
    "dose": "Dose 1",
    "fabricante": "Moderna",
    "data": "2022/09/25"
  },
  {
    "doenca": "Covid-19",
    "dose": "Dose 1",
    "fabricante": "Pfizer",
    "data": "2022/12/10"
  },
  {
    "doenca": "Rubéola",
    "dose": "Dose 1",
    "fabricante": "Fiocruz",
    "data": "2013/03/15"
  },
  {
    "doenca": "Hepatite A",
    "dose": "Dose 3",
    "fabricante": "Instituto Butantan",
    "data": "2013/07/18"
  },
  {
    "doenca": "Caxumba",
    "dose": "Dose 1",
    "fabricante": "Fiocruz",
    "data": "2013/11/22"
  },
  {
    "doenca": "Difteria",
    "dose": "Dose 1",
    "fabricante": "Instituto Butantan",
    "data": "2014/04/02"
  },
  {
    "doenca": "Hepatite B",
    "dose": "Dose 4",
    "fabricante": "Instituto Butantan",
    "data": "2014/08/10"
  },
  {
    "doenca": "Tétano",
    "dose": "Dose 3",
    "fabricante": "Instituto Butantan",
    "data": "2014/12/15"
  },
  {
    "doenca": "Pneumonia",
    "dose": "Dose 2",
    "fabricante": "Moderna",
    "data": "2015/03/21"
  },
  {
    "doenca": "Tríplice Viral",
    "dose": "Dose 2",
    "fabricante": "Fiocruz",
    "data": "2015/07/30"
  },
  {
    "doenca": "Covid-19",
    "dose": "Dose 2",
    "fabricante": "Pfizer",
    "data": "2023/02/05"
  }
];

function atualizarLista(array) {
  const table = $("table tbody");

  array.forEach((item, index) => {
    const row = $("<tr>");

    const serialNumberCell = $("<td>").text(index + 1);
    const diseaseCell = $("<td>").text(item.name);
    const doseCell = $("<td>").text("Dose" + item.dose);
    const manufacturerCell = $("<td>").text(item.manufacturer);
    const dateCell = $("<td>").text(item.date);

    const editButton = $("<button>")
      .addClass("btn btn-sm btn-outline-primary mr-2")
      .attr("data-bs-toggle", "modal")
      .attr("data-bs-target", "#editar-vacina-modal")
      .text("Editar");

    const deleteButton = $("<button>")
      .addClass("btn btn-sm btn-outline-danger")
      .text("Excluir");

    const actionsCell = $("<td>").append(editButton, deleteButton);

    row.append(
      serialNumberCell,
      diseaseCell,
      doseCell,
      manufacturerCell,
      dateCell,
      actionsCell
    );

    table.append(row);
  });
}

function getVaccines() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/vaccines',
    success: function (response) {
      let dbVacinas = [];
      response.forEach((item, index) => {
        const editButton = $("<button>")
          .addClass("btn btn-sm btn-outline-primary mr-2")
          .attr("data-bs-toggle", "modal")
          .attr("data-bs-target", "#editar-vacina-modal")
          .text("Editar")
          .on("click", function() {
            // Adicione aqui a lógica para manipular o evento de clique no botão "Editar"
            console.log("Editar clicado para a vacina com ID: " + (index + 1));
          });

        const deleteButton = $("<button>")
          .addClass("btn btn-sm btn-outline-danger")
          .text("Excluir")
          .on("click", function() {
            // Adicione aqui a lógica para manipular o evento de clique no botão "Excluir"
            console.log("Excluir clicado para a vacina com ID: " + (index + 1));
          });

        const actionsCell = $("<td>").append(editButton, deleteButton);

        const vacina = {
          "id": index + 1,
          "name": item.name,
          "dose": item.dose,
          "manufacturer": item.manufacturer,
          "date": item.date,
          "actions": actionsCell
        };

        dbVacinas.push(vacina);
      });

      $("table").DataTable().destroy();
      $("table").DataTable({
        data: dbVacinas,
        columns: [
          { data: 'id' },
          { data: 'name' },
          { data: 'dose' },
          { data: 'manufacturer' },
          { data: 'date' },
          { data: 'actions'}
        ]
      });
    }
  });
}


$(document).ready(function () {
  getVaccines();

  $('.dataTables_filter label input').addClass('form-control form-control-sm mt-3').attr('placeholder', 'Qual vacina você procura?');

  $('#form-adicionar-vacina').submit(function (e) {
    e.preventDefault();

    var formData = {
      name: $('#ipVacinaNome').val(),
      dose: $('#ipVacinaDose').val(),
      manufacturer: $('#ipVacinaFabricante').val(),
      date: $('#ipVacinaData').val()
    };

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/vaccine',
      data: formData,
      success: function (response) {
        console.log('Sucesso:', response);
      },
      error: function (error) {
        console.error('Erro:', error);
      }
    });
  });
}); 