var AccessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlhYjliNzRlM2QxMjM1OGY5MjJmOTZiNDc3ZDIzOWFkMzhkYmJkZDc5OGM5YmIyYmJkYzQ2ZDFmNWUxMTMzMDU3ZTNkZDgyOTA3NjhiMzg5In0.eyJhdWQiOiIyIiwianRpIjoiOWFiOWI3NGUzZDEyMzU4ZjkyMmY5NmI0NzdkMjM5YWQzOGRiYmRkNzk4YzliYjJiYmRjNDZkMWY1ZTExMzMwNTdlM2RkODI5MDc2OGIzODkiLCJpYXQiOjE1NzM0NzE4NjgsIm5iZiI6MTU3MzQ3MTg2OCwiZXhwIjoxNjA1MDk0MjY4LCJzdWIiOiIyNyIsInNjb3BlcyI6W119.ooM1lHo5DBq-F0TbEP4zWQSjcpExXoS_mrG3OeBXajTG-VCWrr7l5fuaTamHF8-FccHY6mE_ckK94mk-eEaevPIdxDqul8kcF9S0fyVhHBYAr17gMkbZIqYDrcW4-G_qTvwnpAslKfqLZ7LRPLstwN8mEhHlnEnM1rDzo64Kj4ZhnvRq6L9ZEtpysNdzTpIsXyNaMcQwNk4Z13VlF-NzcEt7jBbDj8McELrw9KLnldrjZjs0cxv_drKLibIspO89goqARBVGNRR5YD4S4j9jyvup10aa2PPsBjPqb_ojEWkfR7eV5VzfDQLwt-uWQ9EFNj8CWc3PH-UrdLUddsCUFxbBFewHYfiB-xOyU7ek765rWxKpfK8I2DQGcr0uq3U8yobOIX3Uoia9yTJycc48xH0T9Rfc661enTwNQLfMUCQznTAI1HD69-gCl0DCVwB3LbpanGkpJc0aJzWPq-YftqfnVYITH5Jg00Ut1BiDW8gO_mIGH2v7voRPfHVP4oLOTXklJl1_WnqfcI6_gm3l1IpNSPRkP4BwSuSLeyLMkkOscEMmrqODt7iXOBfcNzzpPzoyJRS931sO03jTf_ilM6rahBWrR4oku6QjKVaHXqgpRI6ebeBoNJi2YJrysWyOg0HyxB463HcK4CUiI8KrM8xI-c0XG9e9bX0DAehEdHA";
	$(document).ready(function() {
		$("#test_button").click(function() {
			var macaddr = "?macaddr=" + "aa53e8b0";
			var date_filter = "&date_filter=" + "2019-11-11 11:00:00+-+2019-11-11 12:00:00";
			var data_array;
			$.ajax({
				type: "POST",
				url: "https://campus.kits.tw/ICN_API" + macaddr + date_filter,
				dataType: "json",
				async: false,
				success: function(response) {
					// console.log(response);
					data_array = response;
					document.getElementById("barometer").innerHTML = response[0]['barometer'] + " hPA";
					document.getElementById("humidity").innerHTML = response[0]['humidity']  + " %";
					document.getElementById("temperature").innerHTML = response[0]['temperature'] + " Celsius degree";
				},
				headers: {
					'Accept': 'application/json',
					'Authorization': 'Bearer ' + AccessToken
				},
				error: function(jqXHR) {
					//alert("Return status: " + jqXHR.status);
					if(jqXHR.status == '200')
						alert("API calling error: macaddr or url format error!");
					else
						alert("API is sleeping !");
				}
			})
		})
	});