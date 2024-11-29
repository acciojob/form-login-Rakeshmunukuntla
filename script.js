function getFormvalue()
	{
		let form=document.getElementById("form1");
		let fir=form.elements["fname"].value;
		let las=form.elements["lname"].value;
		alert(fir+" "+las);
}
