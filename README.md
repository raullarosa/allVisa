# allVisa #

#### Wireframe
<p align="center">
  <img src="https://github.com/raullarosa/emergehackathon2016/blob/master/public/img/eMergeHackathon2016_slackers.jpg"/>
</p>

# What we are using #
* Meteor
* React
* React Layout
* FlowRouter


# How to use #


```
#!cmd

meteor
```
# Responsibility #
* Joel Cedano: Front/Back-end
* Raul La Rosa: Design & Front-end
* Carlos Correa: Back-end & API integration

What is the problem?
a college student,
securing your future
grocery thing
instroduce allVisa, 
take control
late night snakcing and donating
money where your mouth is

What is solution?
Visa devs and our devs
powerful just as beautiful
*features and implmentation*

To wrap up
i want to emphasive on the privilige we have
top 8% of the wealthy,our application has a unique cahrity fetaure
explain feature
1 transcation per day for 30 days and you were to make at least 1 trans a day, 300+ meals per month
which leads me into the future of our application which would be setting a budget fo what we spend our money
on depending ont he category and the charity feature, using the visa direct to sned money to 
non profits who support interests that we are aligned with
Thank you to Visa and iron hack for support, idea center for venue and emerge for bring us together.



Features:
	ON/OFF
	Block Card
		Options:
			- Deactivates all Primary and Secondary cards with the same account number to prevent all new purchases and cash withdrawals at ATM or Points of Sale when enabled.
			 Consumer Rules API 
			 - shouldDeclineAll (true or false)
	Threshold
		Options:
			- Cardholder purchases are declined when the transaction amount is greater than or equal to the predefined purchase amount
			 Consumer Rules API 
			 - declineThreshold(float 12 characters maxed) 
	Time Range
		Options:
			- When a Time Range is provided the associated control (block or alert) will only be triggered when the transaction takes place within the provided time range.
			  Consumer Rules API
			  - timeRange object
			  	- startTime and endTime (strings HH:MM)
	ATM Withdrawals
		Options:
			- Prevents cash withdrawals at ATMs and cashback transactions at points of sale when enabled.
			 Consumer Rules API
			 	- controlType (TCT_ATM_WITHDRAW)
	Brick & Mortar
		Options:
			- Prohibits all card-present transactions at merchant points of sale.
			 Consumer Rules API
			 	- controlType (TCT_BRICK_AND_MORTAR)
	E-commerce
		Options:
			- Prohibits all card-not-present transactions at e-commerce and Mail Order/Telephone Order (MOTO) merchants when enabled. 
			 Consumer Rules API
			 	- controlType (TCT_E_COMMERCE)
	International
		Options:
			- Prohibits international card-present transactions whenever the country code of the merchant does not match the country code of the issuer.
			 Consumer Rules API
			    - controlType (TCT_CROSS_BORDER)
	Auto-Pay
		Options:
			- Prohibits all automatic bill payments (recurring transactions) associated with the account, such as monthly gym memberships or subscription services.
			  Consumer Rules API
			 	- controlType (TCT_AUTO_PAY)
	Budget
		Options:
			- Set a budget limit for general transactions
			 Consumer Rules API
			    - spendLimit (object) 
				  - type (LMT_MONTH, LMT_WEEK, LMT_DAY)
				  - currentPeriodSpend 
				  - declineThreshold (double)
				  - alertThreshold (double)
				  - currentPeriodEnd (string)
	Charity
		Options:
			- Donate a set amount per transaction to a charity of your choice
