
var AktuellData = [
{
	"Date":"2013-03-20",
	"Title": "kallese till årsmöte",
	"Content": "Vi kommer att hålla årsmöte Klockarbol i Stigtomta. Varmt välkommen till detta årsmöte.",
	"From": "Styrelsen",
	"Time" : "Onsdag 20 mars kl 18.30.",
	"Where" : "Klockarbol i Stigtomta"
},
{
	"Date" : "2012-03-22",
	"Title": "Kallelse till årsmöte",
	"Content" : "Vi kommer att hålla årsmöte i Klockarbol Stigtomta. Det bjuds på kaffe och hembakat bröd. Lotter kommer att säljas. Varmt välkomna till detta årsmöte.",
	"From" : "Styrelsen",
	"Time" : "Torsdag 22 mars kl 18.30.",
	"Where" : "Klockarbol Stigtomta"
},
{
	"Date":"2011-05-24",
	"Title": "Prata med djur",
	"Content": "Välkommen till en innehållsrik kväll då djurkommunikatör Siv Silvo berättar om sin verksamhet, med orden lyhördhet respekt ochsamverkan.",
	"From": "Styrelsen",
	"Time" : "Tisdag 24 maj kl 19.00 på Stigtomtagården.",
	"Price" : "Entréavgift 20 kr.",
	"Where": "Stigtomtagården"
},
{
	"Date":"2011-03-23",
	"Title": "Kallelse till årsmöte",
	"Content": "Bäste djurvän! Vi kommer att hålla årsmöte i Klockarbol Stigtomta. Det bjuds på kaffe och hembakat Lotter kommer att säljas. Varmt välkommen till detta årsmöte.",
	"From": "Styrelsen",
	"Time" : "Onsdag 23 mars kl 18.30 ",
	"Where" : "Klockarbol Stigtomta."
	
},
{
	"Date":"2010-03-25",
	"Title": "kallese till årsmöte",
	"Content": "Bäste djurvän! Vi kommer att hålla årsmöte i Klockarbol Stigtomta. Det bjuds på kaffe och kaka. Årsmötet börjar med ett föredrag av länsveterinär Per Jonsson om djurskyddet. Varmt välkommen till detta årsmöte.",
	"From": "Styrelsen",
	"Time" : "Torsdag 25 mars kl 18.00",
	"Price" : "Entréavgift 20 kr.",
	"Where" : "Klockarbol Stigtomta."
},
{
	"Date":"2009-10-06",
	"Title": "Välkommen till en informationskväll om hästar.",
	"Content": "Föredragshållare vet. Karin Ståhl kommer att prata om hästars behov, av att ha ett bra liv.",
	"From": "Styrelsen",
	"Time" : " tisdag den 6 oktober kl 18.00.",
	"Price" : "Entréavgift 20 kr.",
	"Where" : "Stigtomtagården Nyköping"
},
{
	"Content" : "Vi vill informera om att man ABSOLUT inte ska skaffa sommarkatt. Övergivna sommarkatter fryser eller svälter ihjäl och går ett plågsamt öde till mötes. En katt är helt beroende av människan för att överleva. Tänk på att om du skaffar en katt ska den vara älskad och omskött i hela sitt liv "
}
];

var IndexContent = [{
	"Title": "hej",
	"Content" : "skogsbär"
}

];

var IndexContent = [{
	"Title": "hej",
	"Content" : "skogsbär"
}

];



$( document ).ready(function() {


var source   = $("#insertData").html();

var template = Handlebars.compile(source);
var context = {data:  AktuellData};
var html    = template(context);
var second  = template(html);
contentData.innerHTML = html;


});
