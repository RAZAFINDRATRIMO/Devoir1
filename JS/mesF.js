function Exercice1()
{
    $.ajax
    (
        {
            type:"get",
            url:"PHP/getLesCategories.php",
            success:function(data)
            {
                // On vide la DIV
                $('#divCategories').empty();
                $('#divCategories').append(data);
            },
            error:function()
            {
                alert("Erreur sur les catégories");
            }
        }
    );
}
function Exercice2()
{
    $.ajax
    (
        {
            type:"get",
            url:"PHP/getLesDeals.php",
            success:function(data)
            {
                // On vide la DIV
                $('#divDeals').empty();
                $('#divDeals').append(data);
            },
            error:function()
            {
                alert("Erreur sur les deals");
            }
        }
    );

}

function AfficherLesServices()
{
    $.ajax
    (
        {
            type:"get",
            url:"PHP/getLesServices.php",
            data:"id="+$('#lstServices').val(),
            success:function(data)
            {
                // On vide la DIV
                $('#divServices').empty();
                $('#divServices').append(data);
            },
            error:function()
            {
                alert("Erreur sur les services");
            }
        }
    );
}