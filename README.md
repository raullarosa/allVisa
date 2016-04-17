# Simple Meteor/React template #

Great for throwing up quick Meteor/React apps


# What we are using #
* Meteor
* React
* React Layout
* FlowRouter


# How to use #


```
#!cmd

Meteor
```

Features:
	ON/OFF
	Alert
	Overall
		Options:
			- block or allow all transactions
			 Consumer Rules API 
			 - shouldDeclineAll (true or false)
	Threshold
		Options:
			- set the amount limit for transaction
			 Consumer Rules API 
			 - declineThreshold(float 12 characters maxed) 
	Time Range
		Options:
			- set a time frame which you will block all transactions
			  Consumer Rules API
			  - timeRange object
			  	- startTime and endTime (strings HH:MM)
	ATM Withdrawals
		Options:
			- set an amount for atm withdrawals
			 Consumer Rules API
			 	- controlType (TCT_ATM_WITHDRAW)
	Brick & Mortar
		Options:
			- block or allow all offline purchases
			 Consumer Rules API
			 	- controlType (TCT_BRICK_AND_MORTAR)
	E-commerce
		Options:
			- block or allow all online purchases
			 Consumer Rules API
			 	- controlType (TCT_E_COMMERCE)
	International
		Options:
			- select which countries you allow transactions to be in
			 Consumer Rules API
			    - controlType (TCT_CROSS_BORDER)
	Auto-Pay
		Options:
			- block or allow all recurring transactions
			  Consumer Rules API
			 	- controlType (TCT_AUTO_PAY)
	Budget
		Options:
			- set a budget for general transactions
			 Consumer Rules API
			    - spendLimit (object) 
				  - type (LMT_MONTH, LMT_WEEK, LMT_DAY)
				  - currentPeriodSpend 
				  - declineThreshold (double)
				  - alertThreshold (double)
				  - currentPeriodEnd (string)
	Charity
		Options:
			- donate the leftover cents or a set amount per transaction to a charity of your choice
