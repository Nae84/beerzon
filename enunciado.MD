It's 2050. The resource-scarce is getting worse.
Mad Max movie becomes real. The petrol stations are closed and just
allow customers to buy petrol bottles via Internet. We just can buy
bottles of 1L, 3L, 5L and 15L. The price may vary depending on the
petrol station. These are the price ranges for each size:
1 liter costs from 3.5€ to 4€
3 liters cost from 9€ to 10.5€
5 liters cost from 14€ to 15€
15 liters cost from 41€ to 42€
Customers have to buy just the amount of liters they need. If you buy
more, people could steal it from you.
People are tired of having to calculate how many bottles of each size do
they need.
They want a web app where you just enter the amount of liters and it
returns how many bottles of each size you have to buy and also returns
the total amount of euros to pay depending on the petrol station.
The price of each bottle has to be fetched from the back-end. We need to
develop a back-end to return a list of petrol stations and the price of
each bottle size. The price for each bottle size changes dynamically
taking into account the ranges described above. Every 30 seconds, the
petrol stations update their prices.
We are going to create our own app named “Gasazon”. In the web app, we
will show the users a table with all the petrol stations (max 10 petrol
stations), the price for each bottle size and the total amount of money
to pay depending on the liters you want to buy. If the prices change in
our back-end, the table should be updated.
For example:
Liters: 44
Buy:
• 1 units of 1 liters
• 1 units of 3 liters
• 2 units of 5 liters
• 2 units of 15 liters
Petrol Station 1L 3L 5L 15L Total
#Fake_Name_1 3.60 9.10 14.20 40.60 122.30€
#Fake_Name_2 3.70 9.05 14.25 40.10 121.45€
...
#Fake_Name_10 3.90 10.15 14.25 41.00 124.55€