module.exports = function toReadable (number) {
    let arr1 = ['zero','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
		
    let arr2 = ['', '', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety', 'hundred'];
    
    if(number >= 0 && number < 20) {
        return arr1[number];
    }
    
    if(number > 19 && number < 91 && number%10 == 0) {
        
        return arr2[number/10];
    }
    
    if(number> 99 && number < 999 && number%100 == 0){
        number = number/100;
        return arr1[number] + ' ' + arr2[10];
    }
    
    else{
    
        let str = String(number);
        if(str.length ==2) 	return arr2[str[0]] + ' ' + arr1[str[1]];
        if(str[1] == 1) return arr1[str[0]] + ' ' + arr2[10] + ' ' + arr1[str[1] + str[2]];
        else return arr1[str[0]] + ' ' + arr2[10] + ((str[1] == 0)? '': ' ' + arr2[str[1]]) + ((str[2] == 0)? '': ' ' + arr1[str[2]]);
        }
}
