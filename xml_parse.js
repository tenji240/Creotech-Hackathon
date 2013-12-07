$.get("http://jsonp.jit.su/?raw=true&url=http%3A%2F%2Fmy.umbc.edu%2Fevents.xml", function(data){
 	var title_regex = /<title>(.+)<\/title>/gi;
 	var startdate = /<StartDate>(.+)<\/StartDate>/gi;
 	var enddate = /<EndDate>(.+)<\/EndDate>/gi;
 	var title_result = title_regex.exec(data);
	var date_result = startdate.exec(data);
	var end_result = enddate.exec(data);
    table = document.getElementById("JS_table");
    var strings = "<thead> <th>Event</th><th>Start</th><th>End</th> </thead>";
    while(title_result != null && date_result != null && end_result != null)
    {
  //      var element = document.createElement("td");
    //    element.appendChild(document.createTextNode("asdf"));
//	table.appendChild(element);
    strings = strings.concat("<tr>");
	strings = strings.concat("<td>" + title_result[1] + "</td>");
	strings = strings.concat("<td> " + date_result[1] + "</td>");
	strings = strings.concat("<td> " + end_result[1] + "</td>");
	strings = strings.concat("</tr>");
	end_result = enddate.exec(data);
	title_result = title_regex.exec(data);
	date_result = startdate.exec(data);
}
table.innerHTML = strings;
});

navigator.notification.alert(
    'WINNER');