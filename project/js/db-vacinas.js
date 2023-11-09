var vacinasdb = [
    {
      doenca: "Sarampo",
      dose: "Dose 1",
      fabricante: "Fiocruz",
      data: "20/10/2009",
    },
    {
      doenca: "Hepatite A",
      dose: "Dose 1",
      fabricante: "Instituto Butantan",
      data: "20/12/2009",
    },
    {
      doenca: "Tétano",
      dose: "Dose 1",
      fabricante: "Instituto Butantan",
      data: "05/01/2010",
    },
    {
      doenca: "Hepatite A",
      dose: "Dose 2",
      fabricante: "Instituto Butantan",
      data: "20/02/2010",
    },
    {
      doenca: "Febre Amarela",
      dose: "Dose 1",
      fabricante: "Fiocruz",
      data: "05/04/2010",
    },
    {
      doenca: "Tríplice Viral",
      dose: "Dose 1",
      fabricante: "Fiocruz",
      data: "17/10/2011",
    },
    {
      doenca: "Hepatite B",
      dose: "Dose 1",
      fabricante: "Instituto Butantan",
      data: "26/01/2012",
    },
    {
      doenca: "Hepatite B",
      dose: "Dose 2",
      fabricante: "Instituto Butantan",
      data: "26/02/2012",
    },
    {
      doenca: "Hepatite B",
      dose: "Dose 3",
      fabricante: "Instituto Butantan",
      data: "26/07/2012",
    },
    {
      doenca: "Tétano",
      dose: "Dose 2",
      fabricante: "Instituto Butantan",
      data: "07/02/2020",
    }
];

function atualizarLista(array) {
    const table = $("table tbody");

    array.forEach((item, index) => {
        const row = $("<tr>");

        const serialNumberCell = $("<td>").text(index + 1);
        const diseaseCell = $("<td>").text(item.doenca);
        const doseCell = $("<td>").text(item.dose);
        const manufacturerCell = $("<td>").text(item.fabricante);
        const dateCell = $("<td>").text(item.data);

        const editButton = $("<button>")
            .addClass("btn btn-sm btn-outline-primary")
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

$(document).ready(function() {
    atualizarLista(vacinasdb);

    $('table').DataTable({
        columnDefs: [
            { type: 'date', targets: 'data-header' }
        ]
    });
});