var product = "enema"; //choose which product
        var position = "1_1";
        var position2 = "8_1";
        var keyword1;  //high priority keyword
        var keyword2; // low priority keyword
        var keyword3; // low priority keyword
        var keywordtemp;
        var asin;
        var canonical;
        var ts = Math.round(new Date().getTime() / 1000);//get the unix timestap
        var superurl;
        var randomInt =  parseInt(Math.floor(Math.random() * 4) + 1); //create random number between 1-4

//window.alert(randomInt); //show windows box popup

//====================================================================================
//====================================================================================
//====================================================================================
if(product == "enema")
    {
        keyword1 = "enema";
        keyword2 = "enema+kit";
        asin = "B074BQFPXG";
        canonical = "Enema-Bag-Kit-MikaCare-Detox";
  //====================================================================================      
        if(randomInt == 1 || randomInt == 2)
            {
                keywordtemp = keyword1;
            }
        else if (randomInt == 3)
            {
                keywordtemp = keyword2;
            }
        //==========================
        if(keywordtemp != null)
            {
                 superurl = ("https://www.amazon.com/"+ canonical + "/dp/"+ asin + "/ref=sr_" + position + "_a_it?ie=UTF8&qid=" + ts + "&sr=" + position2 + "&keywords=" + keywordtemp);
            window.location.href = superurl; 
            }   
    }

//====================================================================================
//====================================================================================
//====================================================================================
