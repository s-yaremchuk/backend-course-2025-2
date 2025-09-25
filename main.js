const date = "20231001";       
const time_period = "q";       

const baseUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/basindbank");


baseUrl.searchParams.append("date", date);
baseUrl.searchParams.append("period", time_period);
baseUrl.searchParams.append("json", ""); 
baseUrl.searchParams.append("lang", "uk");      
baseUrl.searchParams.append("author", "bc2025");


console.log(baseUrl.href);