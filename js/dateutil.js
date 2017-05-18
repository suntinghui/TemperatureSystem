var now = new Date(); //当前日期 
var nowDayOfWeek = now.getDay(); //今天本周的第几天 
var nowDay = now.getDate(); //当前日 
var nowMonth = now.getMonth(); //当前月 
var nowYear = now.getFullYear(); //当前年 

//获得本周的开始日期 
function getWeekStartDate() {
	var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
	return formatDate(weekStartDate);
}

//获得本周的结束日期 
function getWeekEndDate() {
	var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
	return formatDate(weekEndDate);
}

//格式化日期：yyyy-MM-dd 
function formatDate(date) {
	var myyear = date.getFullYear();
	var mymonth = date.getMonth() + 1;
	var myweekday = date.getDate();

	if(mymonth < 10) {
		mymonth = "0" + mymonth;
	}
	if(myweekday < 10) {
		myweekday = "0" + myweekday;
	}
	return(myyear + "-" + mymonth + "-" + myweekday);
}