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