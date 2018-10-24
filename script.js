$(function(){
  $("#clickMe").click(function(){
    $("#clickNumber").val(function(i, val) {return val*1+1});
  });
});
// .val obtient la valeur de l'id
// initialisation de la fonction suivante qui nous permet d'incrémenter (augmenter) la valeur
// on utilise un *1 devant le +1 pour éviter que les clics ne soient qu'une  succession de 1.
