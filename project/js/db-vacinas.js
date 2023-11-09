var vacinasdb = [
    {
      "doenca": "Sarampo",
      "dose": "Dose 1",
      "fabricante": "Fiocruz",
      "data": "20/10/2009"
    },
    {
      "doenca": "Hepatite A",
      "dose": "Dose 1",
      "fabricante": "Instituto Butantan",
      "data": "20/12/2009"
    },
    {
      "doenca": "Tétano",
      "dose": "Dose 1",
      "fabricante": "Instituto Butantan",
      "data": "05/01/2010"
    },
    {
      "doenca": "Hepatite A",
      "dose": "Dose 2",
      "fabricante": "Instituto Butantan",
      "data": "20/02/2010"
    },
    {
      "doenca": "Febre Amarela",
      "dose": "Dose 1",
      "fabricante": "Fiocruz",
      "data": "05/04/2010"
    },
    {
      "doenca": "Tríplice Viral",
      "dose": "Dose 1",
      "fabricante": "Fiocruz",
      "data": "17/10/2011"
    },
    {
      "doenca": "Hepatite B",
      "dose": "Dose 1",
      "fabricante": "Instituto Butantan",
      "data": "26/01/2012"
    },
    {
      "doenca": "Hepatite B",
      "dose": "Dose 2",
      "fabricante": "Instituto Butantan",
      "data": "26/02/2012"
    },
    {
      "doenca": "Hepatite B",
      "dose": "Dose 3",
      "fabricante": "Instituto Butantan",
      "data": "26/07/2012"
    },
    {
      "doenca": "Tétano",
      "dose": "Dose 2",
      "fabricante": "Instituto Butantan",
      "data": "07/02/2020"
    },
    {
      "doenca": "Meningite B",
      "dose": "Dose 1",
      "fabricante": "BioNTech",
      "data": "15/05/2022"
    },
    {
      "doenca": "Pneumonia",
      "dose": "Dose 1",
      "fabricante": "Moderna",
      "data": "25/09/2022"
    },
    {
      "doenca": "Covid-19",
      "dose": "Dose 1",
      "fabricante": "Pfizer",
      "data": "10/12/2022"
    },
    {
        "doenca": "Rubéola",
        "dose": "Dose 1",
        "fabricante": "Fiocruz",
        "data": "15/03/2013"
    },
    {
        "doenca": "Hepatite A",
        "dose": "Dose 3",
        "fabricante": "Instituto Butantan",
        "data": "18/07/2013"
    },
    {
        "doenca": "Caxumba",
        "dose": "Dose 1",
        "fabricante": "Fiocruz",
        "data": "22/11/2013"
    },
    {
        "doenca": "Difteria",
        "dose": "Dose 1",
        "fabricante": "Instituto Butantan",
        "data": "02/04/2014"
    },
    {
        "doenca": "Hepatite B",
        "dose": "Dose 4",
        "fabricante": "Instituto Butantan",
        "data": "10/08/2014"
    },
    {
        "doenca": "Tétano",
        "dose": "Dose 3",
        "fabricante": "Instituto Butantan",
        "data": "15/12/2014"
    },
    {
        "doenca": "Pneumonia",
        "dose": "Dose 2",
        "fabricante": "Moderna",
        "data": "21/03/2015"
    },
    {
        "doenca": "Tríplice Viral",
        "dose": "Dose 2",
        "fabricante": "Fiocruz",
        "data": "30/07/2015"
    },
    {
        "doenca": "Covid-19",
        "dose": "Dose 2",
        "fabricante": "Pfizer",
        "data": "05/02/2023"
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
            .addClass("btn btn-sm btn-outline-primary mr-2")
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

function configurarTabela() {

}

$(document).ready(function() {
    atualizarLista(vacinasdb);

    const tabela = $('table');

    $('table').DataTable({
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
}); 