function start() {
    var hh = parseInt(document.getElementById('hr').value);
    var mm = parseInt(document.getElementById('min').value);
    var ss = parseInt(document.getElementById('sec').value);
    for (var i=1;i<=24;i++)
    {
        mm=0;
        for(var j=1;j<=60;j++)
        {
            ss=0;
            for(var k=1;k<=60;k++)
            {
                ss+=1;
                document.getElementById('sec').value=ss;
            }
            if(ss=60)
            {
                ss=0;
                document.getElementById('sec').value=ss;
                mm+=1;
                document.getElementById('min').value=mm;
            }
        }
        if(mm=60)
        {
            mm=0;
            document.getElementById('min').value=mm;
            hh+=1;
            document.getElementById('hr').value=hh;
        }
            

        
    }

}