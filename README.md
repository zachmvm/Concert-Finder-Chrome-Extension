# Concert-Finder-Chrome-Extension

Local Concert Finder: 
Through the use of RapidAPI, created a Google Chrome Extension that found Artists/Bands playing in local area in the nearby future. Script provided the ability to customize city location, date ranges and times.

I chose to do it in a list format instead of paragraph form for aesthetic purposes that allow the user to glance at each individual artist and/or band that ill be performing nearby. This extension utilizes an API from RapidAPI that allows us to get data from the concerts in the Philadelphia area (or whatever city of your liking) in a specified range of dates so it could be anywhere from a day or two all the way up to years. For speed, functionality and aesthetic purposes I chose to do a few day span that way it does not return a list of 200 concerts flooding your page.

Lets start with index.html, for the design I chose to do device-width that way regardless if you are on a computer or a smart phone the list will be proportionate to your device of choice. I have the title as Upcoming Philadelphia Concerts and it then in list format, shows all of the artists performing in your area in the nearby future. The information and data loads in from our script.js page.

The script.js page is where all of our data is fetched so that we can get an up to date and accurate data source each time you load up your google chrome browser. It then takes this data and sources it back to the index.html page in a list format that creates a list on the side that way you can still see your main tab in your google chrome browser while also having a nice list of upcoming concerts off to the right side or wherever you have your extensions tab preference in chrome.

The manifest.json files helps us to specify basic metadata about our unique extension. Data like the name and version. It will also help us to specifu functionalities like background script, actions, and content script, author, etc. This is arguably the most neccesary file because without it the extension would not work.

All in all these files work together to create an extension that can be loaded into Google Chrome and then when chrome is turned into developer mode, you are able to utilize it right away. At the click of a couple buttons you can check to see whose performing in your area in the near future. This is convenient and saves the user time and energy "google'ing" around to find what they are looking for. Functions can also be added by future web developers like hyper links in the list of names to prompt user to site of ticket sales for that artist/band.

Hope this extension is useful! Thank you - Zach Whitsett
