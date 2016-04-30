var year,month,day;

function main(frm){	
	var Type;
	if( getDate(frm) ){
		Type = Uranai(year,month,day);
		Result(Type);
	}else{
		alert("生年月日の指定が間違っています");
	}
}

//質問内容の取得とチェック
function getDate(frm){
	var Y1,Y2,Y3,M1,D1,D2;
	var dayMax;
	var Flag;

	//フォームから年月日を取得
	Y1 = parseInt( getFormData(frm.y1) );
	Y2 = parseInt( getFormData(frm.y2) );
	Y3 = parseInt( getFormData(frm.y3) );
	M1 = parseInt( getFormData(frm.m1) );
	D1 = parseInt( getFormData(frm.d1) );
	D2 = parseInt( getFormData(frm.d2) );

	year = Y1*100 + Y2*10 + Y3;
	month = M1;
	day = D1 * 10 + D2;

	//年月日のチェック
	Flag = true;
	if(year < 1900 || year > 2099) Flag = false;
	if(month < 1 || month > 12) Flag = false;
	if(month == 2){
		if (year % 100 != 0 && year % 4 == 0 || year % 400){
			dayMax = 29;
		}else{
			dayMax = 28;
		}
	}else if(month == 4 || month == 6 || month == 9 || month == 11){
		dayMax = 30;
	}else{
		dayMax = 31;
	}
	if(day < 1 || day > dayMax) Flag = false;
	return(Flag);
}

//オプションから値を取得
function getFormData(Obj){
	var L = Obj.length - 1;
	for(i = 0; i <= L; i++){
		if(Obj.options[i].selected){
			return(Obj.options[i].value);
		}
	}
}

//占い計算
function Uranai(Y,M,D){		//Y=年,M=月,D=日
	var typeMax = 4;			//５種類の占い結果があると仮定(=5-1)

	//この下の式は占いに合わせて変更
	x1 = Math.floor(Math.log(Y) + M * Math.sin(Y) + D * Math.PI);
	x2 = x1 - typeMax * Math.floor( x1 / typeMax ) + 1;	//余りをとって種類の数に合わせる
	return(x2);
}

//占い結果の表示
function Result(X){
	//それぞれの結果ごとに表示するHTMLファイルを変える（ここでは５種類）
	switch(X){
		case 1:
			document.location = "sp48_1.html";
			break;
		case 2:
			document.location = "sp48_2.html";
			break;
		case 3:
			document.location = "sp48_3.html";
			break;
		case 4:
			document.location = "sp48_4.html";
			break;
		case 5:
			document.location = "sp48_5.html";
			break;
	}
}