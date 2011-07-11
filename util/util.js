
urlReqStringFromObj = function(options) {
  options = options || {};
  var rArray = [];
  for(var key in options) {
    var value = options[key];
    rArray.push(key + "=" + value);
  }
  return rArray.join("&");
};

Number.prototype.toCurrency=function(noFractions,currencySymbol,decimalSeparator,thousandsSeparator){ 
  var n,startAt,intLen;
  if (currencySymbol==null) currencySymbol="kr";
  if (decimalSeparator==null) decimalSeparator=".";
  if (thousandsSeparator==null) thousandsSeparator=",";
  n = this.round(noFractions?0:2,true,decimalSeparator);
  intLen=n.length-(noFractions?0:3);
  if ((startAt=intLen%3)==0) startAt=3;
  for (var i=0,len=Math.ceil(intLen/3)-1;i<len;i++)n=n.insertAt(i*4+startAt,thousandsSeparator);
  return currencySymbol+n;
} 
Number.prototype.toInteger=function(thousandsSeparator){ 
  var n,startAt,intLen;
  if (thousandsSeparator==null) thousandsSeparator=".";
  n = this.round(0,true);
  intLen=n.length;
  if ((startAt=intLen%3)==0) startAt=3;
  for (var i=0,len=Math.ceil(intLen/3)-1;i<len;i++)n=n.insertAt(i*4+startAt,thousandsSeparator);
  return n;
} 
Number.prototype.round=function(decimals,returnAsString,decimalSeparator){ 
  //Supports 'negative' decimals, e.g. myNumber.round(-3) rounds to the nearest thousand 
  var n,factor,breakPoint,whole,frac;
  if (!decimals) decimals=0;
  factor=Math.pow(10,decimals);
  n=(this.valueOf()+"");         //To get the internal value of an Object, use the valueOf() method 
  if (!returnAsString) return Math.round(n*factor)/factor;
     if (!decimalSeparator) decimalSeparator=",";
     if (n==0) return "0."+((factor+"").substr(1));
     breakPoint=(n=Math.round(n*factor)+"").length-decimals;
  whole = n.substr(0,breakPoint);
  if (decimals>0){ 
    frac = n.substr(breakPoint);
    if (frac.length<decimals) frac=(Math.pow(10,decimals-frac.length)+"").substr(1)+frac;
                                    return whole+decimalSeparator+frac;
  }else return whole+((Math.pow(10,-decimals)+"").substr(1));
} 

String.prototype.insertAt=function(loc,strChunk){ 
  return (this.valueOf().substr(0,loc))+strChunk+(this.valueOf().substr(loc)) 
} 
/*
 * 
 * 
 * var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
 * var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
 * document.write(weekday[d.getDay()] + " ")
 * document.write(d.getDate() + ". ")
 * document.write(monthname[d.getMonth()] + " ")
 * 
 * new Date("Month dd, yyyy")
 * new Date(yy,mm,dd,hh,mm,ss)
 * new Date(yy,mm,dd)
 * new Date(milliseconds)
 * Here is how you can create a Date object for each of the ways above:
 * 
 * var my_date=new Date("October 12, 1988 13:14:00")
 * var my_date=new Date("October 12, 1988")
 * var my_date=new Date(88,09,12,13,14,00)
 * var my_date=new Date(88,09,12)
 * var my_date=new Date(500)
 * 
 * The Most Common Methods
 * 
 * NN: Netscape, IE: Internet Explorer, ECMA: Web Standard
 * 
 * Methods Explanation     NN      IE      ECMA
 * Date()  Returns a Date object   2.0     3.0     1.0
 * getDate()       Returns the date of a Date object (from 1-31)   2.0     3.0     1.0
 * getDay()        Returns the day of a Date object (from 0-6. 0=Sunday, 1=Monday, etc.)   2.0     3.0     1.0
 * getMonth()      Returns the month of a Date object (from 0-11. 0=January, 1=February, etc.)     2.0     3.0     1.0
 * getFullYear()   Returns the year of the Date object (four digits)       4.0     4.0     1.0
 * getHours()      Returns the hour of the Date object (from 0-23) 2.0     3.0     1.0
 * getMinutes()    Returns the minute of the Date object (from 0-59)       2.0     3.0     1.0
 * getSeconds()    Returns the second of the Date object (from 0-59)       2.0     3.0     1.0
 * 