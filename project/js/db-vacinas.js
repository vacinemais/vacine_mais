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

function atualizarTabela() {
  $.ajax({
    type: 'GET',
    url: 'https://historico-vacinacao-api.onrender.com/vaccines',
    success: function (response) {
      let dbVacinas = [];

      response.forEach((item, index) => {
        const actionsCell = '<td><button class="btn btn-sm btn-outline-primary mr-2" data-bs-toggle="modal" data-bs-target="#editar-vacina-modal" onclick="editarVacina($(this))">Editar</button><button class="btn btn-sm btn-outline-danger" onClick="deletarVacina($(this))">Excluir</button></td>';

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
          { data: 'actions' }
        ],
        "oLanguage": {
          "sSearch": ""
        },
        "lengthChange": false,
        "pageLength": -1,
        "paging": false,
        "info": false,
        "searching": true,
        "scrollY": "350px",
        "scrollCollapse": true,
      });

      $('.dataTables_filter label input').addClass('form-control form-control-sm mt-3').attr('placeholder', 'Qual vacina você procura?');
    }
  });
}

function editarVacina(button) {
  let row = button.closest('tr');
  let elements = row.find('td');

  editName = elements[1].innerText;
  editDose = elements[2].innerText;
  editManufacturer = elements[3].innerText;
  editDate = elements[4].innerText;

  $('#form-editar-vacina #ipVacinaNome').val(editName);
  $('#form-editar-vacina #ipVacinaDose').val(editDose);
  $('#form-editar-vacina #ipVacinaFabricante').val(editManufacturer);
  $('#form-editar-vacina #ipVacinaData').val(editDate);
}

function deletarVacina(button) {
  let row = button.closest('tr');
  let elements = row.find('td');

  let name = elements[1].innerText;
  let dose = elements[2].innerText;
  let manufacturer = elements[3].innerText;
  let date = elements[4].innerText;

  $.ajax({
    type: 'DELETE',
    url: `https://api-historico-vacine-mais.onrender.com/vaccine/${name}/${dose}/${manufacturer}/${date}`,
    success: function (response) {
      location.reload();
    },
    error: function (error) {
      console.error('Erro:', error);
    }
  });
}

function atualizarVacina() {
  let formData = {
    name: $('#form-editar-vacina #ipVacinaNome').val(),
    dose: $('#form-editar-vacina #ipVacinaDose').val(),
    manufacturer: $('#form-editar-vacina #ipVacinaFabricante').val(),
    date: $('#form-editar-vacina #ipVacinaData').val()
  };

  $.ajax({
    type: 'PUT',
    url: `https://api-historico-vacine-mais.onrender.com/${editName}/${editDose}/${editManufacturer}/${editDate}`,
    data: formData,
    success: function (response) {
      console.log('Sucesso:', response);
      location.reload();
    },
    error: function (error) {
      console.error('Erro:', error);
    }
  });
}

$(document).ready(function () {
  atualizarTabela();

  let editName, editDose, editManufacturer, editDate;

  $('#form-adicionar-vacina').submit(function (e) {
    e.preventDefault();

    let formData = {
      name: $('#form-adicionar-vacina #ipVacinaNome').val(),
      dose: $('#form-adicionar-vacina #ipVacinaDose').val(),
      manufacturer: $('#form-adicionar-vacina #ipVacinaFabricante').val(),
      date: $('#form-adicionar-vacina #ipVacinaData').val()
    };

    $.ajax({
      type: 'POST',
      url: 'https://api-historico-vacine-mais.onrender.com/vaccine',
      data: formData,
      success: function (response) {
        console.log('Sucesso:', response);
        location.reload();
      },
      error: function (error) {
        console.error('Erro:', error);
      }
    });
  });
}); 