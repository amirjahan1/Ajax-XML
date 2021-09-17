# Infinite Scrolling Library [JavaScript-jQuery]
**(JavaScript-jQuery plugin)** library for **auto infinite scrolling** in your webpage.
# Introduction
you can use this lib for implement **infinite scrolling** as easy as posible just in few second!
Infinite scrolling can be used on many sites. Including shops, bookstores, blogs and ...
### Donate If you are interested
[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=8GN4E4BLAEBR2&lc=US&item_name=software%20donate&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

#Demo
[See Demo Page](https://cdn.rawgit.com/hamedtaheri32/infinite-scrolling/master/demo.html)

# Dependency
jQuery library must be added in your webpage. Recommended version : 1.11.+ 
# Install
1- first add **jQuery** library in your webpage.
```javascript
<script src="jquery.min.js"></script>
```
2- second add **infinite_scroll.js** in your webpage
```javascript
<script src="infinite_scroll.js"></script>
```
**Recommended** : add js libs at the end of your body tag to boost your webpage speed.
```javascript
</html>
  <head>...</head>
  <body>
    ...
    <script src="jquery.min.js"></script>
    <script src="infinite_scroll.js"></script>
  </body>
</html>
```

# Usage
1- add libs link in **head** or end of **body** tag.

2- add 'div' tag with special ID in your body.**_here id is post_**. elements will be added Here during scrolling.
```javascript
<div id="post"></div>
```

3- add jQuery event ready function. in it we use infinite_scrolling plugin like this : 

```javascript
<script>
$(document).ready(function(){
    $(document).infiniteJscroll({
        offset:0,
        topOfPage:function(){
            console.log('Scrolled to Page Top');

        },
        bottomOfPage:function(){
            console.log('Scrolled to Page Bottom');
            addContent();
        },
        pageInit:function(){
           console.log('Initialize page');
            addContent();
            addContent();
            addContent();
        }
    });
});
//This method used for simulate loading data from server. replace it with AJAX loading method.
function addContent() {
    var c = '';
    for (var i = 0; i < 10; i++) {
        c += '<a class="box"></a>';
    }
    $("#post").append(c);
}

</script>
```

4- can use this CSS for box class :

```css
<style>
	.box{
	position:relative;
	display: inline-block;
	width:150px;
	height:200px;
	margin:10px;
	background-color:#fbcd12;
	}
</style>
```

# Functions and Options
###offset:
**int** value (default is 100): The remaining amount of scrolling to trigger **bottomOfPage** method. when you scrolling down to reach bottom of page.
###topOfPage:
This method will be triggered when you Scroll to **Page Top**.
###bottomOfPage:
This method will be triggered when you Scroll to **page bottom**. (offset was operated here)
###pageInit:
This method will **only be executed once** when the page is loaded. You can use this method to initialize.

#License
For **Hamed Taheri** under [Apache License 2.0](http://www.apache.org/licenses/).
you can use this plugin in your personal and commercial project freely. _just link to this page in your source code_.

##If you are interested, do not forget to **donate** to support the developer.

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=8GN4E4BLAEBR2&lc=US&item_name=software%20donate&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

<!-- Start of counter Code -->
visit: <div align="center"><img src="http://simplehitcounter.com/hit.php?uid=2150209&f=0&b=16777215" border="0" height="18" width="83" alt="counter"></div>
<!-- End of Code -->


