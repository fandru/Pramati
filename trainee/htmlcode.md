```
<!DOCTYPE html>
<html>
	<head>
    <link rel="stylesheet" href="styles.css">

   
    </head>
    
    
<body>
	
	
	
	<div style="overflow:auto">
	
		   <div class="logo"><img src='logo.png'    > </div> 
	   <div class="icon_sprite"><img src='icon_sprite.png'	>
<br>	<a href="">home</a>&nbsp&nbsp |&nbsp &nbsp<a href="">idea</a>&nbsp&nbsp |&nbsp &nbsp<a href="">about </a>
</div>
	
	</div>
	  
    

    <div class="banner_image">
    <img src='banner_image.jpg'>
    </div>
    
    <div class="why_html">
		<h3>Why HTML and CSS ?</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
     qui officia deserunt mollit anim id est laborum <a href="google.com">read more</a>.</p>
    </div>
    
    <div class="group">
    
<div class="c1">
<h3> Learn HTML</h3>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et 
quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum 
quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil 
molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?<br><a href="google.com" >read more</a></p>
</div>
<div class="c2">
<h3> Learn CSS </h3>
<p style ="overflow:auto;" height= 50px;>But I must explain to you how all this mistaken idea of denouncing pleasure 
and praising pain was born and I will give you a complete account of the system, 
and expound the actual teachings of the great explorer of the truth, the master-builder
 of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is 
 pleasure, but because those who do not know how to pursue pleasure rationally encounter 
 consequences that are extremely painful. Nor again is there anyone who loves or pursues 
 or desires to obtain pain of itself, because it is pain, but because occasionally circumstances 
 occur in which toil and pain can procure him some great pleasure. To take a trivial example,
  which of us ever undertakes laborious physical exercise, except to obtain some advantage 
 from it? But who has any right to find fault with a man who chooses to enjoy a pleasure
   that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure<br><br><a style="align:right" href="google.com">read more</a></p>
</div>
  
<div class="c3">
<h3> Why SEO ?</h3>
<p class="p_c3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et 
quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum 
quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil 
molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
<list>
<li>list item 1</li>
<li>list item 2</li>
<li>list item 3</li>
<li>list item 4</li>
</list>
</div>
</div>   
<div class= "c4" align="right">
	<a href="">home</a>&nbsp&nbsp |&nbsp &nbsp<a href="">idea</a>&nbsp&nbsp |&nbsp &nbsp<a href="">about </a></div> 

</div>

 

</body>
</html>
```


```
 <style>	   
	   body{
	   
	  padding:2em;
	   width:1000px;
	   margin:2px auto;
	   }
	   
   
   .logo {
   
   float:left;
  
   }
   
   .icon_sprite {
	  
	   float:right;
   
   }
    .links{
	  
	   float:right;
   
   }

   div {
	   
	   
	   padding:6px;
   }
 
   .c1 {
	   
	   float:left;
	   width:25%;
	  <--text-align:justify;-->
	    padding:1em;
   }
   .c2{
	   display:block;
	   float:left;
	    width:30%;
	    border-left:2px dotted #333;
	  
	    <!--text-align:justify;-->
	    padding:3em;
   } 
   
   .c3 {display:block;
	    padding:5px;
	    background-color: #99994d;	
	   float:right;
 height: 245px;
    width: 38%;

	   border: 3px solid #333;
	   
   }

   .group
   {
   	border-bottom: 2px dotted black;
   	height: 300px;
   }
   
   h3{
	   
	 color:green;
	 padding:0;
	 margin:0;
	   
   }
 p{
	  font-size: 11px;
	  padding:0;
	  margin:0;
  }
  li
  {
	  width: 70%;
     text-align: center;
	  
	  list-style-image: url('bullet.png');
  }
  

 .banner_image {
		   
		  border-top:2px dotted #333;
		   
		   border-bottom:2px dotted #333;
	   }
	   .why_html{
		 
		  border-bottom:2px dotted #333;
		  padding-down:0;
		  margin:0;
	  }

 ```
