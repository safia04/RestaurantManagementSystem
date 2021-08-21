 function today(){
            var x=new Date();
            var date=x.getFullYear()+'-'+("0"+(x.getMonth()+1)).slice(-2)+'-'+("0"+x.getDate()).slice(-2);
            document.getElementById("orderdate").value=date;
            
        }
        function calculate()
        {

            var name=document.getElementById("name").value;
            var size=document.getElementById("size").value;
            var foodtype=document.getElementById("foodtype").value;
            var foodPerCost;
            var quantity=document.getElementById("quantity").value;
            var price;
            if(foodtype=="Dessert" && size=="Medium")
            {
                foodPerCost=50;
            }
            else if(foodtype=="Salad" && size=="Medium")
            {
                foodPerCost=20;
            }
            else if(foodtype=="Smoothie" && size=="Medium")
            {
                foodPerCost=45;
            }
            else if(foodtype=="Soup" && size=="Medium")
            {
                foodPerCost=40;
            }
            else if(foodtype=="Chowmein" && size=="Medium")
            {
                foodPerCost=70;
            }
            else if(foodtype=="Pizza" && size=="Medium")
            {
                foodPerCost=100;
            }
            else if(foodtype=="Burger" && size=="Medium")
            {
                foodPerCost=80;
            }
            else if(foodtype=="Paneer Tikka" && size=="Medium")
            {
                foodPerCost=30;
            }
            if(foodtype=="Desssert" && size=="Large")
            {
                foodPerCost=80;
            }
            else if(foodtype=="Salad" && size=="Large")
            {
                foodPerCost=45;
            }
            else if(foodtype=="Smoothie" && size=="Large")
            {
                foodPerCost=45;
            }
            else if(foodtype=="Soup" && size=="Large")
            {
                foodPerCost=79;
            }
            else if(foodtype=="Chowmein" && size=="Large")
            {
                foodPerCost=120;
            }
            else if(foodtype=="Pizza" && size=="Large")
            {
                foodPerCost=150;
            }
            else if(foodtype=="Burger" && size=="Large")
            {
                foodPerCost=130;
            }
            else if(foodtype=="Paneer Tikka" && size=="Large")
            {
                foodPerCost=50;
            }
            price=quantity*foodPerCost;
            document.getElementById("result").innerHTML="Hii "+name+ "!, Your order has been successfully placed and You need to pay : Rs"+price;
            return false;
}