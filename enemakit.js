var product = "enemakit"; //choose which product
        var keyword1;  //high priority keyword
        var keyword2; // low priority keyword
        var keywordtemp;
        var superurl;
        var randomInt =  parseInt(Math.floor(Math.random() * 4) + 1); //create random number between 1-4

//window.alert(randomInt); //show windows box popup

if(product == "enemakit")
    {
        keyword1 = "enema+kit";
        keyword2 = "enema+bag";
        brand = "mikacare";
 //====================================================================================       
        if(randomInt == 1 || randomInt == 2)
            {
                keywordtemp = keyword1;
            }
        else if (randomInt == 3 || randomInt == 4)
            {
                keywordtemp = keyword2;
            }
        //==========================
        if(keywordtemp != null)
            {
                 superurl = ("https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias&field-keywords=" +keywordtemp+ "&field-brand=" +brand);
            window.location.href = superurl; 
            }   
    }


