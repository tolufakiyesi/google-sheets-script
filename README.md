# Google Sheets Script

A basic script to perform API calls on enteries in a google sheet column and output the response in another column. 

## Usage
Open the Google sheet, copy the sheet ID from the url, should be in the format 

`https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit?ts=5c000e0d#gid=1050200009`

From the main menu, navigate to `>Tools>Script Editor`

Copy the content of the Code.gs file to the code editor and update the code with the sheet ID, the url the api is to make the request to and the column each response is to be written to 

Save and execute the run function, and after execution is completed, the response is visible on the sheet

